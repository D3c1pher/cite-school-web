import { FacebookIcon, LinkedInIcon } from "@/components";

function SocialLinks() {
  return (
    <ul className="flex gap-2">
      <li>
        <FacebookIcon />
      </li>
      <li>
        <LinkedInIcon />
      </li>
    </ul>
  );
}

export default SocialLinks;
