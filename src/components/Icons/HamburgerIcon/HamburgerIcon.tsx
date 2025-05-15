type HamburgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerIcon = ({ isOpen, onClick }: HamburgerIconProps) => {
  const HamburgerIconPartsStyle =
    "block h-1 w-8 bg-white transition-all duration-300 ease-out";

  return (
    <button
      onClick={onClick}
      className="flex h-8 w-10 cursor-pointer flex-col items-center justify-center space-y-1 text-white"
    >
      {/* Top bar */}
      <span
        className={`${HamburgerIconPartsStyle} ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      ></span>
      {/* Middle bar */}
      <span
        className={`${HamburgerIconPartsStyle} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      {/* Bottom bar */}
      <span
        className={`${HamburgerIconPartsStyle} ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerIcon;
