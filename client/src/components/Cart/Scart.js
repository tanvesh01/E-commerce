import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { motion } from "framer-motion"
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import Product from "./Product/Product"
import { connect } from "react-redux"
const useStyles = makeStyles((theme) => ({
    cart: {
        width: "90%",
        height: "90%",
        backgroundColor: "white",
        margin: "0 auto",
        zIndex: 500,
        position: "fixed",
    },
    header: {
        position: "relative",
        height: "20%"
    },
    heading: {
        position: "absolute",
        zIndex: 10,
        marginLeft: "5rem",
        marginTop: "3rem"
    },
    svg: {
        position: "absolute",
        width: "100%",
        height: "50%",
        zIndex: 1,
    },
    info: {
        width: "100%",
        height: "5%",
        marginTop: "3rem",
        backgroundColor: "transparent",
        border: "2px solid purple",
        zIndex: 600,
        display: "block",
        position: "relative"
    },
    labels: {
        textAlign: "center",
        height: "3rem"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1
    },
    product: {
        display: "block"
    }
}))

function Cart(props) {
    const classes = useStyles();
    return (
        <motion.div className={classes.cart}>
            <div className={classes.header} >
                <div className={classes.heading} >
                    <Typography variant="h1" gutterBottom>
                        My Cart
                    </Typography>
                </div>
                <div className={classes.svg} >
                    <svg style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe8df" fill-opacity="1" d="M0,320L40,277.3C80,235,160,149,240,144C320,139,400,213,480,229.3C560,245,640,203,720,208C800,213,880,267,960,293.3C1040,320,1120,320,1200,304C1280,288,1360,256,1400,240L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                </div>
            </div>
            <div className={classes.info} >
                <div className={classes.row}>
                    <div className={`${classes.col} ${classes.labels}`}  >
                        <p>Products</p>
                    </div>
                    <div className={`${classes.col} ${classes.labels}`}  >
                        <p>Price</p>
                    </div>
                </div>
            </div>
            <div className={classes.product}>
                {props.cart.map(function (x) {
                    return <div className={classes.row} >
                        <div className={classes.col} >
                            <Product name={x.data.name} image={x.data.imageLink} />
                        </div>
                        <div className={`${classes.price} ${classes.col}`}  >
                            {x.data.price}
                        </div>
                    </div>
                })}
            </div>

        </motion.div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.orders.cart
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteFromCart: (id) => dispatch(actions.deleteFromCart(id)),
//         submitOrder: (item) => dispatch(actions.submitOrder(item))
//     }
// }

export default connect(mapStateToProps, null)(Cart);