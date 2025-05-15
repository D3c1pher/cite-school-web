import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const FacebookIcon = () => {
  return (
    <Link
      href="https://www.facebook.com/citeinfo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-3 border-white bg-white"
    >
      <div className="text-primary-dark z-10 text-2xl transition-transform duration-500 group-hover:rotate-y-360 group-hover:text-white">
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <span className="bg-facebook absolute top-full left-0 z-0 h-full w-full transition-all duration-500 group-hover:top-0"></span>
    </Link>
  );
};

export default FacebookIcon;
