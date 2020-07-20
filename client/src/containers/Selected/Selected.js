import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import Selector from "../../components/Size_selctor/Selector";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import * as actions from "../../store/actions/orderActions";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#f6f6f6",
        // "& div": {
        //     border: "1px purple solid",
        // },
    },
    imageContent: {
        width: "100%",
        height: "100vh",
        zIndex: 1000,
    },
    parent: {
        marginTop: "8rem",
        marginLeft: "1rem",
    },
    name: {
        margin: "1rem",
    },
    price: {
        margin: "1rem",
    },
}));

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
    exit: { x: "50%", opacity: 0, transition },
    enter: {
        x: "0%",
        opacity: 1,
        transition,
    },
};

const parentVariant = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duaration: 1,
        },
    },
};

const childVariant = {
    hidden: { opacity: 0, y: "-30%" },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

function Selected(props) {
    console.log(props.items);
    let prod;
    for (let i = 0; i < props.items.length; i++) {
        if (props.items[i]._id === props.selectedId) {
            prod = props.items[i];
        }
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <motion.div
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        className={classes.imageContent}
                    >
                        <motion.img
                            variants={imageVariants}
                            style={{ objectFit: "cover" }}
                            width="100%"
                            height="100%"
                            src={prod.imageLink}
                        />
                    </motion.div>
                </Grid>
                <Grid item xs={6}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={parentVariant}
                        className={classes.parent}
                    >
                        <motion.div className={classes.name} variants={childVariant}>
                            <Typography style={{ fontSize: "2rem" }} variant="h3">
                                {prod.brand}
                            </Typography>
                        </motion.div>
                        <motion.div className={classes.name} variants={childVariant}>
                            <Typography variant="h3" style={{ fontSize: "5rem" }}>
                                {prod.name}
                            </Typography>
                        </motion.div>
                        <motion.div className={classes.price} variants={childVariant}>
                            <Typography style={{ fontSize: "3rem" }} variant="h3">
                                ${prod.price}
                            </Typography>
                        </motion.div>
                        <motion.div className={classes.price} variants={childVariant}>
                            <Typography
                                style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}
                                variant="h3"
                            >
                                SIZE
                            </Typography>
                            <Selector product={prod} />
                        </motion.div>
                        <motion.div className={classes.price} variants={childVariant}>
                            <Button onClick={() => props.addToCart(prod, props.selectedSize)}>
                                Add to cart
                            </Button>
                        </motion.div>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        selectedSize: state.orders.selectedSize,
        selectedId: state.category.selected,
        items: state.category.items,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (data, size) => dispatch(actions.addToCart(data, size)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Selected);
