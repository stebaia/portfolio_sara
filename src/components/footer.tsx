import AccordionFooter, {
  AccordionFooterProps,
} from '@/components/accordionFooter';
import { ContactCarousel } from '@/components/contactItem';
interface icon {
  icon: string;
  path: string;
}

interface FooterProps {
  icons?: icon[];
  copyright?: string;
}

const Footer = ({ ...props }: FooterProps) => {
  return (
    <div className="bg-black flex flex-col items-center ">
      <ContactCarousel icons={props.icons} />
      <p className="text-slate-300 m-8"> &copy; {props.copyright} </p>
    </div>
  );
};

export default Footer;
