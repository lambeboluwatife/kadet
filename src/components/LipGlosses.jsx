import Item from "./Item";
import ProductShowcase from "./ProductShowcase";
import backdrop from "../images/guido-fua-yfrNSdGn-TE-unsplash.jpg";

const LipGlosses = ({ items, onOrder }) => {
  const productInfo = {
    title: "Lip Glosses",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea!",
    backdrop: backdrop,
    color: "#fff",
  };
  return (
    <>
      <ProductShowcase productInfo={productInfo} />
      <div className="necklaces">
        <div className="collections">
          <h2>
            <i>Lip Glosses</i>
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

export default LipGlosses;
