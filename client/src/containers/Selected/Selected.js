import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/orderActions";
import { Grid, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Selector from "../../components/Size_selctor/Selector";
import BackButton from "./BackButton/BackButton";
import "./Selected.css";
const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: "hidden",
        flexGrow: 1,
        backgroundColor: "#f6f6f6",
    },
    name: {
        margin: "1rem",
    },
    price: {
        margin: "1rem",
    },
}));

const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
    exit:
        window.innerWidth <= 414
            ? { opacity: 0, transition }
            : { x: "50%", opacity: 0, transition },
    enter: {
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
            duaration: 0.5,
        },
    },
};

const childVariant = {
    hidden: { opacity: 0, y: "30%" },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
    exit: {
        y: "0%",
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function Selected(props) {
    console.log(props);
    let prod;
    for (let i = 0; i < props.items.length; i++) {
        if (props.items[i]._id === props.selectedId) {
            prod = props.items[i];
        }
    }
    const f = (prod, selectedSize) => {
        props.addToCart(prod, selectedSize);
        props.history.goBack();
    };
    const classes = useStyles();
    // if (window.innerWidth < 411) {
    //     window.scrollTo(0, 0);
    // }
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // });
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <motion.div initial="exit" animate="enter" exit="exit" className="imageContent">
                        <motion.img
                            variants={imageVariants}
                            src={prod.imageLink}
                            className="prodImage"
                        />
                    </motion.div>
                    <BackButton history={props.history} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={parentVariant}
                        className="parent"
                    >
                        <motion.div className={classes.name} variants={childVariant}>
                            <Typography style={{ fontSize: "2rem" }} variant="h3">
                                {prod.brand}
                            </Typography>
                        </motion.div>
                        <motion.div className={classes.name} variants={childVariant}>
                            <h3 className="prodName">{prod.name}</h3>
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
                            {/* :::::::: SELECTOR ::::::::: */}
                            <Selector product={prod} />
                        </motion.div>
                        <motion.div className={classes.price} variants={childVariant}>
                            <motion.button
                                className="buyButton"
                                whileHover={{
                                    borderRadius: "2rem",
                                    scale: 1.2,
                                    transition: {
                                        type: "spring",
                                        duration: 0.7,
                                    },
                                }}
                                whileTap={{
                                    scale: 0.8,
                                    transition: {
                                        type: "spring",
                                        duration: 0.3,
                                    },
                                }}
                                onClick={() => f(prod, props.selectedSize)}
                                disabled={!props.isAuth}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    {props.isAuth ? "Add to cart" : " You have to login first"}
                                    {props.isAuth ? null : (
                                        <LockOutlinedIcon
                                            style={{ marginLeft: "4px", marginBottom: "4px" }}
                                        />
                                    )}
                                </div>
                            </motion.button>
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
        isAuth: state.auth.isAuth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (data, size) => dispatch(addToCart(data, size)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Selected);
// This code sample is from an e-commerce project, coded in Reactjs and javascript. It renders a detailed view of the product and gives some options like the sizes available for the product. This code uses various open-source React libraries like styled-components for using its
// CSS-in-JS feature, Framer-motion for initial render animations of the buttons, text, and Images.
