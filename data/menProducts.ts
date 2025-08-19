export type MenProduct = {
  id: string;
  name: string;
  price: number; // TL
  image: string;
  alt: string;
};


export const menProducts: MenProduct[] = [
  {
    id: "deltaT-bej",
    name: "model ΔT (bej)",
    price: 8400,
    image: "/images/men/deltatt-bej.png",
    alt: "PHUΔD ΔT bej tişört",
  },
  {
    id: "deltaT-gri",
    name: "model ΔT (gri)",
    price: 11400,
    image: "/images/men/deltatt-gri.png",
    alt: "PHUΔD ΔT gri tişört",
  },
  {
    id: "deltaT-beyaz",
    name: "model ΔT (beyaz)",
    price: 11400,
    image: "/images/men/deltatt-beyaz.png",
    alt: "PHUΔD ΔT beyaz tişört",
  },
];
