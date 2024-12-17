import { Bottom, Side, Top } from "./textures";

export default function Gift() {
  return (
    <div className="scene">
      <div className="cube">
        <div className="cube__face cube__face--front">
          <Side />
        </div>
        <div className="cube__face cube__face--back">
          <Side />
        </div>
        <div className="cube__face cube__face--left">
          <Side />
        </div>
        <div className="cube__face cube__face--right">
          <Side />
        </div>
        <div className="cube__face cube__face--top">
          <Top />
        </div>
        <div className="cube__face cube__face--bottom">
          <Bottom />
        </div>
      </div>
    </div>
  );
}