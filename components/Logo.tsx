import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2 cursor-pointer">
    <span className="font-semibold text-xl text-Surface-Hover tracking-tight">
      MythCipher
    </span>
  </Link>
);

export const LogoAlt = () => (
  <Link href="/" className="flex items-center gap-2 cursor-pointer">
    <span className="font-semibold text-xl text-Surface-Hover tracking-tight">
      MythCipher
    </span>
  </Link>
);

export default Logo;
