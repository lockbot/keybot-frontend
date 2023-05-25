import Image from "next/image";
import {closeResume} from "@/app/resume/backResume";

export const metadata = {
  title: 'KeybotoDev RESUME',
  description: 'Resumé',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
            You&apos;re&nbsp;on{' '}
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
      </div>

      <iframe
        src='/resume/RESUME_LucasBorges.pdf'
        width={1050}
        height={1370}
      />

      <div className="mt-8 mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href='/resume/RESUME_LucasBorges.pdf'
          download='RESUME_LucasBorges'
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
                    <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
                        &darr;
                    </span>
            {' '}Download
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Download my Resumé
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
            {' '}HomePage
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Back to HomePage
          </p>
        </a>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return {
    props: {
      isMobileView: Boolean(isMobile)
    }
  }
}