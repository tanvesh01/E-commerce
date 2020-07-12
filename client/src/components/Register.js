import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/authActions";
class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        msg: ''
    }



    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        }
        this.props.register(newUser);
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        placeholder="name"
                        type="text"
                        value={this.state.name}
                        onChange={(e) => this.handleChangeName(e, "name")} />
                    <input
                        placeholder="email"
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.handleChangeEmail(e)} />
                    <input
                        placeholder="password"
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.handleChangePassword(e)} />
                    <input type="submit" value="Register" />
                </form>
                {this.state.msg ? <p>{this.state.msg}</p> : null}
                <div style={{ height: "20px", width: "100px" }}></div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(actions.register(newUser)),
        logOut: () => dispatch(actions.logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
