import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <ul className="flex gap-2">
      <li>
        <Link
          href="https://www.facebook.com/citeinfo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-3 border-white bg-white"
        >
          <i className="text-primary-dark z-10 text-2xl transition-transform duration-500 group-hover:rotate-y-360 group-hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </i>
          <span className="bg-facebook absolute top-full left-0 z-0 h-full w-full transition-all duration-500 group-hover:top-0"></span>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/cite-technical-institute-inc-7bb018258/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-3 border-white bg-white"
        >
          <i className="text-primary-dark z-10 text-2xl transition-transform duration-500 group-hover:rotate-y-360 group-hover:text-white">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </i>
          <span className="bg-linkedin absolute top-full left-0 z-0 h-full w-full transition-all duration-500 group-hover:top-0"></span>
        </Link>
      </li>
    </ul>
  );
}

export default SocialLinks;
