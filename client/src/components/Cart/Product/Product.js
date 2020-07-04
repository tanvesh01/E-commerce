import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({

    root: {
        width: "100%",
        height: "100%"
    },
    image: {

    }
}))
function Product(props) {
    return (
        <React.Fragment>
            <Grid container >
                <Grid item >
                    <div className={classes.image}> <img src={props.imageLink} alt="Image of the Produvt" /> </div>
                </Grid>
                <Grid item > </Grid>
            </Grid>
        </React.Fragment>
    )
}