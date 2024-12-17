import { useState } from "react";
import Gift from "./components/gift/Gift";

function App() {
  const [isIdle, setIsIdle] = useState(true);

  const handleClick = () => {
    setIsIdle((prev) => !prev);
  };

  return (
    <main
      onClick={handleClick}
      className="bg-slate-500/50 h-screen w-screen flex items-center justify-center"
    >
      <Gift isIdle={isIdle} />
    </main>
  );
}

export default App;
