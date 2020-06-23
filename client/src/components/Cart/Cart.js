import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/orderActions"
class Cart extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.data ? this.props.data.map(function (x) {
                        return <li> {x.name} </li>
                    }) : <p>EMPTY....</p>
                }
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (id) => dispatch(actions.deleteFromCart(id))
    }
}

// wish
export default connect(null, mapDispatchToProps)(Cart);