'use client';

import {useEffect} from "react";

export const openResume = () => {
  localStorage.setItem('rootPageOpen', 'true');
  window.open('/resume', '_blank', 'noopener', 'noreferrer');
};
