export type NavLink = {
  id: number;
  label: string;
  path: string;
};

const navLinks: NavLink[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Programs", path: "/programs" },
  { id: 3, label: "Admissions", path: "/admissions" },
  { id: 4, label: "News & Events", path: "/news" },
  { id: 5, label: "Contact", path: "/contact" },
];

export default navLinks;
