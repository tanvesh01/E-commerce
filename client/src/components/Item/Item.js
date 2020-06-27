import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import * as actions from "../../store/actions/orderActions";
import * as productActions from "../../store/actions/products";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const SimpleCard = (props) => {
    const classes = useStyles();
    console.log(props.data._id);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ y: -60, opacity: 1 }} transition={{ duration: 1 }}>
            <Card className={classes.root}>
                <CardActionArea onClick={() => props.setSelect(props.data._id)} component={Link} to="/select" >
                    <CardMedia
                        className={classes.media}
                        image={props.data.imageLink}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.data.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" onClick={() => props.addToCart(props.data)} color="primary">
                        Add to cart
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </motion.div>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (data) => dispatch(actions.addToCart(data)),
        setSelect: (id) => dispatch(productActions.setSelect(id))
    }
}

export default connect(null, mapDispatchToProps)(SimpleCard);