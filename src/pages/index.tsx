import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Screen from '@/components/Screen'
import SideMenu from '@/components/SideMenu'
import { MyContextPlayProvider } from '@/context/MyContextPlay'
import { MyContextSideMenuProvider } from '@/context/MyContextShowSideMenu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className={`${inter.className} ${styles.section}`}>
      <Background />
      <div className={styles.container}>
        <main className={styles.main}>
          <MyContextPlayProvider>
            <MyContextSideMenuProvider>
              <Navbar />
              <SideMenu />
            </MyContextSideMenuProvider>
            <Screen />
          </MyContextPlayProvider>
        </main>
      </div>
    </section>
  )
}
