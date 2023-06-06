const item = ({ item, onOrder }) => {
  return (
    <div className="item-container">
      <div className="item">
        <img src={item.image} className="item-image" alt={item.name} />
      </div>
      <div className="item-details">
        <h4>{item.name}</h4>
        <h6>{item.price}</h6>
        <h6 className="order-btn" onClick={() => onOrder(item.id)}>
          Order Now &rarr;
        </h6>
      </div>
    </div>
  );
};

export default item;
