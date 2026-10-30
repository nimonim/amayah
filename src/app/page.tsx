
"use client";

import { useMemo, useState } from "react";
import { products, categories } from "../data/products";

const collections = [
  {
    number: "01",
    name: "The Wardrobe",
    description: "Pieces that make getting dressed feel different.",
    category: "Dresses",
    art: "art-01",
  },
  {
    number: "02",
    name: "Objects of Desire",
    description: "Little things that make everyday life beautiful.",
    category: "Art & Decor",
    art: "art-02",
  },
  {
    number: "03",
    name: "The Finishing Touch",
    description: "Jewelry, bags, and details worth keeping.",
    category: "Jewelry",
    art: "art-03",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [bag, setBag] = useState<{ id: number; quantity: number }[]>([]);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const chosenProduct = products.find(
    (product) => product.id === selectedProduct
  );

  const bagCount = bag.reduce((total, item) => total + item.quantity, 0);

  function addToBag(id: number) {
    setBag((currentBag) => {
      const existing = currentBag.find((item) => item.id === id);

      if (existing) {
        return currentBag.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentBag, { id, quantity: 1 }];
    });
  }

  return (
    <main>
      <div className="announcement">
        A considered collection of things we love.
      </div>

      <header className="site-header">
        <a className="wordmark" href="#">
          AMAYAH<span>.</span>
        </a>

        <nav className="navigation">
          <a href="#collections">Collections</a>
          <a href="#featured">The Edit</a>
          <a href="#about">Our Story</a>
        </nav>

        <a className="bag-link" href="#featured">
          Bag <span>({bagCount})</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A PERSONAL COLLECTION · EST. 2026</p>
          <h1>
            Things worth
            <br />
            <em>keeping.</em>
          </h1>
          <p className="hero-description">
            A little of everything. A lot of her.
            <br />
            Discover fashion, objects, and little things
            <br />
            that make life feel more like you.
          </p>
          <a className="primary-button" href="#featured">
            EXPLORE THE COLLECTION <span>↗</span>
          </a>
          <p className="hero-note">
            CHOSEN WITH INTENTION. LOVED FOR A REASON.
          </p>
        </div>

        <div className="hero-art">
          <div className="hero-art-inner">
            <span className="art-number">AM — 001</span>
            <div className="art-circle">
              <span>the art</span>
              <span>of</span>
              <span>everyday</span>
            </div>
            <span className="art-caption">OBJECTS · TEXTURES · STORIES</span>
          </div>
          <span className="hero-side-note">A WORLD OF HER OWN</span>
        </div>
        <span className="hero-index">01 / 04</span>
      </section>

      <div className="ticker">
        <span>GOOD THINGS, GATHERED</span>
        <span>✳</span>
        <span>LESS, BUT BETTER</span>
        <span>✳</span>
        <span>CHOSEN WITH LOVE</span>
        <span>✳</span>
        <span>GOOD THINGS, GATHERED</span>
      </div>

      <section className="collections section" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A WORLD OF HER OWN</p>
            <h2>
              A few of our
              <br />
              <em>favorite things.</em>
            </h2>
          </div>
          <p className="section-intro">
            Not just things to own, but things to live with.
            Explore the little worlds that make up Amayah.
          </p>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <a
              className="collection-card"
              href="#featured"
              key={collection.number}
              onClick={() => setActiveCategory(collection.category)}
            >
              <div className={`collection-art ${collection.art}`}>
                <span className="collection-number">{collection.number}</span>
                <span className="collection-art-label">AMAYAH COLLECTION</span>
              </div>
              <div className="collection-info">
                <div>
                  <p className="collection-category">{collection.category}</p>
                  <h3>{collection.name}</h3>
                  <p className="collection-description">
                    {collection.description}
                  </p>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="featured section" id="featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURRENTLY LOVING</p>
            <h2>
              The things
              <br />
              <em>on our mind.</em>
            </h2>
          </div>
          <p className="section-intro">
            A personal edit of pieces worth discovering, keeping, and loving.
          </p>
        </div>

        <div className="catalogue-tools">
          <div className="category-filters" aria-label="Filter products">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "filter active" : "filter"}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <input
            aria-label="Search products"
            className="product-search"
            placeholder="Search the collection..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <p className="results-count">
          {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"} to discover
        </p>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <button
                  className="product-open"
                  type="button"
                  onClick={() => setSelectedProduct(product.id)}
                  aria-label={`View ${product.name}`}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.badge && (
                      <span className="product-label">{product.badge}</span>
                    )}
                    <span className="quick-view">DISCOVER ↗</span>
                  </div>
                  <div className="product-details">
                    <div>
                      <p className="product-category">{product.category}</p>
                      <h3>{product.name}</h3>
                    </div>
                    <p className="product-price">
                      {product.price.toLocaleString("en-US")} ETB
                    </p>
                  </div>
                </button>
                <button
                  className="add-to-bag"
                  type="button"
                  onClick={() => addToBag(product.id)}
                >
                  + ADD TO BAG
                </button>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-results">
            Nothing in this little corner just yet. Try another search.
          </p>
        )}
      </section>

      <section className="about section" id="about">
        <p className="eyebrow">A NOTE FROM THE CURATOR</p>
        <h2>
          Good taste is personal.
          <br />
          <em>So is everything here.</em>
        </h2>
        <p className="about-copy">
          Amayah is a collection of things discovered, admired, and brought
          together. From the pieces we wear to the objects we keep close,
          everything has a place here for a reason.
        </p>
        <span className="signature">With love, Amayah.</span>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#">
          AMAYAH<span>.</span>
        </a>
        <p>A LITTLE OF EVERYTHING. A LOT OF HER.</p>
        <p>© 2026 AMAYAH. MADE WITH INTENTION.</p>
      </footer>

      {chosenProduct && (
        <div
          className="product-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedProduct(null)}
        >
          <section
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label={chosenProduct.name}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ×
            </button>
            <img src={chosenProduct.image} alt={chosenProduct.name} />
            <div className="modal-copy">
              <p className="eyebrow">{chosenProduct.category}</p>
              <h2>{chosenProduct.name}</h2>
              <p className="modal-price">
                {chosenProduct.price.toLocaleString("en-US")} ETB
              </p>
              <p>{chosenProduct.description}</p>
              <button
                className="primary-button modal-add"
                type="button"
                onClick={() => addToBag(chosenProduct.id)}
              >
                ADD TO BAG ↗
              </button>
              <p className="modal-note">
                A curated find from the Amayah collection.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
