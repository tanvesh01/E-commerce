import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from "../Item"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));
const ItemGrid = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    props.items ?
                        props.items.map(function (x) {
                            if (x.category != null) {
                                return <Grid item xs={6} sm={4} key={x.id} >
                                    <Item name={x.name} />
                                </Grid>
                            }
                        })
                        :
                        <p>loading!!!!!!!!</p>
                }
            </Grid>
        </div>
    );
}
export default ItemGrid;