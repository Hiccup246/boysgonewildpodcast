import type { MetaFunction } from "@remix-run/node";

import BgwFooter from "./components/BgwFooter";
import BgwHeader from "./components/BgwHeader";

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
  return (
    <>
      <BgwHeader />

      <main className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16 p-5"></div>
      </main>

      <BgwFooter />
    </>
  );
}
