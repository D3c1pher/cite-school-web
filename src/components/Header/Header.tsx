"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "@/data";
import { HamburgerIcon } from "@/components";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <header className="from-primary to-primary-light fixed z-50 w-full bg-gradient-to-r shadow-md">
        <div className="container-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/cite-logo-text-wht.png"
              alt="CITE Logo"
              width={0}
              height={80}
              className="drop-shadow-image pointer-events-none h-14 w-auto object-contain select-none sm:h-16 md:h-18 lg:h-20"
              sizes="(min-width: 1024px) 326px, (min-width: 768px) 200px, (min-width: 640px) 180px, 160px"
              priority
            />
          </Link>

          {/* Hamburger Icon (Mobile) */}
          <div className="mt-2 flex items-center lg:hidden">
            <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="mt-2 hidden items-center space-x-4 text-white lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="hover:from-accent-dark hover:to-accent transition-default bg-gradient-to-r from-white to-white bg-clip-text text-lg font-semibold text-white hover:text-transparent"
              >
                {item.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-8 w-[2px] bg-white opacity-40" />

            {/* Apply Now Button (Desktop) */}
            <Link
              href="/apply"
              className="bg-accent hover:bg-accent-dark transition-default flex items-center gap-2 rounded-full px-6 py-2 font-semibold text-white shadow-md"
            >
              <span className="flex items-center gap-2">Apply Now</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </header>

      {/* Sliding Menu (Mobile) */}
      {hasMounted && (
        <div
          className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 transform"
              : "translate-x-full transform"
          } lg:hidden`}
          onClick={toggleMenu}
        >
          <div
            className="from-primary-dark to-primary absolute top-22 left-0 flex h-full w-full justify-center overflow-auto bg-gradient-to-r p-12 sm:top-24 md:top-26"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links (Mobile) */}
            <div className="flex flex-col space-y-8">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="hover:from-accent-dark hover:to-accent transition-default bg-gradient-to-r from-white to-white bg-clip-text text-center text-2xl font-semibold text-white hover:text-transparent"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
