import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modul";
const Cart = ({ onHideCart }) => {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
                (item) => (
                    <li key={item.id}>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <Modal onHideCart={onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>36.54</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={onHideCart}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;