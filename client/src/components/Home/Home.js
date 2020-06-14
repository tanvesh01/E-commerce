import React, { Component } from 'react';
import "./Home.css"
var classNames = require("classnames");


class Home extends Component {
    state = {
        fashionOpen: false,
        shoesOpen: false,
        aceesOpen: false,
        ElectronicsOpen: false
    }
    toggleFashionOpen = () => {
        this.setState({
            fashionOpen: !this.state.fashionOpen
        })
    }
    toggleShoesOpen = () => {
        this.setState({
            shoesOpen: !this.state.shoesOpen
        })
    }
    toggleAceesOpen = () => {
        this.setState({
            aceesOpen: !this.state.aceesOpen
        })
    }
    toggleElectronicsOpen = () => {
        this.setState({
            ElectronicsOpen: !this.state.ElectronicsOpen
        })
    }
    render() {
        return (
            <div className="table">
                <div
                    className={classNames("table__cell", { "active": this.state.fashionOpen })}
                    onMouseEnter={this.toggleFashionOpen}
                    onMouseLeave={this.toggleFashionOpen}>
                    <span>A</span>
                </div>
                <div
                    className={classNames("table__cell", { "active": this.state.shoesOpen })}
                    onMouseEnter={this.toggleShoesOpen}
                    onMouseLeave={this.toggleShoesOpen}>
                    <span>B</span>
                </div>
                <div
                    className={classNames("table__cell", { "active": this.state.aceesOpen })}
                    onMouseEnter={this.toggleAceesOpen}
                    onMouseLeave={this.toggleAceesOpen}>
                    <span>C</span>
                </div>
                <div
                    className={classNames("table__cell", { "active": this.state.ElectronicsOpen })}
                    onMouseEnter={this.toggleElectronicsOpen}
                    onMouseLeave={this.toggleElectronicsOpen}>
                    <span>D</span>
                </div>
            </div>
        )
    }
}

export default Home;