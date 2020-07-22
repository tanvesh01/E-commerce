import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cart: {
        width: "100%",
        height: "90%",
        backgroundColor: "#ffffff",
        zIndex: 500,
        overflow: "scroll",
        borderRight: "10px black solid",
        borderLeft: "10px black solid",
        borderTop: "10px black solid",
    },
    header: {
        position: "relative",
        height: "22%",
    },
    heading: {
        backgroundColor: "black",
        color: "#d0d0d0",
        position: "absolute",
        zIndex: 10,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "5rem",
        paddingRight: "2rem",
        marginTop: "3rem",
    },
    svg: {
        position: "absolute",
        width: "100%",
        height: "50%",
        zIndex: 1,
    },
    info: {
        width: "100%",
        marginTop: "3rem",
        backgroundColor: "transparent",
        // border: "2px solid purple",
        zIndex: 600,
        display: "block",
        position: "relative",
        color: "#888888",
    },
    labels: {
        textAlign: "center",
        height: "3rem",
        fontSize: "12.7px",
        letterSpacing: "0.17em",
    },
    row: {
        color: "#888888",
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1,
    },
    product: {
        display: "block",
        margin: "2rem",
    },
    price: {
        marginLeft: "4rem",
        lineHeight: "8.43",
    },
}));

export { useStyles };
