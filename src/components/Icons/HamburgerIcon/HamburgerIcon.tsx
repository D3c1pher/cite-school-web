type HamburgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerIcon = ({ isOpen, onClick }: HamburgerIconProps) => {
  return (
    // <div className="relative z-50">
    <button
      onClick={onClick}
      className="flex h-8 w-10 cursor-pointer flex-col items-center justify-center space-y-1 text-white"
    >
      {/* Top bar */}
      <span
        className={`block h-1 w-8 bg-white transition-all duration-300 ease-out ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      ></span>
      {/* Middle bar */}
      <span
        className={`block h-1 w-8 bg-white transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      {/* Bottom bar */}
      <span
        className={`block h-1 w-8 bg-white transition-all duration-300 ease-out ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      ></span>
    </button>
    // </div>
  );
};

export default HamburgerIcon;
