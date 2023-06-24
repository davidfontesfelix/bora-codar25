import { useContext, useEffect, useRef, useState } from 'react'
import styles from './Screen.module.css'

import play from '../../assets/icons/play-circle-outline 1.svg'
import Image from 'next/image'
import MyContextPlayOrPause from '@/context/MyContextPlay'

export default function Screen() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const { playOrPause, setPlayOrPause } = useContext(MyContextPlayOrPause)

  const [currentTime, setCurrentTime] = useState<any>(0)
  const [duration, setDuration] = useState<any>(0)

  useEffect(() => {
    if (playOrPause === true) {
      videoRef.current?.play()
      video2Ref.current?.play()
      setInterval(() => {
        setCurrentTime(videoRef.current?.currentTime)
        setDuration(videoRef.current?.duration)
      }, 1000)
    } else {
      videoRef.current?.pause()
      video2Ref.current?.pause()
    }
  }, [playOrPause])

  const progressStyle = {
    width: `${(currentTime / duration) * 100}%`,
    height: '10px',
  }

  return (
    <div className={styles.screen}>
      <video className={styles.videoBlur} ref={video2Ref}>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <video className={styles.video} ref={videoRef}>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className={styles.screenHover}>
        <div onClick={() => setPlayOrPause(!playOrPause)}>
          <Image
            width={100}
            src={play}
            alt="play ou pause"
            style={{
              cursor: 'pointer',
              backgroundColor: playOrPause ? 'rgba(255, 255, 255, 0.20)' : '',
              padding: '8px',
              borderRadius: '64px',
            }}
          />
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.circle}></div>
        <div className={styles.progress} style={progressStyle}></div>
      </div>
    </div>
  )
}
