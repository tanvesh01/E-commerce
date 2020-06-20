import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from "../Item"
import { connect } from "react-redux"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));
const ItemGrid = (props) => {
    const classes = useStyles();
    console.log(props.items)
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    props.items != null ?
                        props.items.map(function (x) {
                            if (props.brand != null) {
                                if (x.brand === props.brand) {

                                    return <Grid item xs={6} sm={4} key={x._id}>
                                        <Item name={x.name} />
                                    </Grid>
                                }
                            } else {
                                return <Grid item xs={6} sm={4} key={x._id}>
                                    <Item name={x.name} />
                                </Grid>
                            }
                        })
                        :
                        <p>loading.....</p>
                }
            </Grid>
        </div>
    );
}
export default ItemGrid;