import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccItem {
  answer: string;
  question: string;
}

export interface AccordionFooterProps {
  items: AccItem[];
}

const CustomAccordion = ({ ...props }: AccordionFooterProps) => {
  return (
    <Accordion type="single" collapsible>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg mx-auto">
        {props.items.map((item, index) => (
          <AccordionItem
            key={index}
            value={index + 1}
            className="border-b border-slate-700 w-full"
          >
            <AccordionTrigger className="text-white text-xl whitespace-normal w-full p-4">
              {item.question}
            </AccordionTrigger>

            <AccordionContent className="text-white text-lg w-96 p-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </Accordion>
  );
};

const AccordionFooter = ({ ...props }: AccordionFooterProps) => {
  return (
    <div className="bg-black flex flex-col items-center ">
      <h6 className="text-4xl p-12 pb-6 self-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 ">
          FAQ
        </span>
      </h6>
      <h1 className="text-6xl text-white font-bold mb-12 font-bold">
        Frequently asked questions
      </h1>
      <div className="p-2 mx-auto  ">
        <CustomAccordion items={props.items} />
      </div>
    </div>
  );
};
export default AccordionFooter;
