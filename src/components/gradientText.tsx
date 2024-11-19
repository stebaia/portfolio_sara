import { ReactNode } from "react";


interface GradientTextProps {
  children: ReactNode;
}
const GradientText = ({ ...props }: GradientTextProps) => {
  return (
    <>
      <span
        className={`text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500`}
      >
        {props.children}
      </span>
    </>
  );
};

export default GradientText;
