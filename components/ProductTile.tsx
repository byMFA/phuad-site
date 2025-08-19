import Image from "next/image";

type Props = {
  title: string;
  price: number;
  image: string;
  alt: string;
};

export default function ProductTile({ title, price, image, alt }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full rounded-3xl overflow-hidden bg-[#f0eee8]">
        <div className="relative aspect-[3/4]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width:768px) 90vw, (max-width:1024px) 35vw, 20vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-3 text-center">
        <div className="font-semibold text-[#0b0b0c]">{title}</div>
        <div className="text-sm text-[#0b0b0c]/70">{price.toLocaleString("tr-TR")} tl</div>
      </div>
    </div>
  );
}
