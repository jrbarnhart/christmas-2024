import { AppState } from "../../hooks/useAppState";

export default function Message({ appState }: { appState: AppState }) {
  return (
    <section className="grid">
      <button className="bg-yellow-200 border-yellow-400 border-4 rounded-full h-6 w-6" />
      {appState.isMessageOpen.value ? (
        <article>
          <header>
            <p>Grandma and Grandpa,</p>
          </header>
          <div>
            <p>Merry Christmas!</p>
            <p>
              I just wanted to let you know how much I appreciate everything
              that you do for me. Thank you for always being there when I need
              help, someone to listen to me, or just some company. Your love and
              support mean the world to me, and I&apos;m so lucky to have you in
              my life.
            </p>
            <p>
              I hope you have a great Christmas and know how much you both mean
              to me.
            </p>
            <p>Love,</p>
            <p>Josh</p>
          </div>
        </article>
      ) : (
        <article />
      )}
    </section>
  );
}
