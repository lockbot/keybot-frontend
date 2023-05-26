import Image from "next/image";
import {RenderPDFAndButtonBasedOnDevice} from "@/app/resume/deviceRendererResume";

export const metadata = {
  title: 'KeybotoDev RESUME',
  description: 'Resumé',
}

function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
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
      <RenderPDFAndButtonBasedOnDevice />
    </main>
  );
}

export default Resume;