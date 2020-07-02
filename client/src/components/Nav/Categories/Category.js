import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
    button: {
        width: "100%",
        border: "1rem",
        margin: "0.8rem",
        backgroundColor: "grey"
    }
}))

function Category(props) {
    const classes = useStyles();
    return (
        <motion.button whileHover={{ scale: 1.5, originX: 0 }} >
            {props.text}
        </motion.button>
    )
}

export default Category;
