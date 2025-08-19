import HeaderSimple from "@/components/HeaderSimple";
import FooterSimple from "@/components/FooterSimple";
import ProductTile from "@/components/ProductTile";
import { womenProducts } from "@/data/womenProducts";

export const dynamic = "force-static";

export default function WomenListingPage() {
  // Vitrin ürünleri – womenProducts içindeki id’lerinizle eşleşmeli
  const bracelet = womenProducts.find((p) => p.id === "bracelet");      // bileklik
  const crossbody = womenProducts.find((p) => p.id === "crossbody");    // uzun askılı
  const classic = womenProducts.find((p) => p.id === "classic");        // klasik
  const laptop = womenProducts.find((p) => p.id === "laptop");          // bilgisayar çantası

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#0b0b0c]">
      <HeaderSimple />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl font-medium my-6 sm:my-10">
          Koleksiyon ΔT
        </h1>

        {/* Üstte bileklik */}
        {bracelet && (
          <section className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-start-2">
              <div className="max-w-xs mx-auto">
                <ProductTile
                  title={bracelet.name}
                  price={bracelet.price}
                  image={bracelet.image}
                  alt={bracelet.alt}
                  href={`/women/${bracelet.id}`}
                  variant="hero"
                />
              </div>
            </div>
          </section>
        )}

        {/* Altta 3 çanta */}
        <section
          className="mt-10 grid grid-cols-1 gap-10 lg:gap-14
                     lg:grid-cols-[minmax(260px,1fr)_minmax(320px,1.1fr)_minmax(260px,1fr)]
                     pb-16"
        >
          {crossbody && (
            <ProductTile
              title={crossbody.name}
              price={crossbody.price}
              image={crossbody.image}
              alt={crossbody.alt}
              href={`/women/${crossbody.id}`}
            />
          )}

          <div className="max-w-2xl mx-auto">
            {classic && (
              <ProductTile
                title={classic.name}
                price={classic.price}
                image={classic.image}
                alt={classic.alt}
                href={`/women/${classic.id}`}
                variant="hero"
              />
            )}
          </div>

          {laptop && (
            <ProductTile
              title={laptop.name}
              price={laptop.price}
              image={laptop.image}
              alt={laptop.alt}
              href={`/women/${laptop.id}`}
            />
          )}
        </section>
      </main>

      <FooterSimple />
    </div>
  );
}
