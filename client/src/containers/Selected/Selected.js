import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion"
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    imageContent: {
        width: "100%",
        height: "100vh",
        zIndex: 1000
    },
    name: {
        textAlign: "center",
        marginTop: "13rem"
    },
    price: {
        margin: "1rem",
        textAlign: "center",
    }
}))

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
    exit: { x: "50%", opacity: 0, transition },
    enter: {
        x: "0%",
        opacity: 1,
        transition
    }
};

function Selected(props) {
    console.log(props.items);
    let prod
    for (let i = 0; i < props.items.length; i++) {
        if (props.items[i]._id === props.selectedId) {
            prod = props.items[i];
        }
    }
    const parentVariant = {
        hidden: {
            opacity: 0,
            y: '50%',
            transition: {
                delay: 1,
                staggerChildren: 0.5,
            }
        },
        visible: {
            opacity: 1,
            y: "0%",
            transition: {
                // type: 'spring',
                // mass: 0.4,
                // damping: 8,
                delay: 1,
                duration: 1,
                staggerChildren: 0.4,
                when: "beforeChildren",
            }
        },
    }

    const childVariant = {
        hidden: { opacity: 0, y: "50%" }, visible: {
            y: "0%", opacity: 1, transition: {
                duration: 1
            }
        },
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container  >
                <Grid item xs={6}>
                    <motion.div initial="exit" animate="enter" exit="exit" className={classes.imageContent}  >
                        <motion.img variants={imageVariants} style={{ objectFit: "cover" }} width="100%" height="100%" src={prod.imageLink} />
                    </motion.div>
                </Grid>
                <Grid item xs={6}>
                    <motion.div initial="hidden" animate="visible" exit="hidden" >
                        <motion.div className={classes.name} variants={parentVariant} >
                            <Typography variant="h3"  >
                                {prod.name}
                            </Typography>
                            <motion.div className={classes.price} variants={childVariant} >
                                <Typography variant="h3"  >
                                    $ {prod.price}
                                </Typography>
                            </motion.div>
                        </motion.div>

                    </motion.div>
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