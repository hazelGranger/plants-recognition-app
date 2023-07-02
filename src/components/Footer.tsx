import Link from "./Link";

const Footer = () => {
  return (
    <footer>
      <Link to="/" text="Home" />
      <Link to="/terms-and-conditions" text="Terms of Use" />
      <Link to="/privacy" text="Privacy Policy" />
    </footer>
  );
};

export default Footer;
