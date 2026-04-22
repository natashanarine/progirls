import Link from "next/link";

const navLinks = ["about", "members", "join"] as const;

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-7">
      <span
        className="text-[#f0ece3] text-lg tracking-tight select-none"
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        progirls
      </span>

      <div
        className="flex items-center gap-8"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link}
            href={`#${link}`}
            className="text-sm tracking-widest uppercase text-[#f0ece3]/60 hover:text-[#f0ece3] transition-colors duration-200"
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
