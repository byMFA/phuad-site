import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  alt: string;
  href?: string;
};

export default function CategoryCard({ title, image, alt, href }: Props) {
  const Card = (
    <article className="space-y-2 cursor-pointer">
      <h3 className="text-[#0b0b0c] text-lg font-medium">{title}</h3>

      <div className="relative rounded-3xl overflow-hidden bg-[#edece8]">
        <div className="relative aspect-[16/9]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </article>
  );

  return href ? (
    <Link href={href} aria-label={`${title} kategorisine git`}>{Card}</Link>
  ) : (
    Card
  );
}
