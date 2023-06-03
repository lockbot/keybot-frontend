import Image from "next/image";
import {RenderPDFAndButtonBasedOnDevice} from "/src/app/[lang]/resume/components/deviceRendererResume";
import {getDictionary} from "/src/app/[lang]/dictionaries";
import SwitchLocale from "../components/switchLocale";
import {closeResume} from "./components/backResume";

export const metadata = {
  title: 'Lucas Borges RÉSUMÉ',
  description: 'RÉSUMÉ',
}

export default async function Resume({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          keybot
          <code className="font-mono font-bold">•</code>
          dev
          <code className="font-mono font-bold">.br/resume</code>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            {dict.top_labels.where}{' '}
            <Image
              src="/img/penpotFlow/Keybot.Dev.2.svg"
              alt="Keybot.Dev Logo"
              className="invert"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
      </section>

      <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <RenderPDFAndButtonBasedOnDevice dict={dict} />
      </section>

      <section className="mt-8 mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href={dict.resume}
          download='RESUME_LucasBorges'
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
                  &darr;
              </span>
            {' '}{dict.main_button.resume.download}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {dict.main_button.resume.message} <i>{dict.main_button.resume.name2}</i>.
          </p>
        </a>

        <a
          onClick={closeResume}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-x--1 motion-reduce:transform-none">
                  &lt;-
              </span>
            {' '}{dict.main_button.back_home.name1}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {dict.main_button.back_home.message} {dict.main_button.back_home.name2}.
          </p>
        </a>
      </section>
    </main>
  );
};