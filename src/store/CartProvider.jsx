import CartContext from "./cart-context";

import React from "react";

const CartProvider = ({ children }) => {
    const addItemtoCartHandler = (item) => {};
    const removeItemFromCartHandler = (id) => {};
    const cartContext = {
        items: [],
        totalAount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
