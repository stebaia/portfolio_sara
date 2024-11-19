interface BigQuoteProps {
  phrase: string;
  author: string;
}

const BigQuote = ({ ...props }: BigQuoteProps) => {
  return (
    <div className="flex flex-col md:mt-12  md:mb-14">
      <h1 className="md:text-4xl text-4xl font-bold mt-16 mb-6 font-bold">
        {props.phrase}
      </h1>
      <h1 className="md:text-3xl text-3xl text-slate-500 mb-20 font-bold italic">
        {props.author}{' '}
      </h1>
    </div>
  );
};
export default BigQuote;
