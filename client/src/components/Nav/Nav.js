import React from "react";
import {
    AppBar,
    CssBaseline,
    Drawer,
    Hidden,
    IconButton,
    InboxIcon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuIcon,
    Toolbar,
    Typography,
    useTheme,
    BrandList,
    PriceSlider,
    Cart,
    Landing,
    ItemGrid,
    useStyles,
} from "./imports";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import * as actions from "../../store/actions/products";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const catergoryVariants = {
        hover: {
            scale: 0.98,
            originX: 0,
        },
    };
    const drawer = (
        <div className={classes.filter}>
            <div className={classes.toolbar} />
            <List>
                <motion.div variants={catergoryVariants} whileHover="hover">
                    <ListItem button onClick={() => props.getItem("shoe")} key={"shoes"}>
                        <motion.div
                            style={{ width: "100%", display: "flex" }}
                            whileHover={{ scale: 1.3, originX: 0, originY: 0 }}
                        >
                            <ListItemIcon>
                                {" "}
                                <InboxIcon />{" "}
                            </ListItemIcon>
                            <ListItemText primary={"shoes"} />
                        </motion.div>
                    </ListItem>
                </motion.div>
                <ListItem button onClick={() => props.getItem("Phone")} key={"phones"}>
                    <ListItemIcon>
                        {" "}
                        <InboxIcon />{" "}
                    </ListItemIcon>
                    <ListItemText primary={"phones"} />
                </ListItem>
                {/* ::::::::: FILTERS STARTS HERE ::::::::: */}
                <BrandList items={props.items} />
                <PriceSlider />
                <Cart data={props.cart} />
                <Button component={Link} to="/register">
                    Register
                </Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const rootVariant = {
        hidden: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1.5,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div
            variants={rootVariant}
            initial="hidden"
            animate="animate"
            exit="exit"
            className={classes.root}
        >
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Shopify
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.appBarSpacer} />
            <Landing />
            <div className={classes.app}>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === "rtl" ? "right" : "left"}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                                modal: classes.modal,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <ItemGrid
                        items={props.items}
                        brand={props.brand}
                        minPrice={props.minPrice}
                        maxPrice={props.maxPrice}
                    />
                </main>
            </div>
        </motion.div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.orders.cart,
        items: state.category.items,
        loading: state.category.loading,
        brand: state.category.brand,
        minPrice: state.category.minPrice,
        maxPrice: state.category.maxPrice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItem: (item) => dispatch(actions.getItem(item)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
