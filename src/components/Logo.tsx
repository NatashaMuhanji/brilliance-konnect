import logo from "src/assets/images/bk-logo.png";

interface LogoProps {
  variant?: "light" | "dark";
}

const Logo = ({ variant = "dark" }: LogoProps) => {
  const logoClassName =
    variant === "light" ? "h-10 w-auto brightness-0 invert" : "h-10 w-auto";

  return (
    <img
      src={logo}
      alt="Brilliance Konnect"
      className={logoClassName}
    />
  );
};

export default Logo;