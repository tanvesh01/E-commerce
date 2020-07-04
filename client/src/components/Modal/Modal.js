import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { motion, AnimatePresence } from "framer-motion"
import Grid from '@material-ui/core/Grid';
import Cart from "../Cart/Scart";
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: "100",
        top: 0,
        left: 0,
        position: "fixed",
        width: "100%",
        height: "100%",
        backdropFilter: "saturate(138%) blur(3px)",
        backgroundColor: "rgba(241, 242, 249, 0.25)",
    },
    cartModel: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
}))

const backdrop = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    hidden: {
        opacity: 0
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1
        }
    }
}

function Modal(props) {
    const classes = useStyles();
    console.log(props.show);
    return (
        <AnimatePresence exitBeforeEnter >
            {props.show ?
                <React.Fragment>
                    <motion.div
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={props.modalHandler}
                        className={classes.backdrop} />
                    <div className={classes.cartModel} >

                        <Cart />
                    </div>
                </React.Fragment>

                : null
            }
        </AnimatePresence>
    )
}

export default Modal;