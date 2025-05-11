/// <reference types="youtube" />

interface Window {
  onYouTubeIframeAPIReady: function;
}

// declare module "react" {
interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
  closedby?: string;
}
// }
