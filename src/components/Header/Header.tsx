"use client";

import Link from "next/link";
// import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      {/* Logo */}
      {/* <Link href="/">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </Link> */}

      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Horizontal Line */}
      <div className="my-4 border-t border-gray-300"> </div>

      {/* Call to Action */}
      <Link href="/apply">Apply Now</Link>
    </header>
  );
};

export default Header;
