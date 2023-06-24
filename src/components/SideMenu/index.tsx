import ButtonsIcons from '../ButtonsIcons'
import styles from './SideMenu.module.css'
import play from '../../assets/icons/play-circle-outline 1.svg'
import accessibility from '../../assets/icons/accessibility-outline 1.svg'
import albums from '../../assets/icons/albums-outline 1.svg'
import search from '../../assets/icons/search-outline 1.svg'
import { useContext } from 'react'
import MyContextPlayOrPause from '@/context/MyContextPlay'
import MyContextShowSideMenu from '@/context/MyContextShowSideMenu'

export default function SideMenu() {
  const { playOrPause, setPlayOrPause } = useContext(MyContextPlayOrPause)
  const { show } = useContext(MyContextShowSideMenu)
  function handlePlay() {
    if (playOrPause === false) {
      setPlayOrPause(true)
    } else {
      setPlayOrPause(false)
    }
  }

  return (
    <div className={styles.sideMenu} style={{ opacity: show ? '0' : '1' }}>
      <div className={styles.buttons}>
        <ButtonsIcons activated={playOrPause} src={play} onClick={handlePlay} />
        <ButtonsIcons src={accessibility} />
        <ButtonsIcons src={albums} />
        <ButtonsIcons src={search} />
      </div>
    </div>
  )
}
