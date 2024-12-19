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
        <div className="cube__face cube__face--front">
          <Side />
        </div>
        <div
          className={`${
            isBoxOpen ? "cube__face--side-open " : ""
          }cube__face cube__face--back`}
        >
          <Side />
        </div>
        <div className="cube__face cube__face--left">
          <Side />
        </div>
        <div className="cube__face cube__face--right">
          <Side />
        </div>
        <div
          className={`${
            isBoxOpen ? "cube__face--top-open " : ""
          }cube__face cube__face--top`}
        >
          <Top />
        </div>
        <div className="cube__face cube__face--bottom">
          <Bottom />
        </div>
      </div>
    </div>
  );
}
