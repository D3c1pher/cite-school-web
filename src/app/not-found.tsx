import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "Could not find requested resource",
};

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
