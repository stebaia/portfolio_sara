import { ReactNode } from "react";

interface ServicesProps {
  children: ReactNode;
}

interface ServicesHeaderProps {
  children: ReactNode;
}

export const ServicesHeader = ({ ...props }: ServicesHeaderProps) => {
  return (
    <div
      id="Services"
      className="md:pt-20 text-center flex md:justify-between flex-col md:flex-col md:mt-6 "
    >
      {props.children}
    </div>
  );
};

const Services = ({ ...props }: ServicesProps) => {
  return <>{props.children}</>;
};

export default Services;
