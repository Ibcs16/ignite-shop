import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Link from "next/link";
import { formatPrice } from "../utils/price";
import Head from "next/head";

interface HomeProps {
  products: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 48,
        },
      },
    },
  });
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`product/${product.id}`}
            prefetch={false}
            key={product.id}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} alt="Shirt 1" fill />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => ({
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: formatPrice(
      (product.default_price as { unit_amount: number }).unit_amount / 100
    ),
  }));

  return {
    props: {
      products,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};
