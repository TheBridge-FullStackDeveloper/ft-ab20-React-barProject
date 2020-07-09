import React, { Component } from 'react';
import {items} from "../../json/elements.json";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": ""
        }
    }
    
    //When submitting the form call main's setItem function to add newItem
    //to itemList
    async submitElement(e) {
        e.preventDefault();
        if (this.state.value !== "") {
            await this.props.setItem(this.state.value);
            await this.props.setPrice(items.find(el => el.id == this.state.value).price);
        }
    }

    //Print the item options
    printItemsOptions() {
        let elements = items.map((el, id) => <option key={el.id} value={el.id}>{el.name}</option>);
        elements.unshift(<option key={""} value="">-- Seleccione una opción --</option>)
        return elements;
    }

    handleChange(e) {
        this.setState({...this.state, "value": e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.submitElement.bind(this)}>
                <select value={this.state.value} onChange={this.handleChange.bind(this)}>
                    {this.printItemsOptions()}
                </select>
                <button>Add</button>
            </form>
        );
    }
}

export default Form
 