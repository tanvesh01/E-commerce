import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/orderActions"
class Cart extends Component {

    deleteItem = (id) => {
        this.props.deleteFromCart(id);
    }
    submit = () => {
        let ids = [];
        for (let i = 0; i < this.props.cart.length; i++) {
            ids.push(this.props.cart[i].data._id);
        }
        this.props.submitOrder({
            products: ids,
            name: "tanvesh",
            phone: "98765",
            address: "996",
            pin: 1234,
            email: "sarve@gmail.com"
        });
    }
    render() {
        console.log(this.props.cart);
        return (
            <div>
                <ul>
                    {
                        this.props.data.map(function (x) {
                            return <li key={x.data._id}> {x.data.name}
                                <button
                                    onClick={() => this.props.deleteFromCart(x.data._id)} >
                                    delete
                            </button>
                            </li>
                        }, this)
                    }
                </ul>
                <button
                    onClick={() => this.submit()} >
                    Submit
                    </button>
                <button onClick={() => this.props.toggleCart()} > Open Cart</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.orders.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (id) => dispatch(actions.deleteFromCart(id)),
        submitOrder: (item) => dispatch(actions.submitOrder(item)),
        toggleCart: () => dispatch(actions.toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);