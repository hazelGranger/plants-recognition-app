type LinkProps = {
  text: string;
  to: string;
  target?: string;
};

const Link = ({ text, to, target }: LinkProps) => {
  return (
    <a href={to} target={target}>
      {text}
    </a>
  );
};

export default Link;
