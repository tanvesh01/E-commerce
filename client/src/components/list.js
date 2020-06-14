import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/Items";
class Items extends Component {
    state = {
        inputValue: { name: "" }
    }

    componentDidMount() {
        this.props.getItems();
    }

    handleChange = (e) => {
        this.setState({
            inputValue: { name: e.target.value }
        })
    }
    handleSubmit = (e) => {
        const obj = { name: this.state.inputValue.name }
        this.props.onItemAdd(obj);
        this.setState(
            {
                inputValue: { name: "" }
            }
        )
        e.preventDefault();
    }
    deleteItem = (_id) => {
        this.props.deleteItems(_id);
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.props.items.map(x => (
                            <div style={{ margin: "1rem" }}>
                                <p >{x.name} </p>
                                <button
                                    style={{
                                        backgroundColor: "red",
                                        border: "3px solid black",
                                        color: "white",
                                        borderRadius: "5px"
                                    }}
                                    onClick={() => this.deleteItem(x._id)} >delete</button>
                            </div>


                        ))
                    }
                </div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        value={this.state.inputValue.name}
                        onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemAdd: (item) => dispatch(actions.addItem(item)),
        getItems: () => dispatch(actions.getItems()),
        deleteItems: (_id) => dispatch(actions.deleteItems(_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);