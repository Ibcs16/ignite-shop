import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { SuccessContainer, SuccessImage } from "../styles/pages/success";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface SessionProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, product }: SessionProps) {
  return (
    <>
      <Head>
        <title>Successful Purchase | Ignite Shop</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SuccessContainer>
        <h1>{product.name}</h1>
        <SuccessImage>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={114}
            height={114}
          />
        </SuccessImage>
        <p>
          Thanks for buying <b>{product.name}</b>, <b>{customerName}</b>!
          <br />
          It will be ready to be shipped soon.
        </p>
        <footer>
          <Link href="/" prefetch={false}>
            Explore catalog
          </Link>
        </footer>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string;

  if (!sessionId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
