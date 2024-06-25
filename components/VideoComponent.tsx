'use client'
import { useState, useRef } from "react";
import { BiPlay, BiPause } from "react-icons/bi";

export default function VideoComponent() {
  const [ mouseEnter, setMouseEnter ] = useState(false)
  const [ isPlayed, setIsPlayed ] = useState(false)
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
      setMouseEnter(true)
  }

  const handleMouseLeave = () => {
    setMouseEnter(false)
  }

  const handlePlayedButton = () => {
    const video = videoRef.current
    if(isPlayed) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlayed(!isPlayed)
  }

  return (
    <div className="relative transition-all" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <video ref={videoRef} src="/video/kopi.mp4" className="rounded-3xl lg:min-w-full lg:max-h-[450px]"></video>
        {mouseEnter && (
          <div className="rounded-full text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer bg-green-600 " onClick={handlePlayedButton}>
            {isPlayed ? (
              <BiPause className="text-5xl"/>
            ) : (
              <BiPlay className="text-5xl"  />

            )}

          </div>
        )}
       
    </div>
  )
}
