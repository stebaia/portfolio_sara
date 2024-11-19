import { ReactNode } from "react";


interface ParagraphProps {
  children: ReactNode;
}
const Paragraph = ({ ...props }: ParagraphProps) => {
  return (
    <p className="text-xl text-slate-500 tracking-tight">{props.children}</p>
  );
};

export default Paragraph;
