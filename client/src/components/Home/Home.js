import React, { Component } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { connect } from "react-redux";
import { getItem } from "../../store/actions/products";
var classNames = require("classnames");
class Home extends Component {
    state = {
        fashionOpen: false,
        shoesOpen: false,
        aceesOpen: false,
        ElectronicsOpen: false,
    };
    nav = (id) => {
        this.props.getItem(id);
        this.props.history.push("/products");
    };
    toggleFashionOpen = () => {
        this.setState({
            fashionOpen: !this.state.fashionOpen,
        });
    };
    toggleShoesOpen = () => {
        this.setState({
            shoesOpen: !this.state.shoesOpen,
        });
    };
    toggleAceesOpen = () => {
        this.setState({
            aceesOpen: !this.state.aceesOpen,
        });
    };
    toggleElectronicsOpen = () => {
        this.setState({
            ElectronicsOpen: !this.state.ElectronicsOpen,
        });
    };

    render() {
        const home = {
            initial: {
                opacity: 0,
            },
            animate: {
                opacity: 1,
                transition: {
                    duration: 3,
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 1,
                },
            },
        };
        console.log(this.context);
        return (
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={home}
                className="table"
            >
                <div
                    style={{
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                            'url(" https://images.unsplash.com/photo-1505734169265-a86113baa6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")',
                    }}
                    className={classNames("table__cell", { active: this.state.fashionOpen })}
                    onMouseEnter={this.toggleFashionOpen}
                    onMouseLeave={this.toggleFashionOpen}
                >
                    <span
                        style={{
                            transform: "rotate(90deg)",
                            color: "#01c0db78",
                            fontSize: "2.875rem",
                            marginBottom: "16rem",
                        }}
                    >
                        <h1>CLOTHING</h1>
                    </span>
                </div>

                <div
                    style={{
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                            'url(" https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80")',
                    }}
                    className={classNames("table__cell", { active: this.state.shoesOpen })}
                    onMouseEnter={this.toggleShoesOpen}
                    onMouseLeave={this.toggleShoesOpen}
                    onClick={() => this.nav("shoe")}
                >
                    <span
                        style={{
                            transform: "rotate(90deg)",
                            color: "#cacdcc99",
                            fontSize: "2.875rem",
                            marginBottom: "16rem",
                        }}
                    >
                        <h1>FOOTWEAR</h1>
                    </span>
                </div>

                <div
                    style={{
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                            'url(" https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")',
                    }}
                    className={classNames("table__cell", { active: this.state.aceesOpen })}
                    onMouseEnter={this.toggleAceesOpen}
                    onMouseLeave={this.toggleAceesOpen}
                    onClick={() => this.nav("shoe")}
                >
                    <span
                        style={{
                            transform: "rotate(90deg)",
                            color: "#d8e1eca1",
                            fontSize: "2.875rem",
                            marginBottom: "16rem",
                        }}
                    >
                        <h1>PHONES</h1>
                    </span>
                </div>
                <div
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                            'url(" https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80")',
                    }}
                    className={classNames("table__cell", { active: this.state.ElectronicsOpen })}
                    onMouseEnter={this.toggleElectronicsOpen}
                    onMouseLeave={this.toggleElectronicsOpen}
                >
                    <span
                        style={{
                            transform: "rotate(90deg)",
                            color: "#dad8b58a",
                            fontSize: "2.875rem",
                            marginBottom: "16rem",
                        }}
                    >
                        <h1>ACCESSORIES</h1>
                    </span>
                </div>
            </motion.div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItem: (id) => dispatch(getItem(id)),
    };
};

export default connect(null, mapDispatchToProps)(Home);
