import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../Cart/Scart";
const useStyles = makeStyles((theme) => ({
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
        opacity: 0,
        y: "30%",
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
            type: "spring",
        },
    },
};

function Modal(props) {
    const classes = useStyles();
    return (
        <AnimatePresence exitBeforeEnter>
            {props.show ? (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                        zIndex: 99,
                    }}
                >
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
                        <Cart />
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
    );
}

export default Modal;
