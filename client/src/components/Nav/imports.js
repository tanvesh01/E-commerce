import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Footwear from "../../Assets/icons8-sneakers-50.png";
import Phones from "../../Assets/icons8-cell-phone-50.png";
import accessories from "../../Assets/icons8-purse-50.png";
import clothing from "../../Assets/icons8-clothes-line-50.png";
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
        boxShadow: "box-shadow: 0px 7px 50px -17px rgba(191,191,191,1)",
    },
    modal: {
        marginLeft: "10rem",
    },
    drawer: {
        marginTop: "1rem",
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        backdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: "rgba(255,255,255,.9)",
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
        marginBottom: "20px",
        width: drawerWidth,
        backgroundColor: "white",
        position: "inherit",
        borderRight: 0,
        zIndex: 0,
    },
    content: {
        marginTop: "1rem",
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    filter: {
        overflow: "auto",
        backgroundColor: "white",
    },
    app: {
        display: "flex",
        flexDirection: "row",
    },
    appBarSpacer: theme.mixins.toolbar,
}));

const listOfButtons = [
    { label: "Footwear", category: "shoe", data: Footwear },
    { label: "Clothing", category: "clothing", data: clothing },
    { label: "Accessories", category: "accessories", data: accessories },
    { label: "Phones", category: "phone", data: Phones },
];

export {
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
    makeStyles,
    useTheme,
    BrandList,
    PriceSlider,
    Cart,
    Landing,
    ItemGrid,
    useStyles,
    listOfButtons,
};
