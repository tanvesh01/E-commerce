import React, { Component } from "react";
import "./style.css";
class Selector extends Component {
    state = {
        size: [1, 2, 3, 4],
    };
    changeHandler = (event) => {
        console.log(event.target.value);
    };
    render() {
        console.log("====================================");
        console.log(this.props.prod);
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

export default Selector;
