import AndrewAnime from "../../images/andrew-anime.webp";
import HoratioAnime from "../../images/horatio-anime.webp";
import { useYoutubeVideo } from "../hooks/useYoutubeVideo";
import { VideoSkeleton } from "./VideoSkeleton";

export const BgwYoutubePreview = ({
  bgwYtVideoId,
}: {
  bgwYtVideoId: string;
}) => {
  const { loaded } = useYoutubeVideo(bgwYtVideoId, "bgw-player");

  const bgwYtVideoUrl = `https://www.youtube.com/embed/${bgwYtVideoId}?enablejsapi=1`;

  return (
    <div className="relative w-full aspect-video">
      <img
        src={HoratioAnime}
        alt="Anime version of Horatio Gould"
        className="absolute top-[-220px] left-0 h-[300px] z-2"
      />
      <img
        src={AndrewAnime}
        alt="Anime version of Andrew Kirwan"
        className="absolute top-[-220px] right-0 h-[300px] z-1"
      />

      <iframe
        id="bgw-player"
        src={bgwYtVideoUrl}
        className="absolute top-0 left-0 w-full h-full rounded-2xl z-3"
        allow="fullscreen"
      ></iframe>

      {!loaded && (
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl z-3 bg-grey">
          <VideoSkeleton />
        </div>
      )}
    </div>
  );
};
