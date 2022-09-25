import React, { useState } from "react";

export const Products = () => {
  const [products] = useState([
    {
      img: "/images/1.jpg",
      name: "Guipure panel blouse",
      sale: true,
      price: 35.0,
      salePrice: 31.0,
    },
    {
      img: "/images/2.jpg",
      name: "Buckle wrap skirt",
      sale: true,
      price: 15.0,
      salePrice: 12.0,
    },
    {
      img: "/images/3.jpg",
      name: "Pocket linen shirt",
      sale: false,
      price: 25.0,
    },
    {
      img: "/images/4.jpg",
      name: "Leather shopper bag",
      sale: false,
      price: 34.0,
    },

    {
      img: "/images/5.jpg",
      name: "Pocket linen shirt",
      sale: false,
      price: 25.0,
    },
    {
      img: "/images/6.jpg",
      name: "Leather shopper bag",
      sale: false,
      price: 34.0,
    },
    {
      img: "/images/7.jpg",
      name: "Guipure panel blouse",
      sale: true,
      price: 35.0,
      salePrice: 31.0,
    },
    {
      img: "/images/8.jpg",
      name: "Buckle wrap skirt",
      sale: true,
      price: 15.0,
      salePrice: 12.0,
    },
  ]);
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-wrapper">
          {products.map((product, i) => (
            <div key={i} className="product">
              <div className="img-container">
                <img src={product.img} alt="" />
                {product.sale && <span className="sale">Sale</span>}
                <div className="details">
                  <span className="icon">
                    <i className="far fa-heart"></i>
                  </span>
                  <span className="read">Read More</span>
                  <span className="icon">
                    <i className="fas fa-shop"></i>
                  </span>
                </div>
              </div>
              <div className="content">
                <h3>{product.name}</h3>
                <span className={`price ${product.sale ? "line" : ""}`}>
                  ${product.price}
                </span>
                {product.sale && (
                  <span className="sale-price">${product.salePrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
