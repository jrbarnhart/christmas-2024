import { useEffect, useState } from "react";

const Snowflake = ({ x }: { x: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      stroke="current-color"
      viewBox="0 0 33.867 33.867"
      className={`absolute h-6 w-6 -top-20 stroke-blue-300 snowflake`}
      style={{ left: x }}
    >
      <g fill="none">
        <path
          strokeLinejoin="round"
          strokeWidth="1.058"
          d="m20.681 23.425-3.748-2.294-3.748 2.294.113-4.393-3.86-2.099 3.86-2.099-.113-4.393 3.748 2.294 3.748-2.294-.112 4.393 3.86 2.1-3.86 2.098z"
          paintOrder="fill markers stroke"
        ></path>
        <g strokeLinecap="round">
          <path strokeWidth="1.055" d="M16.933.536V33.33"></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m13.858 2.282 3.075 3.076 3.076-3.076"
          ></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m22.043 4.217-5.11 5.11-5.109-5.11m8.185 27.368-3.076-3.076-3.076 3.076"
          ></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m11.824 29.65 5.11-5.11 5.11 5.11"
          ></path>
        </g>
        <g strokeLinecap="round">
          <path strokeWidth="1.055" d="M31.134 8.735 2.732 25.132"></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m28.083 6.944-1.125 4.202 4.201 1.126"
          ></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m30.5 15-6.98-1.87 1.87-6.98M5.783 26.923l1.126-4.202-4.202-1.126"
          ></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m3.365 18.867 6.98 1.87-1.87 6.98"
          ></path>
        </g>
        <g strokeLinecap="round">
          <path strokeWidth="1.055" d="M31.133 25.132 2.732 8.734"></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m31.159 21.595-4.202 1.126 1.126 4.201"
          ></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m25.39 27.716-1.87-6.98 6.98-1.87M2.706 12.271l4.202-1.126-1.126-4.202"
          ></path>
          <path
            strokeLinejoin="round"
            strokeWidth="1.058"
            d="m8.475 6.15 1.87 6.98L3.365 15"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<{ id: number; x: number }[]>([]);
  const SNOWFLAKE_CREATION_INTERVAL = 300;
  const SNOWFLAKE_CLEANUP_INTERVAL = 1000;
  const SNOWFLAKE_DURATION = 10000;

  // Set an interval that creates snowflakes
  useEffect(() => {
    const creationInterval = setInterval(() => {
      const id = Date.now();
      const x = Math.random() * window.innerWidth;
      setSnowflakes((prev) => [...prev, { id, x }]);
    }, SNOWFLAKE_CREATION_INTERVAL);

    return () => {
      clearInterval(creationInterval);
    };
  });

  // Set an interval to cleanup old snowflakes
  useEffect(() => {
    const cleanupInteval = setInterval(() => {
      setSnowflakes((prev) =>
        prev.filter((flake) => Date.now() - flake.id < SNOWFLAKE_DURATION)
      );
    }, SNOWFLAKE_CLEANUP_INTERVAL);

    return () => {
      clearInterval(cleanupInteval);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {snowflakes.map((flake) => {
        return <Snowflake key={flake.id} x={flake.x} />;
      })}
    </div>
  );
}
