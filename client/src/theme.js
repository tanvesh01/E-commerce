import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    backgroundColor: "white",
                },
                body: {
                    backgroundColor: "white",
                },
            },
        },
    },

    typography: {
        fontFamily: " 'Jost', sans-serif",
        // h5: {
        //     fontWeight: 700,
        //     fontSize: "2rem",
        // },
        h1: {
            fontFamily: "'Abril Fatface', cursive",
        },
        h3: {
            fontFamily: "'Bebas Neue', cursive",
        },
        subtitle1: {
            fontFamily: " 'Jost', sans-serif",
        },
    },
});
export default theme;
