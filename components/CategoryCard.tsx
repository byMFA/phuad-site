import Image from "next/image";

type Props = {
  title: string;
  image: string;
  alt: string;
};

export default function CategoryCard({ title, image, alt }: Props) {
  return (
    <article className="space-y-2">
      <h3 className="text-[#0b0b0c] text-lg font-medium">{title}</h3>

      <div className="relative rounded-3xl overflow-hidden bg-[#edece8]">
        {/* 16:9 oran */}
        <div className="relative aspect-[16/9]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}
