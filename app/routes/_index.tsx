import type { MetaFunction } from "@remix-run/node";

import { BgwFooter } from "./components/BgwFooter";
import { BgwHeader } from "./components/BgwHeader";
import { BgwPodcastDescription } from "./components/BgwPodcastDescription";
import { BgwSocialLinks } from "./components/BgwSocialLinks";
import { BgwYoutubePreview } from "./components/BgwYoutubePreview";

export const meta: MetaFunction = () => {
  return [
    { title: "Boys Gone Wild Podcast" },
    { name: "description", content: "Boys gone wild podcast fan site" },
    {
      name: "keywords",
      content:
        "Boys gone wild podcast, horatio gould, andrew kirwan, uk comedy podcast",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.boysgonewildpodcast.com",
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@horatiothegould",
    },
    {
      name: "twitter:creator",
      content: "@jameswattnz",
    },
    {
      name: "twitter:title",
      content: "Boys Gone Wild Podcast",
    },
    {
      name: "twitter:description",
      content: "Boys gone wild podcast fan site",
    },
    {
      name: "twitter:image",
      content: "https://www.boysgonewildpodcast.com/site-screenshot.webp",
    },
    {
      name: "twitter:image:alt",
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
      content: "https://www.boysgonewildpodcast.com/site-screenshot.webp",
    },
    {
      property: "og:image:width",
      content: "3024",
    },
    {
      property: "og:image:height",
      content: "1642",
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

const BGW_YT_VIDEO_ID = "k5ko_aVG6dM";

export default function Index() {
  return (
    <>
      <BgwHeader />

      <main className="flex items-center justify-center">
        <div className="flex flex-col items-center w-11/12 md:w-9/12 lg:w-7/12 pt-[250px]">
          <BgwYoutubePreview bgwYtVideoId={BGW_YT_VIDEO_ID} />

          <BgwSocialLinks />

          <BgwPodcastDescription />
        </div>
      </main>

      <BgwFooter />
    </>
  );
}
