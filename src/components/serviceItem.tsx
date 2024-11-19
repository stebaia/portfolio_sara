import * as Icons from 'lucide-react';
import { ReactNode } from 'react';


export const getIconByName = (name: string): ReactNode => {

  const IconComponent = Icons[name as keyof typeof Icons] as React.ComponentType<{ size?: number }>;

  return IconComponent ? <IconComponent size={60} /> : null;
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

const ServiceItem = ({ title, subtitle, list, icon }: ServiceItemProps) => {
  const DynamicIcon = getIconByName(icon);

  return (
    <div className="w-96 flex gap-4 flex-col md:mt-2 mt-12">
      {DynamicIcon}
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-slate-500 italic">{subtitle}</p>
      <ul className="list-disc pl-4">
        {list.map((item, index) => (
          <li className="p-1 font-bold text-slate-500" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceItems = ({ items }: ServiceItemsProps) => {
  return (
    <div className="flex w-full flex-col md:flex-row justify-between mt-2 md:mt-32 md:mb-20">
      {items.map((item, index) => (
        <ServiceItem
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          list={item.list}
        />
      ))}
    </div>
  );
};

export default ServiceItems;
