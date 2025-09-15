import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Hero from '../../components/about/Hero';
import Contact from '../../components/Contact';

const Laundary = () => {
  const products = [
    {
      name: "Adidas Ultraboost 22",
      category: "Running",
      price: 220,
      offerPrice: 190,
      rating: 5,
      images: [
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
      ],
      description: [
        "Boost cushioning",
        "Responsive comfort",
        "Primeknit upper",
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



export default Laundary