import React from "react";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Product from "./Product/Product";
import { connect } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import * as actions from "../../store/actions/orderActions";
import { useStyles } from "./imports";

function Cart(props) {
    const classes = useStyles();
    return (
        <motion.div className={classes.cart}>
            <div className={classes.header}>
                <div className={classes.heading}>
                    <Typography variant="h3" style={{ fontSize: "4rem" }}>
                        Your Cart
                    </Typography>
                </div>
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
                                    brand={x.brand}
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
                                        alignItems: "center",
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
