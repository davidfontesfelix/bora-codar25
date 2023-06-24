import styles from './ButtonsIcons.module.css'
import Image from 'next/image'

interface ButtonsIconsProps {
  src: any
  onClick?: any
}

export default function ButtonsIcons(props: ButtonsIconsProps) {
  return (
    <div onClick={props.onClick} className={styles.icons}>
      <Image width={24} src={props.src} alt="botão para mostrar a side bar" />
    </div>
  )
}
