"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/data";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="from-primary to-primary-light w-full bg-gradient-to-r text-white">
      <div className="container mx-auto flex flex-wrap justify-around md:flex-row-reverse">
        {/* Logo Image */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/cite-logo-text-wht.png"
            alt="CITE Logo"
            className="pointer-events-none h-24 w-auto select-none md:h-28 lg:h-32"
          />
        </Link>

        <div className="flex flex-wrap justify-around">
          {/* Contact Information */}
          <div className="max-w-sm">
            <h2>Contact Information</h2>
            <div>
              <p>CITE Technical Institute, Inc.</p>
              <p>San Jose, Cebu City, Philippines</p>
              <p>P.O. Box 1255, Cebu City Central Post Office</p>
            </div>
            <div>
              <p>
                Tel. Number:{" "}
                <Link href="tel:+63323240671">+63 32 326-0671</Link>
              </p>
              <p>
                Email:{" "}
                <Link href="mailhref:info@cite.edu.ph">info@cite.edu.ph</Link>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="max-w-sm">
            {/* Navigation Links */}
            <div>
              <h2>Navigation Links</h2>
              <nav>
                {navLinks
                  .filter((item) => item.id !== 1)
                  .map((item, index, array) => (
                    <React.Fragment key={item.id}>
                      <Link href={item.path}>{item.label}</Link>
                      {index < array.length - 1 && <span>|</span>}
                    </React.Fragment>
                  ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h2>Follow Us</h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-dark text-center">
        <p>
          © {currentYear} CITE Technical Institute, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
