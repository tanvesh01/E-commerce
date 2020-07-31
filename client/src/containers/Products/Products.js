import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Modal from "../../components/Modal/Modal";
import AuthModal from "../Register/AuthModal";
import { connect } from "react-redux";
import { getItem } from "../../store/actions/products";
import { toggleCart } from "../../store/actions/orderActions";
import { toggleAuthModal, loadUser } from "../../store/actions/authActions";
class Products extends Component {
    modalHandler = () => {
        this.props.toggleCart();
    };
    authModalHandler = () => {
        this.props.toggleAuthModal();
    };
    componentDidMount() {
        //this.props.getItem("shoe");
        this.props.loadUser();
    }
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
        loadUser: () => dispatch(loadUser()),
        getItem: (item) => dispatch(getItem(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
