import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const HostProfile = ({
  image,
  description,
  instagramLink,
  twitterLink,
  linkedInLink,
}: {
  image: string;
  description: string;
  instagramLink?: string;
  twitterLink?: string;
  linkedInLink?: string;
}) => {
  return (
    <div className="flex flex-row gap-5 w-full">
      <div className="min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] border-2 border-bgw-neon-blue rounded-full overflow-hidden">
        <img
          width="250"
          height="250"
          src={image}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="flex flex-col gap-2 justify-center text-2xl">
        <div>{description}</div>

        <div className="flex flex-row gap-3">
          {instagramLink && (
            <a href={instagramLink}>
              <FaInstagram title="Instagram Icon" size="1.5em" />
            </a>
          )}
          {twitterLink && (
            <a href={twitterLink}>
              <FaXTwitter
                title="X.com Icon (Previously Twitter)"
                size="1.5em"
              />
            </a>
          )}
          {linkedInLink && (
            <a href={linkedInLink}>
              <FaLinkedinIn title="LinkedIn Icon" size="1.5em" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
