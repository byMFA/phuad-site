import Link from "next/link";

export default function HeaderSimple() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="PHUΔD home"
          className="font-semibold tracking-[0.25em] text-2xl text-[#0b0b0c]"
        >
          PHUΔD
        </Link>

        {/* Sağ menü */}
        <nav aria-label="Account" className="hidden sm:flex gap-8 text-[#8b98a5]">
          <Link href="/" className="hover:opacity-70">Hesabım</Link>
          <Link href="/" className="hover:opacity-70">Sepet</Link>
        </nav>
      </div>
    </header>
  );
}
