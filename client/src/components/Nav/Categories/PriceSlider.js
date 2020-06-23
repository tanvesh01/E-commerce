import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from "react-redux";
import * as actions from "../../../store/actions/products";
const useStyles = makeStyles({
    root: {
        width: 200,
        marginLeft: "2rem"
    },
});
const marks = [
    {
        value: 0,
        label: "0"
    },
    {
        value: 250,
        label: "250"
    },
    {
        value: 500,
        label: "500"
    },
    {
        value: 750,
        label: "750"
    },
    {
        value: 1000,
        label: "1000"
    },

]
function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 500]);

    const handleChange = (event, newValue) => {
        console.log(newValue[0]);
        props.setPrices(newValue[0], newValue[1]);
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Temperature range
      </Typography>
            <Slider
                value={value}
                onChangeCommitted={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                marks={marks}
                step={null}
                max={1000}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setPrices: (min, max) => dispatch(actions.setPrices(min, max))
    }
}

export default connect(null, mapDispatchToProps)(RangeSlider)