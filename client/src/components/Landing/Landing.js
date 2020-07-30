import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../Assets/g10.svg";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "2rem",
    },
    outer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "90%",
        position: "relative",
    },
    inner: {
        marginLeft: "2rem",
        marginTop: "5rem",
        width: "50%",
        height: "100%",
        position: "absolute",
    },
    row: {
        color: "black",
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1,
        justifyContent: "center",
    },
    // head: {
    //     color: "#373482",
    // },
}));

export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.outer}>
                <div>
                    <img width="60%" height="60%" src={BgImage} alt="landing" />
                </div>
                <div className={classes.inner}>
                    <Typography variant="h1" className={classes.head}>
                        Do Shopping Like Never Before
                    </Typography>
                </div>
            </div>
        </div>
    );
}
