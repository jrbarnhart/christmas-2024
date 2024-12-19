import { useEffect } from "react";
import Gift from "./components/gift/Gift";
import useAppState from "./hooks/useAppState";
import useControls from "./hooks/useControls";

function App() {
  const appState = useAppState();
  const { handleMouseDown, cubeRef } = useControls({ appState });

  const isBoxOpen = appState.isBoxOpen.value;
  const setMomentumToDefault = appState.momentum.restoreDefault;
  const setCurrentRotationToDefault = appState.currentRotation.restoreDefault;
  const setIsDragging = appState.isDragging.set;
  useEffect(() => {
    if (isBoxOpen) {
      setMomentumToDefault();
      setCurrentRotationToDefault();
      setIsDragging(false);
    }
  }, [
    isBoxOpen,
    setCurrentRotationToDefault,
    setIsDragging,
    setMomentumToDefault,
  ]);

  return (
    <main className="bg-slate-500/50 h-screen w-screen touch-none flex flex-col">
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className="w-full h-full flex items-center justify-center"
      >
        <Gift cubeRef={cubeRef} />
      </div>
      <button
        type="button"
        id="open-button"
        className="bg-zinc-900 hover:bg-zinc-700 active:bg-zinc-800 text-neutral-50 border-2 border-green-500 w-min mb-10 self-center text-nowrap p-3 rounded-md"
        onClick={() => {
          appState.isBoxOpen.set((val) => !val);
        }}
      >
        {`${isBoxOpen ? "Close" : "Open"} Present`}
      </button>
    </main>
  );
}

export default App;
