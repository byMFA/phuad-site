import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
};

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Görsel */}
      <div className="relative rounded-3xl overflow-hidden bg-[#f0eee8] shadow-sm ring-1 ring-black/5">
        <div className="relative aspect-[4/3]">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Bilgi */}
      <div className="flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {product.name}
        </h2>
        <p className="mt-2 text-lg text-[#0b0b0c]">
          {product.price.toLocaleString("tr-TR")} tl
        </p>

        {/* Beden / Aksiyonlar (şimdilik dummy) */}
        <div className="mt-6 flex gap-2">
          <select
            aria-label="Beden seçin"
            className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-3"
            defaultValue=""
          >
            <option value="" disabled>
              Beden seçin
            </option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <button
            type="button"
            className="rounded-md border border-zinc-300 px-4"
            aria-label="Beden kılavuzu"
          >
            Beden kılavuzu
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <button
            type="button"
            className="w-full bg-black text-white py-4 rounded-md"
          >
            Sepete Ekle
          </button>
          <button
            type="button"
            className="w-full border border-black py-4 rounded-md"
          >
            Direkt Satın Al
          </button>
        </div>

        <div className="mt-8 text-sm leading-6 text-[#0b0b0c]/80">
          <p>
            Minimal tasarım, yüksek kalite. Δ temalı koleksiyon parçası; uzun
            ömürlü kumaş ve özenli işçilikle üretildi. Günlük kullanım ve
            şehirli stil için ideal.
          </p>
        </div>
      </div>
    </section>
  );
}
