import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cart: {
        width: "100%",
        height: "90%",
        backgroundColor: "#ffffff",
        zIndex: 500,
        overflowY: "scroll",
        overflowX: "hidden",
        position: " relative",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
    },

    header: {
        position: "relative",
        height: "22%",
    },
    heading: {
        // backgroundColor: "black",
        color: "black",
        position: "absolute",
        zIndex: 10,
        fontSize: "4rem",
        padding: "1rem 2rem 1rem 5rem",
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
        fontWeight: "800",
    },
    row: {
        color: "black",
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    col_prod: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1,
        justifyContent: "center",
    },
    col_price: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1,
        justifyContent: "center",
    },
    product: {
        display: "block",
        margin: "2rem",
    },
    price: {
        marginLeft: "50%",
        fontWeight: "800",
    },
    placeOrder: {
        backgroundColor: "#d0d0d033",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        position: "sticky",
        height: "30%",
        justifyContent: "flex-end",
        width: "100%",
    },
    subTotal: {
        borderTop: "5px black solid",
        marginRight: "1rem",
        width: "50%",
        fontFamily: "'Bebas Neue', cursive",
        letterSpacing: "2.2px",
        fontWeight: "800",
    },
    subText: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2.6rem",
        marginBottom: "2.6rem",
        color: "#848484",
    },
    "@media only screen and (max-width: 600px)": {
        subText: {
            margin: "1rem 0 1rem 0",
        },
        subTotal: {
            margin: 0,
            width: "100%",
        },
        label_price: {
            paddingRight: "2rem",
        },
        price: {
            marginLeft: 0,
        },
        cart: {
            height: "100%",
        },
        product: {
            margin: "0.9rem",
        },
        col_price: {
            flexBasis: "10%",
        },
        col_prod: {
            flexBasis: "90%",
        },
        header: {
            height: "6%",
        },
        heading: {
            textAlign: "center",
            width: "100%",
            padding: 0,
            fontSize: "2rem",
            marginTop: "2rem",
        },
    },
}));

export { useStyles };
