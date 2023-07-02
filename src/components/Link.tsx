import { Link as ReactRouterLink } from "react-router-dom";

type LinkProps = {
  text: string;
  to: string;
  target?: string;
};

const Link = ({ text, to, target }: LinkProps) => {
  return (
    <ReactRouterLink to={to} target={target}>
      {text}
    </ReactRouterLink>
  );
};

export default Link;
