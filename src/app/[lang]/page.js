import Image from 'next/image';
import {openResume} from "/src/app/[lang]/resume/goResume";
import {OpenRoot} from "/src/app/[lang]/rootPageOpened";

import { getDictionary } from '/src/app/[lang]/dictionaries';
import SwitchLocale from "./components/switch-locale";

export default async function Home({params: {lang}}) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OpenRoot/>
      <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div
          className="fixed left-0 top-0 flex w-full justify-center border-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          keybot
          <code className="font-mono font-bold">•</code>
          dev
          <code className="font-mono font-bold">.br</code>
        </div>
        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            {dict.top_labels.where}{' '}
            <Image
              src="/penpotFlow/Keybot.Dev.2.svg"
              alt="Keybot.Dev Logo"
              className="invert"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
      </section>

      <section className="font-mono">
        <SwitchLocale lang={dict.top_labels.lang}/>
      </section>

      <section
        className="blurry-circle relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky after:to-green-900 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:to-blue-900 before:opacity-10 after:from-sky-900 after:via-[#01ff81] before:from-[#00418848] before:via-[#0161ff] after:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/KeybotoDev.svg"
          alt="KeybotoDev Logo"
          width={460}
          height={460}
          priority
        />
      </section>

      <section className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/github"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {dict.main_button.github.name1}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {dict.main_button.github.message} {dict.main_button.github.name2}.
          </p>
        </a>

        <a
          href="/linkedin"
          className="group rounded-lg border border-transparent px-5 py-4 transition-color hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {dict.main_button.linkedin.name1}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {dict.main_button.linkedin.message} {dict.main_button.linkedin.name2}.
          </p>
        </a>

        <a
          onClick={openResume}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <i>{dict.main_button.resume.name1}{' '}</i>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {dict.main_button.resume.message} <i>{dict.main_button.resume.name2}</i>.
          </p>
        </a>

        <a
          href="/gitlab"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {dict.main_button.gitlab.name1}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {dict.main_button.gitlab.message} {dict.main_button.gitlab.name2}.
          </p>
        </a>

      </section>
    </main>
  )
}
