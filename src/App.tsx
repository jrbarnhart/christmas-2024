import { useRef } from "react";
import Gift from "./components/gift/Gift";

function App() {
  const cubeRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = -30;
  let currentY = -45;

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging = true;
    const { clientX, clientY } = (e as React.MouseEvent).clientX
      ? (e as React.MouseEvent)
      : (e as React.TouchEvent).touches[0];
    startX = clientX;
    startY = clientY;
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const { clientX, clientY } = (e as React.MouseEvent).clientX
      ? (e as React.MouseEvent)
      : (e as React.TouchEvent).touches[0];

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;
    startX = clientX;
    startY = clientY;

    currentX += deltaY * -0.5;
    currentY += deltaX * 0.5;

    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${currentX.toString()}deg) rotateY(${currentY.toString()}deg)`;
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <main className="bg-slate-500/50 h-screen w-screen touch-none">
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className="w-full h-full flex items-center justify-center"
      >
        <Gift cubeRef={cubeRef} />
      </div>
    </main>
  );
}

export default App;
