'use client'
import { Player } from "@lottiefiles/react-lottie-player"


export const InitialPlayer = () => {
  return (
            <Player
            className="img-fluid"
            autoplay
            loop
            src="https://lottie.host/22eee177-f89f-4243-87fb-c35b60175102/Fj5jIYfyo5.json"
            background="transparent"
            style={{ height: 400, width: 'auto' }}
          /> 
  )
}
