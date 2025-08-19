import Image from "next/image";
import Link from "next/link";

type ProductTileProps = {
  title: string;
  price: number; // TL
  image: string;
  alt: string;
  /** Ürün kutusu tıklanabilir olacaksa ver; verilmezse <div> döner */
  href?: string;
  /** Hero kartı için daha büyük görsel/padding */
  variant?: "default" | "hero";
};

export default function ProductTile({
  title,
  price,
  image,
  alt,
  href,
  variant = "default",
}: ProductTileProps) {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    href ? <Link href={href} aria-label={`${title} ürününü görüntüle`}>{children}</Link> : <div>{children}</div>;

  return (
    <article className="text-center">
      <Wrapper>
        <div
          className={[
            "relative mx-auto overflow-hidden rounded-3xl bg-[#f5efe6]/60",
            variant === "hero" ? "w-[560px] max-w-full" : "w-[360px] max-w-full",
          ].join(" ")}
        >
          <Image
            src={image}
            alt={alt}
            width={variant === "hero" ? 1120 : 720}
            height={variant === "hero" ? 840 : 720}
            sizes={variant === "hero" ? "(min-width:1024px) 560px, 90vw" : "(min-width:1024px) 360px, 90vw"}
            className="h-auto w-full object-contain"
            priority={variant === "hero"}
          />
        </div>
      </Wrapper>

      <h3 className="mt-4 text-base font-semibold text-[#0b0b0c]">{title}</h3>
      <p className="text-sm text-[#3a3a3a]">{price.toLocaleString("tr-TR")} tl</p>
    </article>
  );
}
