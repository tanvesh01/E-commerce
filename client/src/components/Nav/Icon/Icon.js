import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {},
}));

export default function Landing(props) {
    const classes = useStyles();
    return (
        <span className={classes.root}>
            <img height="40px" style={{ marginRight: "10px" }} src={props.img} alt="icon" />
        </span>
    );
}
