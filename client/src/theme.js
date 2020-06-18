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
})
export default theme