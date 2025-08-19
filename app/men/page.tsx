import HeaderSimple from "@/components/HeaderSimple";
import FooterSimple from "@/components/FooterSimple";
import ProductTile from "@/components/ProductTile";
import { menProducts } from "@/data/menProducts";

export const dynamic = "force-static";

export default function MenListingPage() {
  const [left, center, right] = menProducts;

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#0b0b0c]">
      <HeaderSimple />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl font-medium my-6 sm:my-10">
          Koleksiyon ΔT
        </h1>

        <section className="grid grid-cols-1 gap-10 lg:gap-14 pb-16 lg:grid-cols-3">
          <ProductTile
            title={left.name}
            price={left.price}
            image={left.image}
            alt={left.alt}
            href={`/men/${left.id}`}
          />
          <ProductTile
            title={center.name}
            price={center.price}
            image={center.image}
            alt={center.alt}
            href={`/men/${center.id}`}
            // ortadaki tam görünsün istiyorsan variant="hero" bırakabilirsin
          />
          <ProductTile
            title={right.name}
            price={right.price}
            image={right.image}
            alt={right.alt}
            href={`/men/${right.id}`}
          />
        </section>
      </main>
      <FooterSimple />
    </div>
  );
}
