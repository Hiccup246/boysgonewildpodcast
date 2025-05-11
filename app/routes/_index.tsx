import type { MetaFunction } from "@remix-run/node";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPatreon } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { LuPodcast } from "react-icons/lu";
import { SlSocialSpotify } from "react-icons/sl";

import AndrewAnime from "../images/andrew-anime.png";
import AndrewProfilePic from "../images/andrew-profile-pic.png";
import CharlieProfilePic from "../images/charlie-profile-pic.jpeg";
import HoratioAnime from "../images/horatio-anime.png";
import HoratioProfilePic from "../images/horatio-profile-pic.jpg";
import { BgwFooter } from "./components/BgwFooter";
import { BgwHeader } from "./components/BgwHeader";
import { HostProfile } from "./components/HostProfile";
import { SocialLink } from "./components/SocialLink";
import { useYoutubeVideo } from "./hooks/useYoutubeVideo";

const BGW_YT_VIDEO_ID = "k5ko_aVG6dM";

export const meta: MetaFunction = () => {
  return [
    { title: "Boys Gone Wild Podcast" },
    { name: "description", content: "Boys gone wild podcast fan site" },
    {
      name: "keywords",
      content:
        "Boys gone wild podcast, horatio gould, andrew kirwan, uk comedy podcast",
    },
    { name: "robots", content: "noindex, follow" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.boysgonewildpodcast.com",
    },

    // Twitter
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:site",
      content: "@horatiothegould",
    },
    {
      property: "twitter:creator",
      content: "@jameswattnz",
    },
    {
      property: "twitter:title",
      content: "Boys Gone Wild Podcast",
    },
    {
      property: "twitter:description",
      content: "Boys gone wild podcast fan site",
    },
    {
      property: "twitter:image",
      content: "",
    },
    {
      property: "twitter:image:alt",
      content: "Screen shot of boysgonewildpodcast.com",
    },

    // Open Graph
    {
      property: "og:title",
      content: "Boys Gone Wild Podcast",
    },
    {
      property: "og:description",
      content: "Boys gone wild podcast fan site",
    },
    {
      property: "og:site_name",
      content: "Boys gone wild podcast fan site",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:image",
      content: "",
    },
    {
      property: "og:image:width",
      content: "",
    },
    {
      property: "og:image:height",
      content: "",
    },
    {
      property: "og:image:alt",
      content: "Screen shot of boysgonewildpodcast.com",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function Index() {
  const _player = useYoutubeVideo(BGW_YT_VIDEO_ID, "bgw-player");

  const bgwYtVideoUrl = `https://www.youtube.com/embed/${BGW_YT_VIDEO_ID}?enablejsapi=1`;

  return (
    <>
      <BgwHeader />

      <main className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-16 w-7/12 pt-[250px]">
          {/* pb-[56.25%] h-0 can use to force 16/9 */}
          <div className="relative w-full aspect-video">
            <img
              src={HoratioAnime}
              className="absolute top-[-220px] left-0 h-[300px]"
            />
            <img
              src={AndrewAnime}
              className="absolute top-[-220px] right-0 h-[300px]"
            />

            <iframe
              id="bgw-player"
              src={bgwYtVideoUrl}
              className="absolute top-0 left-0 w-full h-full"
              allow="fullscreen"
            ></iframe>
          </div>

          <div className="flex flex-row flex-wrap gap-5g">
            <SocialLink
              icon={<FaYoutube title="Youtube Icon" />}
              description="Subscribe on Youtube"
            />
            <SocialLink
              icon={<FaInstagram title="Instagram Icon" />}
              description="Follow on Instagram"
            />
            <SocialLink
              icon={<FaPatreon title="Patreon Icon" />}
              description="Become a Patron"
            />
            <SocialLink
              icon={<FaTiktok title="Tik Tok Icon" />}
              description="Watch on Tik Tok"
            />
            <SocialLink
              icon={<SlSocialSpotify title="Spotify Icon" />}
              description="Listen on Spotify"
            />
            <SocialLink
              icon={<LuPodcast title="Podcast App Icon" />}
              description="Listen on your podcast app"
            />
          </div>

          <div className="flex flex-col gap-10">
            <HostProfile
              image={HoratioProfilePic}
              description="Horatio Gould is an amateur standup comedian and men's mental health advocate  attempting to become the millennial Ricky Gervais"
              instagramLink="https://www.instagram.com/horatiogouldcomedy"
              twitterLink="https://x.com/horatiothegould"
              linkedInLink="https://www.linkedin.com/in/horatio-gould-100b13174"
            />
            <HostProfile
              image={AndrewProfilePic}
              description="Andrew Kirwan is a failing financial crime Investigator and a comedy hobbyist with a passion for men's only saunas"
              instagramLink="https://www.instagram.com/andrewkirwancomedy"
              twitterLink="https://x.com/drew_kirwan?s=21"
              linkedInLink="https://www.linkedin.com/in/andrew-kirwan-348b14195"
            />
            <HostProfile
              image={CharlieProfilePic}
              description="Charlie is a producer, recovering porn addict and men's mental health leader focusing on incel recovery"
            />
          </div>
        </div>
      </main>

      <BgwFooter />
    </>
  );
}
