import { useState } from "react";

export default function useAppState() {
  const DEFAULT_ROTATION = { x: -30, y: -45 };
  const [currentRotation, setCurrentRotation] = useState(DEFAULT_ROTATION);
  const [momentum, setMomentum] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const appState = {
    currentRotation: {
      value: currentRotation,
      set: setCurrentRotation,
      restoreDefault: () => {
        setCurrentRotation(DEFAULT_ROTATION);
      },
    },
    momentum: {
      value: momentum,
      set: setMomentum,
      restoreDefault: () => {
        setMomentum({ x: 0, y: 0 });
      },
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
