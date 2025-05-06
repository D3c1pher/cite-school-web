import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

// THIS IS A SAMPLE TEST CODE USED IN HEADER
// WILL NEED TO UPDATE THI LATER ON

jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return <a href={href}>{children}</a>;
  };

  return MockLink;
});

jest.mock("next/image", () => {
  const MockImage = ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => {
    return <img src={src} alt={alt} width={width} height={height} />;
  };

  return MockImage;
});

describe("Test Header Component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  // it("renders the logo with correct attributes", () => {
  //   const logo = screen.getByAltText("Logo");
  //   expect(logo).toBeInTheDocument();
  //   expect(logo).toHaveAttribute("src", "/logo.png");
  //   expect(logo).toHaveAttribute("width", "40");
  //   expect(logo).toHaveAttribute("height", "40");
  // });

  it("renders all navigation links with correct href attributes", () => {
    const links = [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Programs", href: "/programs" },
      { text: "News", href: "/news" },
      { text: "Contact", href: "/contact" },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByText(text);
      expect(link).toBeInTheDocument();
      expect(link.closest("a")).toHaveAttribute("href", href);
    });
  });

  it('renders the "Apply Now" CTA with correct href', () => {
    const applyLink = screen.getByText("Apply Now");
    expect(applyLink).toBeInTheDocument();
    expect(applyLink.closest("a")).toHaveAttribute("href", "/apply");
  });

  it("navigation contains exactly 5 links", () => {
    const navItems = document.querySelectorAll("nav li");
    expect(navItems).toHaveLength(5);
  });
});
