import Item from "./Item";

const Necklaces = ({ items, onOrder }) => {
  return (
    <div className="necklaces">
      <div className="collections">
        <h2>
          <i>Necklaces</i>
        </h2>
        <div className="item-content grid grid-4">
          {items.map((item) => (
            <Item key={item.id} item={item} onOrder={onOrder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Necklaces;
