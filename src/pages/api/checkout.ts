import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

interface ReqBody {
  priceId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body as ReqBody;
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
  if (!priceId) {
    return res.status(400).json({ message: "Price ID is required" });
  }

  const cancel_url = `${process.env.NEXT_URL}/cancel`;
  const success_url = `${process.env.NEXT_URL}/success`;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    cancel_url,
    success_url,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
