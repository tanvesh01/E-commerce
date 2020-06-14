import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/authActions";
class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: ''
    }

    componentDidUpdate(prevProps) {
        const error = this.props.error;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({
                    msg: error.msg.msg
                })
            }
            else {
                this.setState({
                    msg: null
                })
            }
        }
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
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(newUser);
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
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
                    <input type="submit" value="Login!" />
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
        login: (user) => dispatch(actions.login(user)),
        logOut: () => dispatch(actions.logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
