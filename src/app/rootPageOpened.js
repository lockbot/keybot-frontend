'use client';

import {useEffect} from "react";

export function OpenRoot() {
  useEffect(() => {
    window.onbeforeunload = () => {
      if (localStorage.getItem('rootPageOpen')) {
        localStorage.removeItem('rootPageOpen');
      }
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);
}