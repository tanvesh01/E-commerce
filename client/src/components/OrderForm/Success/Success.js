import React from "react";
import { connect } from "react-redux";
import { toggleCart } from "../../../store/actions/orderActions";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: "60%",
        height: "60%",
    },
    icon: {
        width: "9rem",
        height: "9rem",
    },
}));

function Success(props) {
    const classes = useStyles();
    return (
        <Grid justify="center" alignContent="center" container className={classes.root}>
            <Grid justify="center" style={{ textAlign: "center" }} item xs={12}>
                <CheckCircleOutlinedIcon className={classes.icon} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center", marginBottom: "1rem" }}>
                <Typography variant="subtitle1" style={{ fontSize: "1.5rem" }}>
                    Hey,
                </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography variant="h3">Your order is Confirmed!</Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        width: "50%",
                        marginTop: "1rem",
                    }}
                    onClick={() => props.toggleModel()}
                >
                    Continue Shopping ?
                </Button>
            </Grid>
        </Grid>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModel: () => dispatch(toggleCart()),
    };
};

export default connect(null, mapDispatchToProps)(Success);
