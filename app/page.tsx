import HeaderSimple from "@/components/HeaderSimple";
import FooterSimple from "@/components/FooterSimple";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#0b0b0c]">
      <HeaderSimple />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-medium my-6 sm:my-10">
             ...
        </h2>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-12 sm:pb-16">
          {categories.map((c) => (
            <CategoryCard
              key={c.id}
              title={c.title}
              image={c.image}
              alt={c.alt}
              href={c.href}
            />
          ))}
        </section>
      </main>

      <FooterSimple />
    </div>
  );
}
