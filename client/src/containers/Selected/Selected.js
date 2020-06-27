import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion"
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    imageContent: {
        width: "100%",
        height: "100vh",
        backgroundColor: "grey",
    }
}))

function Selected(props) {
    console.log(props.items);
    let prod
    for (let i = 0; i < props.items.length; i++) {

        if (props.items[i]._id == props.selectedId) {
            prod = props.items[i];
        }
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container  >
                <Grid item xs={6}>
                    <div className={classes.imageContent} style={{
                        backgroundImage: prod.imageLink
                    }} ><img style={{ objectFit: "cover" }} width="100%" height="100%" src={prod.imageLink} /></div>
                </Grid>
                <Grid item xs={6}>
                    <div>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedId: state.category.selected,
        items: state.category.items
    }
}

export default connect(mapStateToProps, null)(Selected)