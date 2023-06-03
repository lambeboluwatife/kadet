import Item from "./Item";
import ProductShowcase from "./ProductShowcase";
import backdrop from "../images/allie-pollock-mf4mmrX9BIg-unsplash.jpg";

const Chains = ({ items, onOrder }) => {
  const productInfo = {
    title: "Chains",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea!",
    backdrop: backdrop,
    color: "#000",
  };

  return (
    <>
      <ProductShowcase productInfo={productInfo} />
      <div className="necklaces">
        <div className="collections">
          <h2>
            <i>Chains</i>
          </h2>
          <div className="item-content grid grid-4">
            {items.map((item) => (
              <Item key={item.id} item={item} onOrder={onOrder} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chains;
