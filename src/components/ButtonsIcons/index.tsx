import styles from './ButtonsIcons.module.css'
import Image from 'next/image'

interface ButtonsIconsProps {
  src: any
  onClick?: any
  activated?: boolean
}

export default function ButtonsIcons(props: ButtonsIconsProps) {
  const { activated } = props

  return (
    <div
      onClick={props.onClick}
      className={styles.icons}
      style={{
        backgroundColor: activated ? 'rgba(255, 255, 255, 0.20)' : '',
      }}
    >
      <Image width={24} src={props.src} alt="botão para mostrar a side bar" />
    </div>
  )
}
