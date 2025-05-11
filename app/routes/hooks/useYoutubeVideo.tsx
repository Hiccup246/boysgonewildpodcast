import { useEffect, useState } from "react";

export const useYoutubeVideo = (
  videoId: string,
  elementId: string,
): { player: YT.Player | null; loaded: boolean } => {
  const [player, setPlayer] = useState<null | YT.Player>(null);
  const [loaded, setLoaded] = useState(false);

  const playerHasLoaded = (_event: YT.PlayerEvent) => {
    setLoaded(true);
  };

  useEffect(() => {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function () {
      setPlayer(
        new YT.Player(elementId, {
          videoId: videoId,
          playerVars: {
            playsinline: 1,
          },
          events: {
            onReady: playerHasLoaded,
          },
        }),
      );
    };
  }, []);

  return { player, loaded };
};
