import React from "react";
import {
    AppBar,
    CssBaseline,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    MenuIcon,
    Toolbar,
    Typography,
    useTheme,
    BrandList,
    PriceSlider,
    ItemGrid,
    useStyles,
    listOfButtons,
} from "./imports";
import Icon from "./Icon/Icon";
import Landing from "../Landing/Landing";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { getItem } from "../../store/actions/products";
import { toggleCart } from "../../store/actions/orderActions";
import { toggleAuthModal, logOut } from "../../store/actions/authActions";
function ResponsiveDrawer(props) {
    // const { window } = props;
    console.log(window.innerWidth);
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div className={classes.filter}>
            <List>
                {listOfButtons.map((e) => {
                    return (
                        <ListItem
                            button
                            onClick={() => {
                                props.getItem(e.category);
                                if (window.innerWidth <= 600) {
                                    handleDrawerToggle();
                                }
                            }}
                            key={e.label}
                        >
                            <Icon img={e.data} />
                            <Typography style={{ fontSize: "2rem" }} variant="h3">
                                {e.label}
                            </Typography>
                        </ListItem>
                    );
                })}
                {/* ::::::::: FILTERS STARTS HERE ::::::::: */}
                <BrandList items={props.items} />
                <PriceSlider />
            </List>
        </div>
    );

    const container = undefined;
    // window !== undefined ? () => window().document.body : undefined;
    const rootVariant = {
        hidden: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 3,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1.5,
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
                    <div></div>
                    <div className={classes.navInfo}>
                        <IconButton
                            style={{ marginRight: "0.5rem" }}
                            onClick={() => props.toggleCart()}
                        >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                        {props.isAuth ? (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {"Welcome back, " + props.user.name + "  "}
                                <IconButton onClick={() => props.logOut()}>
                                    <ExitToAppIcon />
                                </IconButton>
                            </div>
                        ) : (
                            <IconButton onClick={() => props.toggleAuthModal()}>
                                <FaceIcon />
                            </IconButton>
                        )}
                    </div>
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
        isAuth: state.auth.isAuth,
        user: state.auth.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(toggleCart()),
        toggleAuthModal: () => dispatch(toggleAuthModal()),
        getItem: (item) => dispatch(getItem(item)),
        logOut: () => dispatch(logOut()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
