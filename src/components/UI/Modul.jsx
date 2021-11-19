import React from "react";
import classes from "./Modul.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onHideCart }) => {
    return <div className={classes.backdrop} onClick={onHideCart} />;
};

const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");
const Modul = ({ children, onHideCart }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onHideCart={onHideCart} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay children={children} />,
                portalElement
            )}
        </>
    );
};

export default Modul;
