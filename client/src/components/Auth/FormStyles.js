import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "1rem",
        width: "100%",
        "& label.Mui-focused": {
            color: "grey",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "red",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black",
                borderWidth: "3px",
            },
            "&:hover fieldset": {
                borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
                borderColor: "black",
            },
        },
    },
    welcome: {
        fontSize: "4rem",
        textAlign: "center",
        margin: 0,
        fontFamily: "'Bebas Neue', cursive",
    },
    "@media only screen and (max-width: 600px)": {
        welcome: {
            fontSize: "3rem",
        },
    },
}));

export { useStyles };
