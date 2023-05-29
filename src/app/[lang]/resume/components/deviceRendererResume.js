'use client';

import {closeResume} from "/src/app/[lang]/resume/components/backResume";
import {useEffect, useState} from "react";

export function RenderPDFAndButtonBasedOnDevice({download, downloadMessage, cv, home, homeMessage}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect( () => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, [isMobile]);

  if( isMobile ) {
    return (
      <>
        <section className="text-center lg:mb-0 lg:text-left blurry-circle relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky after:to-green-900 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:to-blue-900 before:opacity-10 after:from-sky-900 after:via-[#01ff81] before:from-[#00418848] before:via-[#0161ff] after:opacity-40 before:lg:h-[360px]">
          <a
            href='/files/resume/RESUME_LucasBorges.pdf'
            download='RESUME_LucasBorges'
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
                  &darr;
              </span>
              {' '}{download}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {downloadMessage} <i>{cv}</i>.
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
              {' '}{home}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {homeMessage}.
            </p>
          </a>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <iframe
            className="mt-8 lg:rounded-xl lg:border lg:border-neutral-800 lg:shadow-lg"
            src='/files/resume/RESUME_LucasBorges.pdf'
            width={1050}
            height={1370}
          />
        </section>
        <section className="mt-8 mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
          <a
            href='/files/resume/RESUME_LucasBorges.pdf'
            download='RESUME_LucasBorges'
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
                  &darr;
              </span>
              {' '}{download}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {downloadMessage} <i>{cv}</i>.
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
              {' '}{home}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {homeMessage}.
            </p>
          </a>
        </section>
      </>
    );
  }
}