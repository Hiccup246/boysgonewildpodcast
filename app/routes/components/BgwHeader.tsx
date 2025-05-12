import BoysGoneWildLogo from "../../images/bgw-header.webp";

export const BgwHeader = () => {
  return (
    <header className="flex flex-col items-center gap-9 pt-5 p-2">
      <h1 className="md:w-10/12 lg:w-7/12">
        <img
          src={BoysGoneWildLogo}
          alt="boys gone wild logo"
          className="rounded-md sm:rounded-2xl glow-animate"
        />
      </h1>
    </header>
  );
};
