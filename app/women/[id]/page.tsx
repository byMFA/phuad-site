import HeaderSimple from "@/components/HeaderSimple";
import FooterSimple from "@/components/FooterSimple";
import ProductDetail from "@/components/ProductDetail";
import { womenProducts } from "@/data/womenProducts";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return womenProducts.map((p) => ({ id: p.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const p = womenProducts.find((x) => x.id === params.id);
  return {
    title: p ? `${p.name} — PHUΔD` : "Ürün — PHUΔD",
    description: p?.alt ?? "PHUΔD ürün detayı",
  };
}

export default function WomenProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = womenProducts.find((p) => p.id === params.id);
  if (!product) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] text-[#0b0b0c]">
        <HeaderSimple />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p>Ürün bulunamadı.</p>
          <Link className="underline mt-4 inline-block" href="/women">
            Kadın koleksiyonuna dön
          </Link>
        </main>
        <FooterSimple />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#0b0b0c]">
      <HeaderSimple />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-center text-2xl sm:text-3xl font-medium mb-10">
          Koleksiyon ΔT
        </h1>
        <ProductDetail product={product} />
      </main>
      <FooterSimple />
    </div>
  );
}
