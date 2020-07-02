import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { motion, AnimatePresence } from "framer-motion"
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
    cart: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        margin: "3rem",
        borderRadius: "2.5rem",
        zIndex: 2001
    }
}))

function Cart() {
    const classes = useStyles();
    return (
        <motion.div className={classes.cart}>

        </motion.div>
    )
}

export default Cart;