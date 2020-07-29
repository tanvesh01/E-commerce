import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import BrandList from "./Categories/BrandList";
import PriceSlider from "./Categories/PriceSlider";
import Cart from "../Cart/Cart";
import Landing from "../Landing/Landing";
import ItemGrid from "../Item/ItemGrid/ItemGrid";
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",
        position: "absolute",
    },
    modal: {
        marginLeft: "10rem",
    },
    drawer: {
        marginTop: "10rem",
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        backdropFilter: "saturate(180%) blur(7px)",
        backgroundColor: "rgba(241, 242, 249, 0.25)",
        color: "black",
        zIndex: 99,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        padding: "1rem",
        marginLeft: "10px",
        marginTop: "10rem",
        marginBottom: "20px",
        width: drawerWidth,
        backgroundColor: "white",
        position: "static",
    },
    content: {
        marginTop: "10rem",
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    filter: {
        borderRadius: "1.5rem",
        overflow: "auto",
        backgroundColor: "white",
        boxShadow: "0px 38px 44px 0px rgba(240,240,240,0.68)",
    },
    app: {
        display: "flex",
        flexDirection: "row",
    },
    appBarSpacer: theme.mixins.toolbar,
}));

export {
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
    makeStyles,
    useTheme,
    BrandList,
    PriceSlider,
    Cart,
    Landing,
    ItemGrid,
    useStyles,
};
