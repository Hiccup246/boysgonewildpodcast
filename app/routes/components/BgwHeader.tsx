import BoysGoneWildLogo from "../../images/bgw-header.png";

export const BgwHeader = () => {
  return (
    <header className="flex flex-col items-center gap-9 p-5">
      <h1 className="w-7/12">
        <img
          src={BoysGoneWildLogo}
          className="shadow-bgw-neon-blue shadow-2xl/70 rounded-2xl"
        />
      </h1>
    </header>
  );
};
