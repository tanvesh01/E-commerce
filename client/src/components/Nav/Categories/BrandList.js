import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { connect } from "react-redux"
import * as actions from "../../../store/actions/categoryActions";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function BrandList(props) {
    const classes = useStyles();
    let array = [{
        brand: "Loading.."
    }]
    if (props.items == null) {
        array = [{
            brand: "Loading.."
        }]
    }
    else {
        array = props.items;
    }
    const distinctBrands = [...new Set(array.map(x => x.brand))];
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        {
                            distinctBrands ?
                                distinctBrands.map(function (x) {
                                    return <ListItem button onClick={() => props.setBrand(x)} >
                                        <ListItemIcon><InboxIcon /></ListItemIcon>
                                        <ListItemText primary={x} />
                                    </ListItem>
                                }) : null
                        }</div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBrand: (brand) => dispatch(actions.setBrand(brand))
    }
}

export default connect(null, mapDispatchToProps)(BrandList)