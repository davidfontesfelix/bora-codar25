import styles from './Navbar.module.css'
import ButtonsIcons from '../ButtonsIcons'
import sideBarIcon from '../../assets/icons/akar-icons_sidebar-left.svg'
import back from '../../assets/icons/chevron-back.svg'
import forward from '../../assets/icons/chevron-forward.svg'

export default function Navbar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.actions}>
        <ButtonsIcons src={sideBarIcon} />
        <ButtonsIcons src={back} />
        <ButtonsIcons src={forward} />
      </div>
    </div>
  )
}
