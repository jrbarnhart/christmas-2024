import { useEffect, useRef } from "react";
import { AppState } from "./useAppState";

export default function useMusic({ appState }: { appState: AppState }) {
  const musicRef = useRef(new Audio("/music.mp3"));
  const setIsMusicPlaying = appState.isMusicPlaying.set;

  useEffect(() => {
    const audio = musicRef.current; // Capture the ref's current value.
    audio.loop = true;
    audio.volume = 0.07;

    const handleMouseDown = () => {
      setIsMusicPlaying(true);
      audio.play().catch(() => {
        console.error("There was an error while starting the music.");
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
        setIsMusicPlaying(false);
      }
    };

    window.addEventListener("mousedown", handleMouseDown, { once: true });
    window.addEventListener("touchend", handleMouseDown, { once: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      setIsMusicPlaying(false); // Stop music when cleanup happens.
      audio.pause(); // Explicitly pause the audio.
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchend", handleMouseDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [setIsMusicPlaying]);

  return musicRef;
}

export type UseMusicType = ReturnType<typeof useMusic>;
