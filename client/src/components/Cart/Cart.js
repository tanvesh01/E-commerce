import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/orderActions"
class Cart extends Component {

    deleteItem = (id) => {
        this.props.deleteFromCart(id);
    }

    render() {
        console.log(this.props.data);

        return (
            <ul>
                {
                    this.props.data.map(function (x) {
                        console.log(this);

                        return <li> {x.data.name}
                            <button
                                onClick={() => this.props.deleteFromCart(x.data._id)} >
                                delete
                            </button>
                        </li>
                    }, this)
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

export default connect(null, mapDispatchToProps)(Cart);