export const SocialLink = ({
  icon,
  description,
  link,
}: {
  icon: React.ReactNode;
  description: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-row bg-bgw-purple border-bgw-neon-blue rounded-2xl border-2 py-2 px-4 gap-2 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
      rel="noreferrer"
    >
      <div>{icon}</div>
      <div>{description}</div>
    </a>
  );
};
