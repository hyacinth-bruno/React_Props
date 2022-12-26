import React from "react";

export default function ProductItem({ product }) {
  return (
    <div class="product">
     <div>Name: {product.title}</div>  <br />
     <div>Price: {product.price}</div>  <br />
     <div><img src={product.image} width="60px"/></div> 
    </div>
  );
}
