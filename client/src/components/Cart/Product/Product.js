import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1
    },
    inImage: {
        display: "block",
        margin: "auto"
    }
}))
function Product(props) {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={`${classes.image} ${classes.col}`}> <img style={{ objectFit: "cover", height: "170px", width: "170px" }} className={classes.inImage} src={props.image} alt="of the Product" /> </div>
            <div className={classes.col} >{props.name}</div>
        </div>
    )
}

export default Product;