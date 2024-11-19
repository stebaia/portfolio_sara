import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  Twitch,
} from 'lucide-react';
import { FaWhatsapp, FaTelegram, FaReddit, FaPinterest } from 'react-icons/fa';

import Paragraph from '@/components/paragraph';

interface icon {
  icon: string;
  path: string;
}

interface ContactsHeaderProps {
  title: string;
  subtitle: string;
  email: string;
}

export const ContactsHeader = ({ ...props }: ContactsHeaderProps) => {
  return (
    <div className="md:mb-12 mb-10">
      <p className="font-bold text-3xl md:text-6xl mb-14">{props.title}</p>
      <Paragraph>{props.subtitle}</Paragraph>
    </div>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  field: string;
  label: string;
}

export const Input = ({ field, label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold p-2">{label} </label>
      <input {...props} placeholder={field} className="bg-slate-100 p-4" />
    </div>
  );
};

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  field: string;
  label: string;
}

export const TextArea = ({ field, label, ...props }: TextAreaProps) => {
  return (
    <div className="flex flex-col ">
      <label className="font-bold p-2">{label} </label>
      <textarea {...props} placeholder={field} className="bg-slate-100 p-4" />
    </div>
  );
};

export const ContactCarousel = ({ icons }: icon[]) => {
  return (
    <div id="contact" className="flex flex-row gap-8 flex-wrap  mt-20">
      {icons.map((elem, index) => {
        switch (elem.icon) {
          case 'phone':
            return (
              <a
                href={'tel:' + elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'facebook':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'instagram':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'twitter':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'github':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'linkedin':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'youtube':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'email':
            return (
              <a
                href={'mailto:' + elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'pinterest':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'reddit':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaReddit className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'twitch':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitch className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'whatsapp':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white cursor-pointer" size={32} />
              </a>
            );
          case 'telegram':
            return (
              <a
                href={elem.path}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="text-white cursor-pointer" size={32} />
              </a>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
