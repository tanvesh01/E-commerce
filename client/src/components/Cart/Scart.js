import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Product from "./Product/Product";
import { connect } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import * as actions from "../../store/actions/orderActions";
const useStyles = makeStyles((theme) => ({
    cart: {
        width: "50%",
        height: "90%",
        backgroundColor: "#ffffff",
        margin: "0 auto",
        zIndex: 500,
        overflow: "scroll",
    },
    header: {
        position: "relative",
        height: "20%",
    },
    heading: {
        position: "absolute",
        zIndex: 10,
        marginLeft: "5rem",
        marginTop: "3rem",
    },
    svg: {
        position: "absolute",
        width: "100%",
        height: "50%",
        zIndex: 1,
    },
    info: {
        width: "100%",
        marginTop: "3rem",
        backgroundColor: "transparent",
        // border: "2px solid purple",
        zIndex: 600,
        display: "block",
        position: "relative",
        color: "#888888",
    },
    labels: {
        textAlign: "center",
        height: "3rem",
        fontSize: "12.7px",
        letterSpacing: "0.17em",
    },
    row: {
        color: "#888888",
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1,
    },
    product: {
        display: "block",
        margin: "2rem",
    },
    price: {
        marginLeft: "4rem",
        lineHeight: "8.43",
    },
}));

function Cart(props) {
    const classes = useStyles();
    return (
        <motion.div className={classes.cart}>
            <div className={classes.header}>
                <div className={classes.heading}>
                    <Typography variant="h1" gutterBottom>
                        My Cart
                    </Typography>
                </div>
                <div className={classes.svg}></div>
            </div>
            <div className={classes.info}>
                <div className={classes.row}>
                    <div className={`${classes.col} ${classes.labels}`}>
                        <p style={{ fontWeight: "700" }}>PRODUCTS</p>
                    </div>
                    <div className={`${classes.col} ${classes.labels}`}>
                        <p>PRICE</p>
                    </div>
                </div>
            </div>
            <div className={classes.product}>
                {props.cart.map(function (x, index) {
                    return (
                        <div className={classes.row} style={{ marginTop: "2rem" }}>
                            <div className={` ${classes.products} ${classes.col}`}>
                                <Product
                                    name={x.name}
                                    size={props.sizes[index]}
                                    image={x.imageLink}
                                />
                            </div>
                            <div className={classes.col}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div className={classes.price}>{x.price}</div>
                                    <div>
                                        <IconButton onClick={() => props.deleteFromCart(x._id)}>
                                            <ClearIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.orders.cart,
        sizes: state.orders.sizes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (id) => dispatch(actions.deleteFromCart(id)),
        submitOrder: (item) => dispatch(actions.submitOrder(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
