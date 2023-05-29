'use client';

import {useEffect, useState} from "react";

export function OpenRoot() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    if (!isMobile) {
      window.onbeforeunload = () => {
        if (localStorage.getItem('rootPageOpen')) {
          localStorage.removeItem('rootPageOpen');
        }
      };

      return () => {
        window.onbeforeunload = null;
      };
    }
  }, [isMobile]);
}