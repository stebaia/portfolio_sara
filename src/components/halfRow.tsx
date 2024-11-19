interface SectionProps {
  children: ReactNode;
}
const HalfRow = ({ ...props }: SectionProps) => {
  return <div className="md:w-1/2">{props.children}</div>;
};

export default HalfRow;
