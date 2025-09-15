import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Hero from '../../components/about/Hero';
import Contact from '../../components/Contact';

const PointOfSale = () => {
  const products = [
    {
      name: "Puma Running Shoes",
      category: "Sports",
      price: 150,
      offerPrice: 130,
      rating: 3,
      images: [
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      ],
      description: [
        "Lightweight design",
        "Good arch support",
        "Durable outsole",
      ],
    },
  ];

  return (
    <div>
      <Hero/>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      <Contact/>
    </div>
  );
};



export default PointOfSale