import { FaChevronRight } from "react-icons/fa";

export const PodcastAppLink = ({
  icon,
  name,
  link,
}: {
  icon: React.ReactNode;
  name: string;
  link: string;
}) => {
  return (
    <a
      target="_blank"
      href={link}
      className="flex flex-row justify-between items-center"
      rel="noreferrer"
    >
      <div className="flex flex-row gap-4 items-center">
        {icon}

        <div>{name}</div>
      </div>

      <FaChevronRight size="1em" />
    </a>
  );
};
