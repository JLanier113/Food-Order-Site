import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // onCloseCart is sending data from App > Backdrop (inModal.js) > Modal >
  //Modal (inCart.js)

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />} // using the &&
      //renders this if true and doesnt //render if false
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
