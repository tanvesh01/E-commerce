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
                    style={{
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url(" https://images.unsplash.com/photo-1505734169265-a86113baa6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")'
                    }}
                    className={classNames("table__cell", { "active": this.state.fashionOpen })}
                    onMouseEnter={this.toggleFashionOpen}
                    onMouseLeave={this.toggleFashionOpen}
                >
                    <span><h1>A</h1></span>
                </div>
                <div
                    style={{
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url(" https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80")'
                    }}
                    className={classNames("table__cell", { "active": this.state.shoesOpen })}
                    onMouseEnter={this.toggleShoesOpen}
                    onMouseLeave={this.toggleShoesOpen}>
                    <span><h1>B</h1></span>
                </div>
                <div
                    style={{
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url(" https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")'
                    }}
                    className={classNames("table__cell", { "active": this.state.aceesOpen })}
                    onMouseEnter={this.toggleAceesOpen}
                    onMouseLeave={this.toggleAceesOpen}>
                    <span><h1>C</h1></span>
                </div>
                <div
                    style={{

                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url(" https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80")'
                    }}
                    className={classNames("table__cell", { "active": this.state.ElectronicsOpen })}
                    onMouseEnter={this.toggleElectronicsOpen}
                    onMouseLeave={this.toggleElectronicsOpen}>
                    <span><h1>D</h1></span>
                </div>
            </div>
        )
    }
}

export default Home;
/* onMouseEnter={this.toggleFashionOpen}
                    onMouseLeave={this.toggleFashionOpen} */