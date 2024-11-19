import Image from 'next/image';
import GradientText from './gradientText';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ProjectsItemProps {
  imagePath: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  path: string;
}

export const ProjectItem = ({ ...props }: ProjectsItemProps) => {
  return (
    <div className="  w-full flex-col md:flex-row flex p-4 mx-auto max-w-5xl  mt-8">
      <div className=" border-none rounded-none md:w-1/2 overflow-hidden h-96 flex items-center">
        <Image
          className="object-cover transform transition-transform duration-300 hover:scale-110 "
          src={props.imagePath}
          height={200}
          width={600}
          alt={props.imageAlt}
        />
      </div>
      <div className="md:w-1/2 flex bg-transparent items-center absolute relative left-0 top-0 top-auto transform transition-all duration-300 md:translate-x-[-100px] ">
        <div className="bg-opacity-90 bg-black p-5 flex flex-col rounded justify-center w-full">
          <p className="md:text-4xl text-xl font-bold">
            <GradientText> {props.title} </GradientText>
          </p>
          <p className="text-3xl  font-bold text-white">{props.subtitle}</p>
          <Link href={props.path} className="flex flex-row items-center">
            <p className=" text-base text-white mt-6"> View Project </p>
            <ChevronRight color="white" className="mt-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

interface ProjectItemsProps {
  items: ProjectsItemProps[];
}

const ProjectItems = ({ ...props }: ProjectItemsProps) => {
  return (
    <>
      {props.items.map((item, index) => {
        return (
          <ProjectItem
            key={index}
            imagePath={item.imagePath}
            imageAlt={item.imageAlt}
            title={item.title}
            subtitle={item.subtitle}
            path={item.path}
          />
        );
      })}
    </>
  );
};

interface ProjectsHeaderProps {
  children: ReactNode;
}

export const ProjectsHeader = ({ ...props }: ProjectsHeaderProps) => {
  return (
    <div
      id="Services"
      className="md:pt-20  mt-4 gap-4 flex md:justify-between flex-col md:flex-col md:mt-6 "
    >
      {props.children}
    </div>
  );
};

export const Projects = ({ children }: ReactNode) => {
  return <div>{children}</div>;
};

export const ProjectsCarousel = ({ ...props }: ProjectItemsProps) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full md:mt-16 border-none"
    >
      <CarouselContent>
        {props.items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/3 ">
            <Link
              href={item.path}
              className="cursor-pointer flex flex-row items-center"
            >
              <div className="p-1 self-center">
                <Card className="border-none">
                  <CardHeader>
                    <CardTitle>{item.title} </CardTitle>
                    <CardDescription> {item.subtitle} </CardDescription>
                  </CardHeader>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      className="object-cover transform transition-transform duration-300 hover:scale-110 "
                      src={item.imagePath}
                      height={200}
                      width={600}
                      alt={item.imageAlt}
                    />
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectItems;
