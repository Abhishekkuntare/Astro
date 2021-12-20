import React from "react";
import { Rating } from "@material-ui/lab";
import Fade from 'react-reveal/Fade';

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <a className="productCard" href={`/product/${product._id}`}>
      <Fade bottom cascade duration={2000}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`Rs. ${product.price}.00`}</span>
        </Fade>
  
    </a>
  );
};

export default ProductCard;
