import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const HostProfile = ({
  image,
  description,
  instagramLink,
  twitterLink,
}: {
  image: string;
  description: string;
  instagramLink?: string;
  twitterLink?: string;
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

        <div className="flex flex-row">
          {instagramLink && (
            <a href={instagramLink}>
              <FaInstagram />
            </a>
          )}
          {twitterLink && (
            <a href={twitterLink}>
              <FaXTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
