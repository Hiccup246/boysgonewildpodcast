/// <reference types="youtube" />
import "react";

interface Window {
  onYouTubeIframeAPIReady: function;
}

declare module "react" {
  interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
    closedby?: string;
  }
}
