import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/orderActions"
class Cart extends Component {

    deleteItem = (id) => {
        this.props.deleteFromCart(id);
    }

    render() {
        return (
            <div>
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
                <button
                    onClick={() => this.props.submitOrder({
                        name: "tanvesh",
                        phone: "98765",
                        address: "996",
                        pin: 1234,
                        email: "sarve@gmail.com"

                    })} >Submit</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (id) => dispatch(actions.deleteFromCart(id)),
        submitOrder: (item) => dispatch(actions.submitOrder(item))
    }
}

export default connect(null, mapDispatchToProps)(Cart);