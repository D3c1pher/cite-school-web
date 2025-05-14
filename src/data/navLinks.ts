export type NavLink = {
  id: number;
  label: string;
  path: string;
};

const navLinks: NavLink[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Programs", path: "/programs" },
  { id: 4, label: "Admissions", path: "/admissions" },
  { id: 5, label: "News & Events", path: "/news" },
  { id: 6, label: "Contact", path: "/contact" },
];

export default navLinks;
