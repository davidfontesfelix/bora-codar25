import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Screen from '@/components/Screen'
import SideMenu from '@/components/SideMenu'
import { MyContextPlayProvider } from '@/context/MyContextPlay'
import { MyContextSideMenuProvider } from '@/context/MyContextShowSideMenu'
import { useRef, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const background = backgroundRef.current
      const mouseX = event.clientX
      const mouseY = event.clientY
      const translateX = -(mouseX / 60)
      const translateY = -(mouseY / 60)

      if (background) {
        background.style.transform = `translate(${translateX}px, ${translateY}px)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className={`${inter.className} ${styles.section}`}>
      <div className={styles.background} ref={backgroundRef}></div>
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
