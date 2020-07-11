import React from 'react';
import Home from "./components/Home/Home";
import Products from "./containers/Products/Products";
import Register from "./containers/Register/Register";
import { Switch, Route, useLocation } from "react-router-dom"
import { connect } from "react-redux";
import { AnimatePresence } from "framer-motion"
import * as actions from "./store/actions/authActions";
import './App.css';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Selected from "./containers/Selected/Selected"

//let width = window.innerWidth;
function App(props) {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <div style={{
        height: "100%"
      }}>

        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname}>
            <Route path="/products" component={Products} />
            <Route path="/register" component={Register} />
            <Route path="/select" component={Selected} />
            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )

}
//backdrop filter-css \\ half pattern and half blur
const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(actions.loadUser()),
    logOut: () => dispatch(actions.logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*{/*
import Items from "./components/list";
import Register from "./components/Register";
import Login from "./components/Login";
<Items />
        {this.props.isAuth ? <button style={{
          backgroundColor: "red",
          border: "3px solid black",
          color: "white",
          borderRadius: "5px"
        }} onClick={this.props.logOut}>LOGOUT</button> : <React.Fragment>
            <Register />
            <Login />
          </React.Fragment>} */