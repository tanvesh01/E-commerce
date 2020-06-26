import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import BgImage from "../../Assets/4399.svg"
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        height: "40rem",
        marginTop: "2rem"
    },
    outer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        width: "90%",
        height: "100%",
        position: "relative"
        //backgroundImage: `url(${BgImage})`
    },
    inner: {
        marginLeft: "2rem",
        marginTop: "5rem",
        width: "50%",
        height: "100%"
        , position: "absolute",
        backdropFilter: "saturate(180%) blur(7px)",
        backgroundColor: "rgba(241, 242, 249, 0.25)"
    },
    head: {
        color: "#373482"
    }
}));

export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.outer}><img width="100%" height="100%" src={BgImage} />
                <div className={classes.inner}>
                    <Typography variant="h1" className={classes.head} >
                        Welcome to the new age of shopping
                    </Typography>
                </div>
            </div>
        </div>
    )
}
