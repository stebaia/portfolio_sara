import { ReactNode } from "react";

interface CenterProps {
  children : ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return <div className="p-4 mx-auto max-w-7xl">{children}</div>;
};

export default Center;
