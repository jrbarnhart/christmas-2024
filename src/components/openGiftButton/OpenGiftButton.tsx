import { AppState } from "../../hooks/useAppState";

export default function OpenGiftButton({ appState }: { appState: AppState }) {
  return (
    <button
      type="button"
      id="open-button"
      className="bg-zinc-900 hover:bg-zinc-700 active:bg-zinc-800 text-neutral-50 border-2 border-green-500 w-min mb-10 self-center text-nowrap p-3 rounded-md"
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
