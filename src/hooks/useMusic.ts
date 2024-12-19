import { useEffect, useRef } from "react";

export default function useMusic() {
  const musicRef = useRef(new Audio("/music.mp3"));

  useEffect(() => {
    musicRef.current.loop = true;
    musicRef.current.volume = 0.07;

    musicRef.current.play().catch(() => {
      console.log("There was an error while starting the music.");
    });
  }, []);

  return musicRef;
}

export type Music = ReturnType<typeof useMusic>;