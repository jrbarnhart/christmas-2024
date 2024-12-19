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
      id="music-toggle"
      className="h-12 w-12 bg-red-500 hover:bg-red-400 active:bg-red-600 text-neutral-50 border-4 border-green-500 rounded-full flex items-center justify-center shadow-lg"
    >
      {appState.isMusicPlaying.value ? <VolumeOff /> : <Music />}
    </button>
  );
}
