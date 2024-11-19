import Image from 'next/image';

interface Image {
  path: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div className="flex flex-row flex-wrap mt-20 gap-4">
      {images.map((item, index) => (
        <Image
          key={index}
          alt={item.alt}
          height={100}
          width={400}
          src={item.path}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
