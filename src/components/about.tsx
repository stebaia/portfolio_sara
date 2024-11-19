interface AboutProps {
  children: ReactNode;
}

interface AboutHeaderProps {
  children: ReactNode;
}

export const AboutHeader = ({ ...props }: AboutHeaderProps) => {
  return (
    <div
      id="About"
      className="md:pt-20 flex md:justify-between flex-col md:flex-row mt-12 "
    >
      {props.children}
    </div>
  );
};

const About = ({ ...props }: AboutProps) => {
  return <>{props.children}</>;
};

export default About;
