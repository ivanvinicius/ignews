/* eslint-disable multiline-ternary */

import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const [isUserLogged, setIsUserLogged] = useState(true)

  return isUserLogged ? (
    <button type="button" className={styles.buttonContainer}>
      <FaGithub color="#04D361" />
      @ivanvinicius
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.buttonContainer}>
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  )
}
