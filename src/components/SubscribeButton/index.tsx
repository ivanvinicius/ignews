import { useSession, signIn } from 'next-auth/react'

import { api } from '../../services/api'
import { getStripeJS } from '../../services/stripe-browser'
import styles from './styles.module.scss'

interface ISubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const { data: session } = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
    }

    try {
      // Calling the API ROUTE and creating a checkout session
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJS()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}
