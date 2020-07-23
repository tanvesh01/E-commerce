import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../../store/actions/authActions";
import Alert from "../../components/Alerts/Alert";

class Register extends Component {
    state = {
        msg: null,
    };
    componentDidUpdate(prevProps) {
        const error = this.props.error;
        if (error !== prevProps.error) {
            if (error.id === "REGISTER_FAIL") {
                this.setState({
                    msg: error.msg.msg,
                });
            } else if (error.id === "LOGIN_FAIL") {
                this.setState({
                    msg: error.msg.msg,
                });
            } else {
                this.setState({
                    msg: null,
                });
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center`",
                    }}
                >
                    <div>
                        <h1>Form!</h1>
                        {this.state.msg != null ? <Alert msg={this.state.msg} /> : null}
                        {this.props.isLogin && !this.props.isAuth ? (
                            <LoginForm isAuth={this.props.isAuth} />
                        ) : (
                            <RegisterForm isAuth={this.props.isAuth} />
                        )}
                        <Button onClick={() => this.props.changeMode()}>
                            {this.props.isLogin ? "Are you a new user? " : "Already a user?"}
                        </Button>
                        <Button component={Link} to="/products">
                            go back
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        isLogin: state.auth.isLogin,
        isAuth: state.auth.isAuth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeMode: () => {
            dispatch(actions.changeAuthMode());
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
