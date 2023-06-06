const Order = ({ itemToOrder, onClose }) => {
  return (
    <div className="order">
      <h3>Order Form</h3>
      <h6 onClick={onClose}>Close</h6>
      <div className="order-form">
        <form action="/order" name="order" method="POST">
          <input type="hidden" name="form-name" value="order" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="form-group">
            <div className="input-group-prepend input-group-lg">
              <span className="input-group-text bg-danger text-white"></span>
              <input
                type="text"
                name="name"
                className="form-control bg-dark text-white"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-prepend input-group-lg">
              <span className="input-group-text bg-danger text-white"></span>
              <input
                type="email"
                name="email"
                className="form-control bg-dark text-white"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-prepend input-group-lg">
              <span className="input-group-text bg-danger text-white"></span>
              <input
                type="tel"
                name="phone"
                className="form-control bg-dark text-white"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-prepend input-group-lg">
              <span className="input-group-text bg-danger text-white"></span>
              <input
                type="text"
                name="item"
                className="form-control bg-dark text-white"
                value={itemToOrder.name}
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-prepend input-group-lg">
              <span className="input-group-text bg-danger text-white"></span>
              <input
                type="texts"
                name="price"
                className="form-control bg-dark text-white"
                value={itemToOrder.price}
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-prepend input-group-lg">
              <span className="input-group-text bg-danger text-white"></span>
              <input
                type="number"
                name="quantity"
                className="form-control bg-dark text-white"
                placeholder="Quantity"
                required
              />
            </div>
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Order;
