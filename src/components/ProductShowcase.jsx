const ProductShowcase = ({ productInfo }) => {
  return (
    <div
      className="product-showcase"
      style={{ backgroundImage: `url(${productInfo.backdrop})` }}
    >
      <div className="product-info" style={{ color: `${productInfo.color}` }}>
        <h1>{productInfo.title}</h1>
        <h5>{productInfo.description}</h5>
      </div>
    </div>
  );
};

export default ProductShowcase;
