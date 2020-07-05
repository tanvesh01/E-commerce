import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav"
import Modal from "../../components/Modal/Modal"
import { connect } from "react-redux"
import * as actions from "../../store/actions/orderActions"

class Products extends Component {
    modalHandler = () => {
        this.props.toggleCart();
    }
    // componentDidMount() {
    //     this.props.loadUser();
    // }
    render() {
        return (
            <React.Fragment>
                <Modal
                    show={this.props.show} modalHandler={this.modalHandler} />
                <Nav />
            </React.Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.orders.showCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(actions.toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);