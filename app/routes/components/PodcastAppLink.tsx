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
    <a href={link} className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        {icon}

        <div>{name}</div>
      </div>

      <FaChevronRight size="1em" />
    </a>
  );
};
