import { useCallback } from "react";
import { AppState } from "../../hooks/useAppState";
import { UseMusicType } from "../../hooks/useMusic";
import { Music, VolumeOff } from "lucide-react";

export default function MusicToggle({
  music,
  appState,
}: {
  music: UseMusicType;
  appState: AppState;
}) {
  const handleClick = useCallback(() => {
    if (!music.current.paused) {
      music.current.pause();
      appState.isMusicPlaying.set(false);
    } else {
      music.current
        .play()
        .then(() => {
          appState.isMusicPlaying.set(true);
        })
        .catch(() => {
          console.error("There was an error while starting the music.");
        });
    }
  }, [appState.isMusicPlaying, music]);
  return (
    <button
      onClick={handleClick}
      type="button"
      className="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center"
    >
      {appState.isMusicPlaying.value ? <VolumeOff /> : <Music />}
    </button>
  );
}
