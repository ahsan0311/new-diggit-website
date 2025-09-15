import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Hero from '../../components/about/Hero';
import Contact from '../../components/Contact';

const Hydrila = () => {
  const products = [
    {
      name: "Nike Pegasus 41 shoes",
      category: "Sports",
      price: 189,
      offerPrice: 159,
      rating: 4,
      images: [
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
      ],
      description: [
        "High-quality material",
        "Comfortable for everyday use",
        "Available in different sizes",
      ],
    },
  ];

  return (
    <div >
       <Hero/>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      <Contact/>
    </div>
  );
};



export default Hydrila