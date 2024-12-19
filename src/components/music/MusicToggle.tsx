import { useCallback } from "react";
import { AppState } from "../../hooks/useAppState";
import { Music } from "../../hooks/useMusic";

export default function MusicToggle({
  music,
  appState,
}: {
  music: Music;
  appState: AppState;
}) {
  const handleClick = useCallback(() => {
    if (!music.current.paused) {
      music.current.pause();
      appState.isMusicPlaying.set(false);
    } else {
      music.current.play().catch(() => {
        console.error("There was an error while starting the music.");
      });
    }
  }, [appState.isMusicPlaying, music]);
  return (
    <button
      onClick={handleClick}
      type="button"
      className="h-10 w-10 bg-red-500 rounded-full"
    ></button>
  );
}
