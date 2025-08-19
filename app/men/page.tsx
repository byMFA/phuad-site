import HeaderSimple from "@/components/HeaderSimple";
import FooterSimple from "@/components/FooterSimple";
import ProductTile from "@/components/ProductTile";
import { menProducts } from "@/data/menProducts";
import Image from "next/image";

export const dynamic = "force-static";

export default function MenListingPage() {
  // Dizilim: solda küçük kart, ortada büyük görsel, sağda küçük kart
  const left = menProducts[0];
  const center = menProducts[1];
  const right = menProducts[2];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#0b0b0c]">
      <HeaderSimple />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Sayfa başlığı */}
        <h1 className="text-center text-2xl sm:text-3xl font-medium my-6 sm:my-10">
          Koleksiyon ΔT
        </h1>

        {/* Üst/alt boşlukları geniş, ürün sayısı az ve premium his */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 pb-16">
          {/* Sol küçük kart */}
          <div className="lg:self-start">
            <ProductTile
              title={left.name}
              price={left.price}
              image={left.image}
              alt={left.alt}
            />
          </div>

          {/* Orta büyük hero ürün */}
          <div className="lg:self-center">
            <div className="relative w-full rounded-3xl overflow-hidden bg-[#f0eee8] shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={center.image}
                  alt={center.alt}
                  fill
                  sizes="(max-width:1024px) 90vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="font-semibold">{center.name}</div>
              <div className="text-sm text-[#0b0b0c]/70">
                {center.price.toLocaleString("tr-TR")} tl
              </div>
            </div>
          </div>

          {/* Sağ küçük kart */}
          <div className="lg:self-start">
            <ProductTile
              title={right.name}
              price={right.price}
              image={right.image}
              alt={right.alt}
            />
          </div>
        </section>
      </main>

      <FooterSimple />
    </div>
  );
}
