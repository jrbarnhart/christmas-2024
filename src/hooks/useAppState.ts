import { useState } from "react";

export default function useAppState() {
  const [currentRotation, setCurrentRotation] = useState({ x: -30, y: -45 });
  const [momentum, setMomentum] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const appState = {
    currentRotation: {
      value: currentRotation,
      set: setCurrentRotation,
    },
    momentum: {
      value: momentum,
      set: setMomentum,
    },
    isDragging: {
      value: isDragging,
      set: setIsDragging,
    },
    isBoxOpen: {
      value: isBoxOpen,
      set: setIsBoxOpen,
    },
  };

  return appState;
}

export type AppState = ReturnType<typeof useAppState>;
