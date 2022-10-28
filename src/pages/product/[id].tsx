import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { stripe } from "../../lib/stripe";
import {
  ProductContainer,
  ProductDetails,
  ProductImage,
} from "../../styles/pages/product";
import { formatPrice } from "../../utils/price";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    priceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isLoading, setIslLoading] = useState(false);

  if (isFallback) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleBuyProduct = async () => {
    try {
      setIslLoading(true);
      const { checkoutUrl } = await axios
        .post("/api/checkout", {
          priceId: product.priceId,
        })
        .then((response) => response.data);

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch {
      // Add to sentry or something
      // Show toast
      alert("Failed to buy product");
    } finally {
      setIslLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ProductImage>
          <Image src={product.imageUrl} alt={product.name} fill />
        </ProductImage>
        <ProductDetails>
          <h1>{product.name}</h1>
          <strong>{product.price}</strong>
          <p>{product.description}</p>
          <button disabled={isLoading} onClick={handleBuyProduct}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await stripe.products.list({
  //   expand: ["data.default_price"],
  //   limit: 4,
  // });
  // const paths = response.data.map((product) => ({
  //   params: { id: product.id },
  // }));
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  {
    id: string;
  }
> = async ({ params }) => {
  const { id } = params;

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: formatPrice(
          (product.default_price as { unit_amount: number }).unit_amount / 100
        ),
        priceId: (product.default_price as { id: string }).id,
      },
    },
    revalidate: 60 * 5, // 5 minutes
  };
};
