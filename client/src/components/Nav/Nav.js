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
    ItemGrid,
    useStyles,
} from "./imports";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FaceIcon from "@material-ui/icons/Face";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import * as actions from "../../store/actions/products";
import { toggleCart, toggleAuthModal } from "../../store/actions/orderActions";
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
    const drawer = (
        <div className={classes.filter}>
            <div className={classes.toolbar} />
            <List>
                <ListItem button onClick={() => props.getItem("shoe")} key={"shoes"}>
                    <ListItemIcon>
                        {" "}
                        <InboxIcon />{" "}
                    </ListItemIcon>
                    <ListItemText primary={"shoes"} />
                </ListItem>
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
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
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
            <AppBar elevation={0} className={classes.appBar}>
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <Typography variant="h6" noWrap>
                            Shopify
                        </Typography>
                    </div>
                    <div>
                        <IconButton
                            style={{ marginRight: "0.5rem" }}
                            onClick={() => props.toggleCart()}
                        >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => props.toggleAuthModal()}>
                            <FaceIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.appBarSpacer} />
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
        toggleCart: () => dispatch(toggleCart()),
        toggleAuthModal: () => dispatch(toggleAuthModal()),
        getItem: (item) => dispatch(actions.getItem(item)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
