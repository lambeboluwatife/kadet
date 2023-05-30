import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./components/Collections";
import Header from "./components/Header";
import Necklaces from "./components/Necklaces";
import Showcase from "./components/Showcase";
import data from "../src/data/items";
import Order from "./components/Order";

const App = () => {
  const [items] = useState(data);
  const [order, setOrder] = useState(false);
  const [itemToOrder, setItemToOrder] = useState();
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const selectOrder = (id) => {
    setOrder(!order);
    setItemToOrder(items.find((item) => item.id === id));
  };

  const closeOrder = () => {
    setOrder(!order);
  };
  return (
    <Router>
      <Header dropdown={dropdown} toggleDropdown={toggleDropdown} />
      {order && <Order itemToOrder={itemToOrder} onClose={closeOrder} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Showcase />
              <Collections />
            </>
          }
        />
        <Route
          path="/necklaces"
          element={<Necklaces onOrder={selectOrder} items={items} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
