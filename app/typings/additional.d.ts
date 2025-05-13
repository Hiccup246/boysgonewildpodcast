/// <reference types="youtube" />

interface Window {
  onYouTubeIframeAPIReady: function;
}

interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
  closedby?: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "james-watt-calling-card": any;
  }
}
