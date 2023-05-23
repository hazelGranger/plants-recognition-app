import { ReactNode } from "react";
import logo from "../logo.svg";

type titleProps = {
  children: ReactNode;
};

const Title = ({ children }: titleProps) => {
  return (
    <h2 className="title">
      <img src={logo} className="logo" alt="logo" />
      {children}
    </h2>
  );
};

export default Title;
