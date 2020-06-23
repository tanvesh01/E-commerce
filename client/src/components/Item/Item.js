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
import * as actions from "../../store/actions/orderActions";
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

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ y: -60, opacity: 1 }} transition={{ duration: 1 }}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" onClick={() => props.addToCart(props.name)} color="primary">
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
        addToCart: (name) => dispatch(actions.addToCart(name))
    }
}

export default connect(null, mapDispatchToProps)(SimpleCard);