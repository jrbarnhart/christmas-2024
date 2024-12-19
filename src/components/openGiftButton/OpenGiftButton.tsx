import { AppState } from "../../hooks/useAppState";

export default function OpenGiftButton({ appState }: { appState: AppState }) {
  return (
    <button
      type="button"
      id="open-button"
      className="bg-red-500 hover:bg-red-400 active:bg-red-600 text-neutral-50 border-4 border-green-500 w-min mb-10 self-center text-nowrap p-3 rounded-md shadow-md"
      onClick={() => {
        appState.isBoxOpen.set((val) => !val);
        appState.isDragging.set(false);
        appState.momentum.restoreDefault();
        appState.currentRotation.restoreDefault();
      }}
    >
      {`${appState.isBoxOpen.value ? "Close" : "Open"} Present`}
    </button>
  );
}
