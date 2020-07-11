import React, { Component } from 'react';
import { Grid } from "@material-ui/core"
class Register extends Component {
    render() {
        return (
            <Grid container spacing={0} style={{ backgroundColor: "grey", height: "100%" }} >
                <Grid item style={{ backgroundColor: "white" }} xs={6} ></Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        )
    }
}

export default Register;