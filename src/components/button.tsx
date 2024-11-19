import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="m-6 rounded-md bg-black shadow-2xl p-4 pr-8 pl-8 transition-transform duration-300 transform hover:scale-110"
    >
      {children}
    </button>
  );
};

export default Button;
