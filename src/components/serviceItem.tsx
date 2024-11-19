import { IconType } from 'react-icons';
import * as Icons from 'lucide-react';

export const getIconByName = (name: string): IconType | null => {
  const IconComponent = (Icons as any)[name];
  return IconComponent || null;
};

interface ServiceItemProps {
  title: string;
  subtitle: string;
  list: string[];
  icon: string;
}

interface ServiceItemsProps {
  items: ServiceItemProps[];
}

const ServiceItem = ({ ...props }: ServiceItemProps) => {
  const DynamicIcon = getIconByName(props.icon);

  return (
    <div className="w-96 flex gap-4 flex-col md:mt-2 mt-12">
      {DynamicIcon && <DynamicIcon size={60} className="md:mb-8 " />}
      <p className="text-2xl font-bold">{props.title} </p>
      <p className="  text-slate-500 italic">{props.subtitle} </p>
      <ul className="list-disc pl-4">
        {props.list.map((item, index) => {
          return (
            <li className="p-1 font-bold text-slate-500" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ServiceItems = ({ ...props }: ServiceItemsProps) => {
  return (
    <div className="flex w-full flex-col md:flex-row justify-between mt-2 md:mt-32 md:mb-20">
      {props.items.map((item, index) => {
        return (
          <ServiceItem
            icon={item.icon}
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            list={item.list}
          />
        );
      })}
    </div>
  );
};
export default ServiceItems;
