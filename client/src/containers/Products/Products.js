import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Modal from "../../components/Modal/Modal";
import AuthModal from "../Register/AuthModal";
import { connect } from "react-redux";
import { toggleAuthModal, toggleCart } from "../../store/actions/orderActions";

class Products extends Component {
    modalHandler = () => {
        this.props.toggleCart();
    };
    authModalHandler = () => {
        this.props.toggleAuthModal();
    };
    // componentDidMount() {
    //     this.props.loadUser();
    // }
    render() {
        return (
            <div style={{ height: "100%", width: "100%", display: "block" }}>
                <div style={{ height: "100%", width: "100%", display: "block" }}>
                    <Nav />
                </div>
                <AuthModal
                    show={this.props.showAuthModal}
                    authModalHandler={this.authModalHandler}
                />
                <Modal show={this.props.show} modalHandler={this.modalHandler} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.orders.showCart,
        showAuthModal: state.orders.showAuthModal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(toggleCart()),
        toggleAuthModal: () => dispatch(toggleAuthModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
