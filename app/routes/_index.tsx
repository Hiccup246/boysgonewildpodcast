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
import { PodcastAppModal } from "./components/PodcastAppModal";
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
        <div className="flex flex-col items-center w-11/12 md:w-9/12 lg:w-7/12 pt-[250px]">
          {/* pb-[56.25%] h-0 can use to force 16/9 */}
          <div className="relative w-full aspect-video">
            <img
              src={HoratioAnime}
              className="absolute top-[-220px] left-0 h-[300px] z-2"
            />
            <img
              src={AndrewAnime}
              className="absolute top-[-220px] right-0 h-[300px] z-1"
            />

            <iframe
              id="bgw-player"
              src={bgwYtVideoUrl}
              className="absolute top-0 left-0 w-full h-full rounded-2xl z-3"
              allow="fullscreen"
            ></iframe>
          </div>

          <div className="flex flex-row flex-wrap gap-5 pt-5 justify-center sm:justify-start">
            <SocialLink
              icon={<FaYoutube title="Youtube Icon" size="1.5em" />}
              description="Subscribe on Youtube"
              link="https://www.youtube.com/@boyzgonewild"
            />
            <SocialLink
              icon={<FaInstagram title="Instagram Icon" size="1.5em" />}
              description="Follow on Instagram"
              link="https://www.instagram.com/boysgonewildpodcast"
            />
            <SocialLink
              icon={<FaPatreon title="Patreon Icon" size="1.5em" />}
              description="Become a Patron"
              link="https://www.patreon.com/c/boysgonewild"
            />
            <SocialLink
              icon={<FaTiktok title="Tik Tok Icon" size="1.5em" />}
              description="Watch on Tik Tok"
              link="https://www.tiktok.com/@boysgonewiild"
            />
            <SocialLink
              icon={<SlSocialSpotify title="Spotify Icon" size="1.5em" />}
              description="Listen on Spotify"
              link="https://open.spotify.com/show/37F1hM1i53hxNOIjSXmMfc"
            />

            <PodcastAppModal
              trigger={
                <div className="flex flex-row bg-bgw-purple border-bgw-neon-blue rounded-2xl border-2 py-2 px-4 gap-2 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    <LuPodcast title="Podcast App Icon" size="1.5em" />
                  </div>
                  <div>Listen on podcast app</div>
                </div>
              }
            />
          </div>

          <div className="flex flex-col gap-18 py-36">
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
