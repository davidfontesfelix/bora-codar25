import styles from './Background.module.css'

interface BackgroundProps {
  value: string
}

export default function Background(props: BackgroundProps) {
  return (
    <div
      className={styles.background}
      style={{ backgroundPosition: props.value }}
    ></div>
  )
}
