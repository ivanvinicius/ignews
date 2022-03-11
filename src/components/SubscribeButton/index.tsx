import { useSession, signIn } from 'next-auth/react'

import styles from './styles.module.scss'

interface ISubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const { data: session } = useSession()

  function handleSubscribe() {
    if (!session) {
      signIn('github')
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
