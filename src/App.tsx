import Gift from "./components/gift/Gift";
import MusicToggle from "./components/music/MusicToggle";
import OpenGiftButton from "./components/openGiftButton/OpenGiftButton";
import Snowflakes from "./components/snowflakes/Snowflakes";
import useAppState from "./hooks/useAppState";
import useControls from "./hooks/useControls";
import useMusic from "./hooks/useMusic";

function App() {
  const appState = useAppState();
  const { handleMouseDown, cubeRef } = useControls({ appState });
  const music = useMusic({ appState });

  return (
    <main className="bg-gradient-to-tr from-red-300 to-green-300 via-white h-screen w-screen touch-none grid grid-rows-3 grid-cols-3">
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className="w-full h-full flex items-center justify-center overflow-hidden row-span-full col-span-full"
      >
        <Gift cubeRef={cubeRef} appState={appState} />
      </div>
      <div className="row-start-3 col-start-2 self-center justify-self-center">
        <OpenGiftButton appState={appState} />
      </div>
      <div className="row-span-full col-span-full pointer-events-none touch-none">
        <Snowflakes />
      </div>
      <div className="row-start-1 col-start-1 flex justify-start p-10 md:p-20 h-min w-min">
        <MusicToggle appState={appState} music={music} />
      </div>
    </main>
  );
}

export default App;
