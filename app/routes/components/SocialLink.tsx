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
      className="flex flex-row bg-bgw-purple border-bgw-neon-blue rounded-2xl border-2 py-2 px-4 gap-2"
      rel="noreferrer"
    >
      <div>{icon}</div>
      <div>{description}</div>
    </a>
  );
};
