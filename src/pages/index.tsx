import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Screen from '@/components/Screen'
import SideMenu from '@/components/SideMenu'
import { MyContextProvider } from '@/context/MyContextPlay'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [valuesBackground, setValuesBackground] = useState('')

  useEffect(() => {
    const mouseMoveFunc = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      setValuesBackground(`${x / 60}px ${y / 60}px`)
    }

    window.addEventListener('mousemove', mouseMoveFunc)

    return () => {
      window.removeEventListener('mousemove', mouseMoveFunc)
    }
  }, [])

  return (
    <section className={`${inter.className} ${styles.section}`}>
      <Background value={valuesBackground} />
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar />
          <MyContextProvider>
            <SideMenu />
            <Screen />
          </MyContextProvider>
        </main>
      </div>
    </section>
  )
}
