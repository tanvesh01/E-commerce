import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import Success from "../OrderForm/Success/Success";
import OrderForm from "../OrderForm/OrderForm";
import Cart from "../Cart/Scart";
const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        zIndex: 99,
    },
    backdrop: {
        zIndex: "100",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        //backdropFilter: "saturate(533%) blur(1px)",
        backgroundColor: "#0000006b",
    },
    cartModel: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        marginLeft: "20%",
        marginRight: "20%",
        width: "60%",
        height: "100%",
        position: "relative",
    },
    "@media only screen and (max-width: 600px)": {
        cartModel: {
            height: (props) => (props.isSubmit ? "110%" : "80%"),
            margin: 0,
            width: "100%",
        },
        root: {
            display: "flex",
            alignItems: "flex-end",
        },
    },
}));

const backdrop = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    hidden: {
        opacity: 0,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const cartVariant = {
    hidden: {
        y: "100%",
        transition: {
            duration: 0.5,
        },
    },
    visible: {
        opacity: 1,
        zIndex: 500,
        y: "0%",
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 1,
        y: "100%",
        transition: {
            duration: 0.5,
        },
    },
};

function Modal(props) {
    const classes = useStyles(props);
    let x = null;
    if (props.submitted) {
        x = <Success />;
    } else if (props.isSubmit) {
        x = <OrderForm />;
    } else {
        x = <Cart />;
    }
    return (
        <AnimatePresence exitBeforeEnter>
            {props.show ? (
                <div className={classes.root}>
                    <motion.div
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={props.modalHandler}
                        className={classes.backdrop}
                    />
                    <motion.div
                        variants={cartVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={classes.cartModel}
                    >
                        {x}
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
    );
}

const mapStateToProps = (state) => {
    return {
        isSubmit: state.orders.isSubmit,
        submitted: state.orders.submitted,
    };
};
export default connect(mapStateToProps, null)(Modal);
