import { useEffect, useRef } from "react";
import { AppState } from "./useAppState";

export default function useControls({ appState }: { appState: AppState }) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const isDragging = appState.isDragging.value;
  const setIsDragging = appState.isDragging.set;
  const setMomentum = appState.momentum.set;
  const currentRotation = appState.currentRotation.value;
  const setCurrentRotation = appState.currentRotation.set;
  const isBoxOpen = appState.isBoxOpen.value;
  const initialPosRef = useRef({ x: 0, y: 0 });
  const lastMoveTimeRef = useRef(Date.now());
  const lastDeltaRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (moveEvent: MouseEvent | TouchEvent) => {
      const { clientX, clientY } = (moveEvent as MouseEvent).clientX
        ? (moveEvent as MouseEvent)
        : (moveEvent as TouchEvent).touches[0];

      const deltaX = clientX - initialPosRef.current.x;
      const deltaY = clientY - initialPosRef.current.y;

      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTimeRef.current;

      // Calculate velocity
      if (timeDelta > 0) {
        setMomentum({
          x: deltaX / timeDelta,
          y: deltaY / timeDelta,
        });
      }

      lastMoveTimeRef.current = currentTime;
      lastDeltaRef.current = { x: deltaX, y: deltaY };

      setCurrentRotation((prev) => ({
        x: prev.x + deltaY * -0.5,
        y: prev.y + deltaX * 0.5,
      }));

      initialPosRef.current = { x: clientX, y: clientY };
    };

    const handleMouseUp = () => {
      setIsDragging(false);

      // Apply momentum
      const decayTimer = setInterval(() => {
        setMomentum((prev) => {
          const next = {
            x: prev.x * 0.97,
            y: prev.y * 0.97,
          };

          if (Math.abs(next.x) < 0.01 && Math.abs(next.y) < 0.01) {
            clearInterval(decayTimer);
            return { x: 0, y: 0 };
          }

          setCurrentRotation((prevRot) => ({
            x: prevRot.x + next.y * -0.5,
            y: prevRot.y + next.x * 0.5,
          }));

          return next;
        });
      }, 16);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, setCurrentRotation, setIsDragging, setMomentum]);

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${currentRotation.x.toString()}deg) rotateY(${currentRotation.y.toString()}deg)`;
    }
  }, [currentRotation]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (isBoxOpen) return;
    const { clientX, clientY } = (e as React.MouseEvent).clientX
      ? (e as React.MouseEvent)
      : (e as React.TouchEvent).touches[0];

    initialPosRef.current = { x: clientX, y: clientY };
    lastMoveTimeRef.current = Date.now();
    lastDeltaRef.current = { x: 0, y: 0 };
    setMomentum({ x: 0, y: 0 });
    setIsDragging(true);
    e.preventDefault();
  };

  return { handleMouseDown, cubeRef };
}
