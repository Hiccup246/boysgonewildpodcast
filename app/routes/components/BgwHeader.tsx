import BoysGoneWildLogo from "../../images/bgw-header.png";

export const BgwHeader = () => {
  return (
    <header className="flex flex-col items-center gap-9 pt-5 p-2">
      <h1 className="md:w-10/12 lg:w-7/12">
        <img
          src={BoysGoneWildLogo}
          alt="boys gone wild logo"
          className="shadow-bgw-neon-blue shadow-2xl/70 sm:rounded-2xl"
        />
      </h1>
    </header>
  );
};
