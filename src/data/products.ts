
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  badge?: string;
};

export const categories = [
  "All",
  "Dresses",
  "Shoes",
  "Bags",
  "Jewelry",
  "Art & Decor",
  "Kitchen",
  "Books",
];

export const products: Product[] = [
  {
    id: 1,
    name: "The Sunday Dress",
    category: "Dresses",
    price: 4200,
    description: "An effortless silhouette for slow mornings and long afternoons.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=80",
    featured: true,
    badge: "The Edit",
  },
  {
    id: 2,
    name: "The Everyday Ballet Flat",
    category: "Shoes",
    price: 2800,
    description: "A timeless finishing touch for everyday dressing.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "The City Tote",
    category: "Bags",
    price: 3500,
    description: "Room for the essentials, a book, and everything in between.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    featured: true,
  },
  {
    id: 4,
    name: "The Golden Hour Hoops",
    category: "Jewelry",
    price: 1600,
    description: "Sculptural gold-tone hoops that make a quiet statement.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80",
    badge: "A Favorite",
  },
  {
    id: 5,
    name: "The Art Deco Vase",
    category: "Art & Decor",
    price: 3200,
    description: "A sculptural accent for shelves, side tables, and quiet corners.",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=700&q=80",
    featured: true,
  },
  {
    id: 6,
    name: "The Sunday Serving Bowl",
    category: "Kitchen",
    price: 1900,
    description: "A beautiful everyday object made for gathering around the table.",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "A Life in Pages",
    category: "Books",
    price: 1200,
    description: "For bedside tables, slow evenings, and underlined sentences.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    badge: "Worth Reading",
  },
  {
    id: 8,
    name: "The Statement Shoulder Bag",
    category: "Bags",
    price: 3900,
    description: "A polished companion from daytime plans to evening outings.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "The Little Black Dress",
    category: "Dresses",
    price: 4800,
    description: "A wardrobe classic that needs very little to feel complete.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80",
    featured: true,
  },
  {
    id: 10,
    name: "The Sculptural Earrings",
    category: "Jewelry",
    price: 1800,
    description: "An artful detail for the days that call for something extra.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11,
    name: "The Collected Print",
    category: "Art & Decor",
    price: 2500,
    description: "A considered accent for a wall that deserves a little character.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 12,
    name: "The Coffee Table Read",
    category: "Books",
    price: 1500,
    description: "A beautiful book to leave out, return to, and give as a gift.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
  },
];
