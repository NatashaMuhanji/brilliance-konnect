import logo from "../assets/images/bk-logo.png";

interface LogoProps {
  variant?: "light" | "dark";
}

const Logo = ({ variant = "dark" }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Brilliance Konnect"
      className="h-10 w-auto"
    />
  );
};

export default Logo;