import { useEffect, useState } from "react";

export const useYoutubeVideo = (
  videoId: string,
  elementId: string,
): { player: YT.Player | null } => {
  const [player, setPlayer] = useState<null | YT.Player>(null);

  useEffect(() => {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = function () {
      setPlayer(
        new YT.Player(elementId, {
          videoId: videoId,
          playerVars: {
            playsinline: 1,
          },
        }),
      );
    };
  }, []);

  return { player };
};
