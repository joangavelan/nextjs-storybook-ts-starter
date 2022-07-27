import React from 'react'
import styles from '@styles/Button.module.scss'

interface ButtonProps {
  text: string
  backgroundColor: string
}

const Button = ({ text, backgroundColor }: ButtonProps) => {
  return (
    <button style={{ backgroundColor }} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
