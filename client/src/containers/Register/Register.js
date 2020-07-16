import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import { useHistory } from "react-router";
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
    componentDidMount() {
        //const history = useHistory();
        if (this.props.isAuth) {
            this.props.history.push("/products");
            this.props.history.go();
            // authRedirect = <Redirect to="/products" />;
        }
    }
    render() {
        console.log(this.props);
        let authRedirect = null;
        return (
            <React.Fragment>
                <Grid container spacing={0} style={{ backgroundColor: "grey", height: "100%" }}>
                    <Grid
                        item
                        style={{
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center`",
                        }}
                        xs={6}
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
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
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
