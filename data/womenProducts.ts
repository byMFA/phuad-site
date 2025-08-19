export type WomenProduct = {
  id: string;
  name: string;
  price: number; // TL
  image: string;
  alt: string;
};

export const womenProducts: WomenProduct[] = [
  {
    id: "bracelet",
    name: "model Δt Bileklik",
    price: 3500,
    image: "/images/women/efsane_bileklik.png",
    alt: "PHUAD Δt bileklik",
  },
  {
    id: "crossbody",
    name: "model Δt (uzun askılı) çanta",
    price: 7400,
    image: "/images/women/kücükcanta.png",
    alt: "PHUAD Δt uzun askılı çanta",
  },
  {
    id: "classic",
    name: "model Δt (klasik) çanta",
    price: 12400,
    image: "/images/women/buyukcanta.png",
    alt: "PHUAD Δt klasik çanta",
  },
  {
    id: "laptop",
    name: "model Δt (Bilgisayar) çanta",
    price: 15400,
    image: "/images/women/laptopcanta.png",
    alt: "PHUAD Δt bilgisayar çantası",
  },
] as const;
