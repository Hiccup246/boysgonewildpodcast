import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPatreon } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { LuPodcast } from "react-icons/lu";
import { SlSocialSpotify } from "react-icons/sl";

import { PodcastAppModal } from "./PodcastAppModal";
import { SocialLink } from "./SocialLink";

export const BgwSocialLinks = () => {
  return (
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
  );
};
