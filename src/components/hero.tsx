import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from './button';
import { ReactNode } from 'react';

interface HeroTitleProps {
  children: ReactNode;
}

export const HeroTitle = ({ ...props }: HeroTitleProps) => {
  return (
    <h1 className="text-4xl md:text-7xl font-bold mb-4 font-bold">
      {props.children}
    </h1>
  );
};

interface HeroSubTitleProps {
  children: ReactNode;
}

export const HeroSubTitle = ({ ...props }: HeroSubTitleProps) => {
  return <div>{props.children}</div>;
};

interface HeroProps {
  children: ReactNode;
  ImagePath: string;
  curriculumPath: string;
  bookCallPath: string;
}

const Hero = ({ ...props }: HeroProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between  pt-4 md:pt-20">
      <div className="pt-8 md:w-1/2 md:pt-20">
        {props.children}
        <div className="flex justify-start  items-center pt-8">
          <Button>
            <Link href={props.bookCallPath}>
              <p className="border-none text-xl text-white tracking-tight">
                Book a call
              </p>
            </Link>
          </Button>
          <div className="flex  items-center">
            <a href={props.curriculumPath} download="curriculum.pdf">
              <p className="ml-6 text-xl font-bold text-black tracking-tight mt-4 md:mt-0">
                Download CV
              </p>{' '}
            </a>
            <ChevronRight />
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-0 mb-20 md:w-1/2 flex justify-center">
        <Image src={props.ImagePath} alt="face" height={500} width={500} />
      </div>
    </div>
  );
};

export default Hero;
