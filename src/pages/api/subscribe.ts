import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { stripe } from '../../services/stripe'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    // getting info from logged user by COOCKIES on browser
    const session = await getSession({ req: request })

    // creating a new user on stripe
    const stripeCustomer = await stripe.customers.create({
      email: session.user.email
    })

    // creating a new subscription
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: process.env.STRIPE_SUBSCRIPTION_PRICE, quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_CHECKOUT_URL,
      cancel_url: process.env.STRIPE_CANCEL_CHECKOUT_URL
    })

    return response.status(200).json({ sessionId: stripeCheckoutSession.id })
  } else {
    response.setHeader('Allow', 'POST')
    response.status(405).end('Method not allowed')
  }
}
