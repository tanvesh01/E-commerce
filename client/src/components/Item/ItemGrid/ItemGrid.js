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
                    props.items != null ?
                        props.items.map(function (x) {
                            if (props.brand != null) {
                                if (x.brand === props.brand &&
                                    x.price >= Number(props.minPrice) &&
                                    x.price <= Number(props.maxPrice)) {

                                    return <Grid item xs={6} sm={4} key={x._id}>
                                        <Item data={x} />
                                    </Grid>
                                }
                            } else {
                                if (x.price >= Number(props.minPrice) &&
                                    x.price <= Number(props.maxPrice)) {
                                    return <Grid item xs={6} sm={4} key={x._id}>
                                        <Item data={x} />
                                    </Grid>
                                }
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