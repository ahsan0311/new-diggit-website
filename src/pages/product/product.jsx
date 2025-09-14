import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Hero from '../../components/about/Hero';
import Hydrila from './hydrila';
import Laundary from './laundary';
import PointOfSale from './pointOfSale';

const Product = () => {
 

  return (
    <div>
      <Hero/>
      <Hydrila/>
      <Laundary/>
      <PointOfSale/>
    </div>
  );
};



export default Product