'use client';

export const closeResume = () => {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location.href = `/home`;
    return;
  }

  if (localStorage.getItem('rootPageOpen')) {
    localStorage.removeItem('rootPageOpen');
    if (window.opener) {
      window.opener.focus();
    }
    window.close();
  } else if (window.opener && !window.opener.closed) {
    window.opener.focus();
    window.close();
  } else {
    window.location.href = `/home`;
  }
};
