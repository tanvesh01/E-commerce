import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav"
import Modal from "../../components/Modal/Modal"
class Products extends Component {
    state = {
        showModal: true
    }

    modalHandler = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    // componentDidMount() {
    //     this.props.loadUser();
    // }
    render() {
        console.log(this.props.shoes);
        return (
            <React.Fragment>
                <Modal
                    show={this.state.showModal} modalHandler={this.modalHandler} />
                <Nav />
            </React.Fragment>)
    }
}
export default Products;