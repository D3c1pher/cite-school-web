"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        {/* Logo Image */}
        <Link href="/">
          <img src="/images/cite-logo-text-wht.png" alt="CITE Logo" />
        </Link>

        <div>
          {/* Contact Information */}
          <div>
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
          <div>
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
              <div>
                <a
                  href="https://www.facebook.com/citeinfo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <div>fb placeholder</div>
                </a>
                <a
                  href="https://www.linkedin.com/in/cite-technical-institute-inc-7bb018258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <div>linkedin placeholder</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div>
        <p>
          © {currentYear} CITE Technical Institute, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
