import React, { useState } from "react";

const Market2 = () => {
  const product = [
    { desc: "milk", price: 4 },
    { desc: "bamba", price: 2 },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const buy = (prod) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.desc === prod.desc
    );

    if (existingProductIndex >= 0) {
      const newCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...prod, amount: 1 }]);
    }

    setTotal(total + prod.price);
  };

  const deleteProduct = (prod) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.desc === prod.desc
    );

    if (existingProductIndex >= 0) {
      const newCart = cart
        .map((item, index) =>
          index === existingProductIndex
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter((item) => item.amount > 0);

      setCart(newCart);
      setTotal(total - prod.price);
    }
  };

  return (
    <div>
      <h1>Products ({product.length})</h1>
      <hr />
      {product.map((prod) => (
        <div key={prod.desc}>
          {prod.desc} {prod.price}
          <button onClick={() => buy(prod)}>Buy</button>
        </div>
      ))}
      <hr />
      <h1>Cart: ({cart.length})</h1>
      {cart.map((pro) => (
        <div key={pro.desc}>
          {pro.desc} {pro.price} x {pro.amount} = {pro.price * pro.amount}
          <button onClick={() => deleteProduct(pro)}>Delete one Item</button>
        </div>
      ))}
      <hr />
      <h1>Total:</h1>
      Total products: ({cart.reduce((acc, item) => acc + item.amount, 0)}) Total
      price: {total}
      <br />
      <hr />
    </div>
  );
};

export default Market2;
