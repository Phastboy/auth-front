import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className="w-24 h-24 rounded-full mx-auto mb-4"
    />
  );
};

export default Avatar;
