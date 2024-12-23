import { useCallback, useEffect } from "react";
import { AppState } from "../../hooks/useAppState";

export default function Message({ appState }: { appState: AppState }) {
  const setIsMessageOpen = appState.isMessageOpen.set;

  const handleClick = useCallback(() => {
    setIsMessageOpen(true);
  }, [setIsMessageOpen]);

  useEffect(() => {
    if (!appState.isBoxOpen.value) {
      setIsMessageOpen(false);
    }
  }, [appState.isBoxOpen.value, setIsMessageOpen]);

  return (
    <section className="grid items-center justify-items-center m-4 h-full">
      {/* Message Article */}
      <article
        className={`max-w-md col-span-full row-span-full transition-all duration-500 ${
          appState.isMessageOpen.value
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
        style={{ boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" }}
      >
        <header className="bg-gradient-to-br from-red-300 to bg-green-400 via-white px-4 py-2 border-b-2 border-gray-200 rounded-t-md">
          <p className="text-2xl font-extrabold bg-gradient-to-b from-blue-400 to-blue-500 via-blue-300 drop-shadow-lg bg-clip-text text-transparent leading-norma">
            Grandma and Grandpa,
          </p>
        </header>
        <div className="bg-blue-50 px-6 py-4 font-serif text-gray-700 rounded-b-md shadow-inner border border-gray-200 flex flex-col gap-4">
          <p className="text-xl font-extrabold bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent leading-norma w-fit">
            Merry Christmas!
          </p>
          <p>
            I just wanted to let you know how much I appreciate everything that
            you do for me. Thank you for always being there when I need help,
            someone to listen to me, or just some company. Your love and support
            mean the world to me, and I&apos;m so lucky to have you in my life.
          </p>
          <p>
            I hope you have a great Christmas and know how much you both mean to
            me.
          </p>
          <p>
            Love, <br />
            Josh
          </p>
        </div>
      </article>

      {/* Message Button */}
      <button
        onClick={handleClick}
        className={`bg-yellow-200 border-yellow-400 border-4 rounded-full h-20 w-20 col-span-full row-span-full transition-all duration-300 transform glowing ${
          appState.isMessageOpen.value
            ? "opacity-0 pointer-events-none"
            : "opacity-100 hover:scale-110 shadow-lg"
        }`}
      >
        <div className="relative flex items-center justify-center h-full w-full animate-pulse">
          <span className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-80"></span>
          <span className="absolute inset-0 rounded-full bg-yellow-300 blur-2xl opacity-60"></span>
          <span className="absolute rounded-full bg-yellow-500 h-3/4 w-3/4"></span>
        </div>
      </button>
    </section>
  );
}
