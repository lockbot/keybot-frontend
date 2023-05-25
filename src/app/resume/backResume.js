'use client';

export const closeResume = () => {
  if (this.props.isMobileView) {
    window.location.href = '/home';
  } else {
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
      window.location.href = '/home';
    }
  }
};