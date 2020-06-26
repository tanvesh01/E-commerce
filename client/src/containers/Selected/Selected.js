import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: "rgba(241, 242, 249, 0.25)"
    }
}))

export default function Selected() {
    return (
        <div>
            <h1>hey!</h1>
        </div>
    )
}
