import React, { useRef } from "react";
import { FaRss } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { SiApplepodcasts } from "react-icons/si";
import { SiPodcastaddict } from "react-icons/si";
import { SiPocketcasts } from "react-icons/si";
// import { SiOvercast } from "react-icons/si";
import { SiPlayerfm } from "react-icons/si";
import { SiCastbox } from "react-icons/si";

import { PodcastAppLink } from "./PodcastAppLink";

export const PodcastAppModal = ({ trigger }: { trigger: React.ReactNode }) => {
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef && dialogRef.current && dialogRef.current.showModal();
    document && document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    dialogRef && dialogRef.current && dialogRef.current.close();
    document && document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <button onClick={openModal} className="cursor-pointer">
        {trigger}
      </button>

      <dialog
        ref={dialogRef}
        className="border-2 rounded-lg border-bgw-neon-blue p-5 my-auto mx-auto bg-bgw-purple"
        closedby="any"
      >
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 cursor-pointer"
        >
          <RxCross2 size="1.5em" />
        </button>

        <div>
          <h1 className="text-xl pb-3">Add to podcast app</h1>
          <p className="pb-5">
            Follow and listen to the boys gone wild podcast on your favourite
            podcast apps
          </p>

          <div className="border-2 rounded-lg border-bgw-neon-blue p-3 flex flex-col gap-4">
            <PodcastAppLink
              icon={<SiApplepodcasts title="Apple Podcasts" size="2em" />}
              name="Apple Podcasts"
              link="https://podcasts.apple.com/gb/podcast/boys-gone-wild/id1530467231"
            />
            <PodcastAppLink
              icon={<SiPodcastaddict title="Podcast Addict" size="2em" />}
              name="Podcast Addict"
              link="https://podcastaddict.com/podcast/boys-gone-wild/5724329"
            />
            <PodcastAppLink
              icon={<SiPocketcasts title="Pocket Cast" size="2em" />}
              name="Pocket Cast"
              link="https://play.pocketcasts.com/discover/podcast/4dc70940-e2ad-0138-e7ca-0acc26574db2"
            />
            {/* <PodcastAppLink icon={<SiOvercast title="Overcast" size="2em" />} name="Overcast" link="" /> */}
            <PodcastAppLink
              icon={<SiPlayerfm title="Player FM" size="2em" />}
              name="Player FM"
              link="https://player.fm/series/boys-gone-wild"
            />
            <PodcastAppLink
              icon={<SiCastbox title="Castbox" size="2em" />}
              name="Castbox"
              link="https://castbox.fm/channel/Boys-Gone-Wild-id6492248"
            />
            <PodcastAppLink
              icon={<FaRss title="RSS Feed Link" size="2em" />}
              name="RSS Feed"
              link="https://anchor.fm/s/101cea4bc/podcast/rss"
            />
          </div>
        </div>
      </dialog>
    </>
  );
};
