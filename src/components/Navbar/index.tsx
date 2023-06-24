import styles from './Navbar.module.css'
import ButtonsIcons from '../ButtonsIcons'
import { useContext } from 'react'
import MyContextShowSideMenu from '@/context/MyContextShowSideMenu'
import Image from 'next/image'

import sideBarIcon from '../../assets/icons/akar-icons_sidebar-left.svg'
import back from '../../assets/icons/chevron-back.svg'
import forward from '../../assets/icons/chevron-forward.svg'
import text from '../../assets/icons/text 1.svg'
import lock from '../../assets/icons/lock-closed 1.svg'
import refresh from '../../assets/icons/refresh 1.svg'
import share from '../../assets/icons/share-outline 1.svg'
import add from '../../assets/icons/add-outline 1.svg'
import copy from '../../assets/icons/copy-outline 1.svg'

export default function Navbar() {
  const { show, setShow } = useContext(MyContextShowSideMenu)

  return (
    <div className={styles.navBar}>
      <div className={styles.actions}>
        <ButtonsIcons
          onClick={() => setShow(!show)}
          activated={!show}
          src={sideBarIcon}
        />
        <ButtonsIcons onClick={() => window.history.back()} src={back} />
        <ButtonsIcons onClick={() => window.history.forward()} src={forward} />
        <div className={styles.adressBar}>
          <Image
            src={text}
            alt=""
            style={{ marginLeft: '12px', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={lock} alt="" />
            <p style={{ color: 'rgba(255, 255, 255, 0.80)', fontSize: '15px' }}>
              rocketseat.com
            </p>
          </div>
          <Image
            onClick={() => window.location.reload()}
            style={{ marginRight: '12px', cursor: 'pointer' }}
            src={refresh}
            alt=""
          />
        </div>
        <ButtonsIcons src={share} />
        <ButtonsIcons src={add} />
        <ButtonsIcons src={copy} />
      </div>
    </div>
  )
}
