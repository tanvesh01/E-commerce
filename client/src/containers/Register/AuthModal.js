import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import Register from "../Register/Register";
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
    authModel: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "1.5rem",
        width: "60%",
        height: "60%",
        position: "relative",
        zIndex: "101",
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        zIndex: 99,
    },
    "@media only screen and (max-width: 600px)": {
        authModel: {
            width: "90%",
            height: "65%",
        },
    },
    "@media only screen and (max-width: 411px)": {
        authModel: {
            width: "90%",
            height: "83%",
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
            duration: 0.1,
        },
    },
};

const authVariant = {
    hidden: {
        opacity: 1,
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
            type: "spring",
        },
    },
    exit: {
        opacity: 1,
        y: "100%",
        transition: {
            duration: 0.2,
        },
    },
};

function AuthModal(props) {
    const classes = useStyles();
    return (
        <AnimatePresence exitBeforeEnter>
            {props.show ? (
                <div className={classes.modal}>
                    <motion.div
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={props.authModalHandler}
                        className={classes.backdrop}
                    />
                    <motion.div
                        variants={authVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={classes.authModel}
                    >
                        <div style={{ width: "80%" }}>
                            <Register />
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
    );
}

export default AuthModal;
