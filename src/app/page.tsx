import Link from 'next/link';
import { projects } from '@/projects/projects';
import Hero, { HeroTitle, HeroSubTitle } from '@/components/hero';
import { accordionData } from '@/faq/faqs';
import About, { AboutHeader } from '@/components/about';
import GradientText from '@/components/gradientText';
import Paragraph from '@/components/paragraph';
import AccordionFooter from '@/components/accordionFooter';
import HalfRow from '@/components/halfRow';
import ImageCarousel from '@/components/imageCarousel';
import XPTable from '@/components/experienceTable';
import BigQuote from '@/components/bigQuote';
import Services, { ServicesHeader } from '@/components/services';
import { experiences } from '@/experiences/experiences';
import ServiceItems from '@/components/serviceItem';
import { services } from '@/services/services';
import Center from '@/components/center';
import {
  Projects,
  ProjectsCarousel,
  ProjectsHeader,
} from '@/components/projects';
import Button from '@/components/button';
const Images = [
  { path: '/pc.webp', alt: 'pc' },
  { path: '/meeting.webp', alt: 'meeting' },
  { path: '/smartphone.webp', alt: 'smartphone' },
];

export default function Home() {
  return (
    <>
      <Center>
        <Hero
          ImagePath="/face.webp"
          curriculumPath="/cvs.pdf"
          bookCallPath={'/contacts'}
        >
          <HeroTitle>
            <GradientText>Building experiences</GradientText>
            <br /> that connect people
            <br /> and simplify life.
          </HeroTitle>
          <HeroSubTitle>
            <Paragraph>
              Hi! I’m X, an app developer with 5 years of experience.
              <br />I build iOS and Android apps using Flutter, Kotlin, and Java
            </Paragraph>
          </HeroSubTitle>
        </Hero>

        <Services>
          <ServicesHeader>
            <p className="text-3xl md:text-4xl mt-6 font-bold">
              <GradientText>SERVICES</GradientText>
            </p>
            <p className="font-bold text-4xl md:text-6xl mt-4">
              Design that solves problems, <br /> one product at a time.
            </p>
          </ServicesHeader>
          <ServiceItems items={services} />
        </Services>

        <Projects>
          <ProjectsHeader>
            <p className="text-3xl md:text-4xl mt-6 font-bold">
              <GradientText>Projects</GradientText>
            </p>
            <div className="flex md:flex-row flex-col justify-between">
              <div>
                <p className="font-bold text-4xl md:text-6xl mt-4">
                  I bring results. <br />
                  My clients are proof.
                </p>
              </div>
              <div>
                <Link href="/projects">
                  <Button>
                    <p className="border-none text-xl text-white tracking-tight">
                      View All Projects
                    </p>{' '}
                  </Button>
                </Link>
              </div>
            </div>
          </ProjectsHeader>
          <ProjectsCarousel items={projects} />
        </Projects>

        <About>
          <AboutHeader>
            <HalfRow>
              <p className="font-bold text-3xl md:text-4xl ">
                <GradientText>D E V E L O P E R</GradientText>
              </p>
              <p className="font-bold text-4xl md:text-6xl mb-6">That&aposs me!</p>
            </HalfRow>
            <HalfRow>
              <Paragraph>
                I&aposm an app developer with 5 years of experience in mobile
                technologies, specializing in iOS and Android apps. Proficient
                in Flutter, Kotlin, and Java, I build efficient, modern apps
                using the latest tools. I also have project management
                experience, collaborating with cross-functional teams to ensure
                timely delivery.
              </Paragraph>
            </HalfRow>
          </AboutHeader>
          <ImageCarousel images={Images} />

          <BigQuote
            phrase="The best way to predict the future is to invent it."
            author="Alan Kay"
          />
          <p className="font-bold text-3xl md:text-4xl">
            <GradientText>E X P E R I E N C E</GradientText>
          </p>

          <XPTable experiences={experiences} />
        </About>
      </Center>
      <AccordionFooter items={accordionData} />
    </>
  );
}
