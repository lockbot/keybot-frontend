'use client';

import {closeResume} from "/src/app/[lang]/resume/components/backResume";
import {useEffect, useState} from "react";

export function RenderPDFAndButtonBasedOnDevice({dict}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect( () => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, [isMobile]);

  if( isMobile ) {
    return (
      <object
        className="mt-8 rounded-xl border border-neutral-800 shadow-lg ml--10"
        type="text/html"
        data={dict.resume+".html"}
        width={834}
        height={1050}
      />
    );
  } else {
    return (
      <iframe
        className="mt-8 rounded-xl lg:border border-neutral-800 shadow-lg"
        src={dict.resume+".pdf"}
        width={1050}
        height={1324}
      />
    );
  }
}