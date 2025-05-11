export const SocialLink = ({
  icon,
  description,
}: {
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <div className="flex flex-row bg-bgw-purple border-bgw-neon-blue rounded-2xl border-2 py-2 px-4 gap-2">
      <div>{icon}</div>
      <div>{description}</div>
    </div>
  );
};
