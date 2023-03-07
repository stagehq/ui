export interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return <img className="h-full w-full overflow-hidden object-cover" src={src} alt={alt} />;
};
