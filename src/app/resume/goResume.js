'use client';

import {useEffect} from "react";

export const openResume = () => {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location.href = '/resume';
    return;
  }

  localStorage.setItem('rootPageOpen', 'true');
  window.open('/resume', '_blank', 'noopener', 'noreferrer');
};
