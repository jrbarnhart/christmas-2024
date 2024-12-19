import Gift from "./components/gift/Gift";
import useAppState from "./hooks/useAppState";
import useControls from "./hooks/useControls";

function App() {
  const appState = useAppState();
  const { handleMouseDown, cubeRef } = useControls({ appState });

  return (
    <main className="bg-slate-500/50 h-screen w-screen touch-none">
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className="w-full h-full flex items-center justify-center"
      >
        <Gift cubeRef={cubeRef} />
      </div>
    </main>
  );
}

export default App;
