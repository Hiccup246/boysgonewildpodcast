import { useEffect } from "react";

export const BgwFooter = () => {
  useEffect(() => {
    import("james-watt-calling-card");
  }, []);

  return (
    <footer className="flex flex-col items-center gap-9 bg-bgw-purple p-5 font-shrikhand">
      <div>
        A fan site by a{" "}
        <james-watt-calling-card
          modal-bg-color="var(--color-bgw-pink)"
          modal-border-color="var(--color-bgw-neon-blue)"
        >
          loyal Patron
        </james-watt-calling-card>{" "}
        ❤️
      </div>
    </footer>
  );
};
