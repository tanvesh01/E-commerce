import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        justifyContent: "center",
        flex: 1,
    },
    inImage: {
        display: "block",
        margin: "auto",
        objectFit: "cover",
        height: "170px",
        width: "170px",
    },
    info: {
        color: "black",
    },
    "@media only screen and (max-width: 600px)": {
        inImage: { height: "5rem", width: "5rem" },
    },
}));
function Product(props) {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={`${classes.image} ${classes.col}`}>
                <img
                    style={{}}
                    className={classes.inImage}
                    src={props.image}
                    alt="of the Product"
                />
            </div>
            <div className={`${classes.col} ${classes.info} `}>
                <Typography variant="subtitle1" style={{ fontSize: "0.8rem" }}>
                    {props.brand}
                </Typography>
                <Typography variant="h3" style={{ fontSize: "1.5rem" }}>
                    {props.name}
                </Typography>
                <Typography variant="subtitle1">size: {props.size}</Typography>
            </div>
        </div>
    );
}

export default Product;
