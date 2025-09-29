import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Hydrila from './hydrila';
import Laundary from './laundary';
import PointOfSale from './pointOfSale';
import Contact from '../../components/Contact';
import Hero from '../../components/develpoemnt/Hero';

const Product = () => {
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
    <div >
      <Hero
       mainHeading={<>Empower Your Water Delivery Business with Hydrila</>}
       bgImage='https://th.bing.com/th/id/OIP.LDTzCHvG7333owtduUQ0CwHaDS?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
       showSmallHeading={false}
       buttonText="Sign Up"
       description={<>Hydrila is a comprehensive software solution designed to streamline your <br /> mineral water delivery operations. Manage finances, sales, workers, and <br /> more with ease.</>}
       />
       <div >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    <Contact/>
    </div>
  );
};



export default Product