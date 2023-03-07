export interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return <img className="w-full h-full object-cover overflow-hidden" src={src} alt={alt} />;
};
