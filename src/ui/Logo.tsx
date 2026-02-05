import clsx from "clsx";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-Primary-Hover w-7 aspect-square rounded-full"></div>
      <p>MythCipher</p>
    </div>
  );
};
export const LogoAlt = ({ name = true }: { name?: boolean }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-linear-to-bl from-Surface-Hover to-Surface/50 w-6 aspect-square rounded-full"></div>
      <p
        className={clsx(
          "text-Surface-Hover font-semibold text-lg tracking-tight",
          name ? "block" : "hidden",
        )}
      >
        MythCipher
      </p>
    </div>
  );
};

export default Logo;
