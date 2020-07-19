import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        width: "40px",
        height: "40px",
        margin: "2rem",
        border: "2px black solid",
    },
}));

function Select(props) {
    const classes = useStyles();
    return <div className={classes.root}>{props.value}</div>;
}

export default Select;
