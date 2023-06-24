import { useContext, useEffect, useRef } from 'react'
import styles from './Screen.module.css'
import MyContext from '@/context/MyContextPlay'

export default function Screen() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const { playOrPause } = useContext(MyContext)

  useEffect(() => {
    console.log(playOrPause)
    if (playOrPause === true) {
      videoRef.current?.play()
      video2Ref.current?.play()
    } else {
      videoRef.current?.pause()
      video2Ref.current?.pause()
    }
  }, [playOrPause])

  return (
    <div className={styles.screen}>
      <video
        ref={video2Ref}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '32px',
          position: 'absolute',
          filter: 'blur(50px)',
        }}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '32px',
          zIndex: '10',
          opacity: '1',
        }}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
