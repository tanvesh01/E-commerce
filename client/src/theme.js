import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    backgroundColor: "white",
                },
                body: {
                    backgroundColor: "white",
                }
            },
        },
    },
    // props: {
    //     // Name of the component
    //     MuiButtonBase: {
    //         // The properties to apply
    //         disableRipple: true // No more ripple, on the whole application!
    //     }
    // },
    typography: {
        fontFamily: " 'Jost', sans-serif",
        // h5: {
        //     fontWeight: 700,
        //     fontSize: "2rem",
        // },
        h1: {
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "3rem"
        }
    },
})
export default theme