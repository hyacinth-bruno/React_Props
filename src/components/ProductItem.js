// import React from "react";

// export default function ProductItem({ product }) {
//   return (
//     <div class="product">
//      <div>Name: {product.title}</div>  <br />
//      <div>Price: {product.price}</div>  <br />
//      <div><img src={product.image} width="60px"/></div> 
//     </div>
//   );
// }

import React from "react";

function ProductItem({product}) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title}/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductItem;
