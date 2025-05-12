import AndrewProfilePic from "../../images/andrew-profile-pic.webp";
import CharlieProfilePic from "../../images/charlie-profile-pic.webp";
import HoratioProfilePic from "../../images/horatio-profile-pic.webp";
import { HostProfile } from "./HostProfile";

export const BgwPodcastDescription = () => {
  return (
    <div className="flex flex-col gap-18 py-36 text-center sm:text-start">
      <p className="text-xl">
        <i>Boys Gone Wild</i> is a comedy podcast based in the United Kindom and
        filmed in east London. The podcast features <u>Horatio Gould</u> and{" "}
        <u>Andrew Kirwan</u> as the hosts along with an odd man called Charlie
        who produces the podcast. The podcast features cutting edge takes on
        current events, life, poo, masterbation and commentary on local foxes.
      </p>

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
  );
};
