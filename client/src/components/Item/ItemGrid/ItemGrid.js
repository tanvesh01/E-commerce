import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from "../Item";
import { motion } from "framer-motion"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));
// // framer motion ========
// const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
// // ======================
const ItemGrid = (props) => {
    const classes = useStyles();
    return (
        <motion.div className={classes.root} className="thumbnails"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
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
        </motion.div>
    );
}
export default ItemGrid;