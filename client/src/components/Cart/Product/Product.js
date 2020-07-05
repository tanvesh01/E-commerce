import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({

    root: {
        width: "100%",
        height: "6rem"
    },
    image: {
        overflow: "hidden"
    },
}))
function Product(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={6} >
                    <div className={classes.image}> <img className={classes.inImage} src={props.image} alt="of the Produvt" /> </div>
                </Grid>
                <Grid item xs={6} > {props.name} </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Product;