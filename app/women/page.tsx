import HeaderSimple from "@/components/HeaderSimple";
import FooterSimple from "@/components/FooterSimple";
import ProductTile from "@/components/ProductTile";
import { womenProducts } from "@/data/womenProducts";

export const dynamic = "force-static";

export default function WomenListingPage() {
  // Üstte küçük bileklik, altta 3 çanta yerleşimi
  const bracelet = womenProducts.find((p) => p.id === "bracelet")!;
  const crossbody = womenProducts.find((p) => p.id === "crossbody")!;
  const classic = womenProducts.find((p) => p.id === "classic")!;
  const laptop = womenProducts.find((p) => p.id === "laptop")!;

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#0b0b0c]">
      <HeaderSimple />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl font-medium my-6 sm:my-10">
          Koleksiyon ΔT
        </h1>

        {/* Üst: Bileklik merkezi küçük kart */}
        <section className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-start-2 lg:col-span-1">
            <div className="max-w-xs mx-auto">
              {/* Bileklik kırpılmasın diye hero/contain varyantını tercih ediyoruz.
                 ProductTile'da variant desteğin yoksa olduğu gibi bırak — görselin
                 boşluklu PNG olması zaten kırpılma yaratmaz. */}
              <ProductTile
                title={bracelet.name}
                price={bracelet.price}
                image={bracelet.image}
                alt={bracelet.alt}
                // @ts-expect-error — mevcut bileşen variant'ı yoksa yoksayılır
                variant="hero"
              />
            </div>
          </div>
        </section>

        {/* Alt: 3 kutu yerleşimi (solda crossbody, ortada classic, sağda laptop) */}
        <section
          className="mt-10 grid grid-cols-1 gap-10 lg:gap-14
          lg:grid-cols-[minmax(260px,1fr)_minmax(320px,1.1fr)_minmax(260px,1fr)]
          pb-16"
        >
          <div className="lg:self-start">
            <ProductTile
              title={crossbody.name}
              price={crossbody.price}
              image={crossbody.image}
              alt={crossbody.alt}
            />
          </div>

          <div className="lg:self-center">
            {/* Orta biraz daha vurucu */}
            <div className="max-w-lg mx-auto">
              <ProductTile
                title={classic.name}
                price={classic.price}
                image={classic.image}
                alt={classic.alt}
                // @ts-expect-error — mevcut bileşen variant'ı yoksa yoksayılır
                variant="hero"
              />
            </div>
          </div>

          <div className="lg:self-start">
            <ProductTile
              title={laptop.name}
              price={laptop.price}
              image={laptop.image}
              alt={laptop.alt}
            />
          </div>
        </section>
      </main>

      <FooterSimple />
    </div>
  );
}
