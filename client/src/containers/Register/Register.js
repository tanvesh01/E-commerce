import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import RegisterForm from "../../components/Auth/RegisterForm"
import LoginForm from "../../components/Auth/LoginForm"
import { Button } from "@material-ui/core"
import { connect } from "react-redux"
import * as actions from "../../store/actions/authActions"
import Alert from "../../components/Alerts/Alert";

class Register extends Component {
    state = {
        msg: null
    }
    componentDidUpdate(prevProps) {
        const error = this.props.error;
        if (error !== prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({
                    msg: error.msg.msg
                })
            }
            else if (error.id === 'LOGIN_FAIL') {
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

    render() {
        console.log(this.state.msg);
        return (
            <Grid container spacing={0} style={{ backgroundColor: "grey", height: "100%" }} >

                <Grid item style={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center`"
                }} xs={6} >
                    <div>
                        <h1>Form!</h1>
                        {this.state.msg != null ? <Alert msg={this.state.msg} /> : null}
                        {this.props.isLogin ? <LoginForm /> : <RegisterForm />}
                        <Button onClick={() => this.props.changeMode()} >
                            {this.props.isLogin ? "Are you a new user? " : "Already a user?"}
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isLogin: state.auth.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMode: () => { dispatch(actions.changeAuthMode()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);