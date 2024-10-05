import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: 'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-fd1.jpg?v=1716254588',
      title: 'Tan Wedding Cufflinks',
      price: '$140.00',
      oldPrice: '$190.00',
      discount: '-26%',
    },
    {
      id: 2,
      image: 'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-fd2_533x.jpg?v=1716254485',
      title: 'Personalised Custom Gift',
      price: '$70.00',
      oldPrice: '$120.00',
      discount: '-42%',
    },
    {
      id: 3,
      image: 'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-fd3.jpg?v=1716254467',
      title: 'Best Dad Photo Night Light',
      price: '$70.00',
      oldPrice: '$120.00',
      discount: '-42%',
    },
    {
      id: 4,
      image: 'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-fd4_533x.jpg?v=1716253521',
      title: 'Father’s Day Keepsake Gift',
      price: '$150.00',
      oldPrice: '',
      discount: '',
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.title} className="product-image" />
            {product.discount && <span className="discount-badge">{product.discount}</span>}
          </div>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">
            <span className="current-price">{product.price}</span>
            {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
