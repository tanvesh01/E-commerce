import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { motion, AnimatePresence } from "framer-motion"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: "2000",
        top: 0,
        left: 0,
        position: "fixed",
        width: "100%",
        height: "100%",
        backdropFilter: "saturate(138%) blur(3px)",
        backgroundColor: "rgba(241, 242, 249, 0.25)",
    },
    cart: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        margin: "3rem",
        borderRadius: "2.5rem"
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
                <motion.div
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={props.modalHandler}
                    className={classes.backdrop}>

                    <Grid container spacing={3} style={{ height: "100%" }}>
                        <Grid item xs={6}>
                            <h3>next</h3>
                        </Grid>
                        <Grid item xs={6}  >
                            <motion.div className={classes.cart}>

                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div> : null
            }
        </AnimatePresence>
    )
}

export default Modal;