import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { womenProducts } from "@/data/womenProducts";

export const dynamic = "force-static";
export const revalidate = 60 * 60;

export function generateStaticParams() {
  return womenProducts.map((p) => ({ id: p.id }));
}

export default function WomenProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = womenProducts.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="sr-only">{product.name}</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-[#f5efe6]/60">
          <Image
            src={product.image} // /images/women/xxx.png
            alt={product.alt}
            width={1200}
            height={1200}
            sizes="(min-width:1024px) 640px, 90vw"
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <section aria-labelledby="product-title" className="space-y-6">
          <div>
            <h2
              id="product-title"
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0b0b0c]"
            >
              {product.name}
            </h2>
            <p className="mt-2 text-lg text-[#3a3a3a]">
              {product.price.toLocaleString("tr-TR")} tl
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              aria-label="Beden seçin"
              className="w-full max-w-xs rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
              defaultValue=""
            >
              <option value="" disabled>
                Beden seçin
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <button
              type="button"
              className="rounded-md border border-neutral-200 px-3 py-2 text-sm text-[#3a3a3a] hover:bg-neutral-50"
              aria-label="Beden kılavuzu"
            >
              Beden kılavuzu
            </button>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full rounded-md bg-[#0b0b0c] px-4 py-3 text-white hover:opacity-90"
            >
              Sepete Ekle
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-[#0b0b0c] px-4 py-3 text-[#0b0b0c] hover:bg-neutral-50"
            >
              Direkt Satın Al
            </button>
          </div>

          <p className="text-sm leading-6 text-[#3a3a3a]">
            Minimal, fonksiyonel ve premium: PHUΔD ΔT koleksiyonu.
          </p>

          <div>
            <Link
              href="/women"
              className="text-sm underline underline-offset-4 text-[#2d463b]"
              aria-label="Kadın koleksiyonuna geri dön"
            >
              ← Kadın koleksiyonuna dön
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
