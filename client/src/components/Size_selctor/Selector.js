import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSize } from "../../store/actions/orderActions";
import "./style.css";
class Selector extends Component {
    state = {
        size: this.props.product.sizes,
    };
    changeHandler = (event) => {
        console.log(event.target.value);
        this.props.selectSize(event.target.value);
    };
    render() {
        console.log("====================================");
        console.log(this.props.product);
        console.log("====================================");
        return (
            <div className="radio-toolbar" onChange={this.changeHandler}>
                {this.state.size.map((x) => {
                    return (
                        <React.Fragment key={x.value}>
                            <input type="radio" id="radioApple" name="radioFruit" value={x} />
                            <label for="radioApple">{x}</label>
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        selectSize: (size) => dispatch(selectSize(size)),
    };
};

export default connect(null, mapDispatchToProp)(Selector);
