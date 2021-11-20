import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmaount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
});

export default CartContext;
