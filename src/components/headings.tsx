import { ReactNode } from 'react';

interface HeadingProps {
  italic?: boolean;
  bold?: boolean;
  size?: string;
  children: ReactNode;
  color: string;
}

const Heading = ({
  italic,
  bold,
  size = 'base',
  children,
  color = 'black',
}: HeadingProps) => {
  let className = `text-${color} `;

  if (italic) {
    className += 'italic ';
  }

  if (bold) {
    className += 'font-bold ';
  }

  className += `text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Heading;
