import { useRef, useState } from "react";
import Gift from "./components/gift/Gift";

function App() {
  const IDLE_TIMEOUT = 7000;

  const [isIdle, setIsIdle] = useState(true);
  const timerRef = useRef<number | null>(null);

  const handleMouseDown = () => {
    setIsIdle(false);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, IDLE_TIMEOUT);
  };

  return (
    <main
      onMouseDown={handleMouseDown}
      className="bg-slate-500/50 h-screen w-screen flex items-center justify-center"
    >
      <Gift isIdle={isIdle} />
    </main>
  );
}

export default App;
