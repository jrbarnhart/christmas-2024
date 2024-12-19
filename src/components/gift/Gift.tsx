import { AppState } from "../../hooks/useAppState";
import { Bottom, Side, Top } from "./textures";

export default function Gift({
  cubeRef,
  appState,
}: {
  cubeRef: React.RefObject<HTMLDivElement>;
  appState: AppState;
}) {
  const isBoxOpen = appState.isBoxOpen.value;
  return (
    <div className="scene">
      <div className="cube" ref={cubeRef}>
        <div
          className={`cube__face cube__face--front ${
            isBoxOpen ? "cube__face--front-open" : ""
          }`}
        >
          <Side />
        </div>
        <div
          className={`cube__face cube__face--back ${
            isBoxOpen ? "cube__face--back-open" : ""
          }`}
        >
          <Side />
        </div>
        <div
          className={`cube__face cube__face--left ${
            isBoxOpen ? "cube__face--left-open" : ""
          }`}
        >
          <Side />
        </div>
        <div
          className={`cube__face cube__face--right ${
            isBoxOpen ? "cube__face--right-open" : ""
          }`}
        >
          <Side />
        </div>
        <div
          className={`${
            isBoxOpen ? "cube__face--top-open " : ""
          }cube__face cube__face--top`}
        >
          <Top />
        </div>
        <div
          className={`cube__face cube__face--bottom ${
            isBoxOpen ? "cube__face--bottom-open" : ""
          }`}
        >
          <Bottom />
        </div>
      </div>
    </div>
  );
}
