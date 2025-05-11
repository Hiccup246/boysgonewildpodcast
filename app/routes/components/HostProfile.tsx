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
    <div className="flex flex-row gap-5 w-full flex-wrap sm:flex-nowrap text-center sm:text-left justify-center sm:justify-start">
      <div className="min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] border-2 border-bgw-neon-blue rounded-full overflow-hidden">
        <img
          width="150"
          height="150"
          src={image}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="flex flex-col gap-2 justify-center text-2xl">
        <div>{description}</div>

        <div className="flex flex-row gap-3 justify-center sm:justify-start">
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
