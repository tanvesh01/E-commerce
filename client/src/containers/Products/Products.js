import React, { Component } from 'react';
import { connect } from "react-redux";
import Nav from "../../components/Nav/Nav"
import Item from "../../components/Item/Item"
import * as actions from "../../store/actions/categoryActions";

class Products extends Component {
    componentDidMount() {
        this.props.getShoes();
    }

    render() {
        console.log(this.props.shoes);
        return (
            <React.Fragment>
                <Nav>
                    <div>
                        {
                            this.props.shoes ?
                                this.props.shoes.map(x => (
                                    <div key={x._id}>
                                        {x.name}
                                    </div>
                                ))
                                :
                                <p>loading!!!!!!!!</p>
                        }
                    </div>
                    <Item />
                </Nav>
            </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        shoes: state.category.shoes,
        loading: state.category.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShoes: () => dispatch(actions.getShoes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);