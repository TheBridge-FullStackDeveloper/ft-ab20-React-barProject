import React, {Component} from "react";
import ItemList from "../itemList/ItemList.js";
import Form from "../form/Form.js";
import Price from "../price/Price.js";
import "./visualizer.css";

class Visualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": undefined,
            "price": undefined
        }
    }

    //getter that returns the itemID and delete it from the state
    getItem() {
        
        let items = this.state.items;
        this.setState({...this.state, "items": undefined});
        return items;
    }

    //getter that returns the itemID and delete it from the state
    getPrice() {
        let price = this.state.price;
        this.setState({...this.state, "price": undefined});
        return price;
    }

    async setItem(itemId) {
        //I do this on 2 different setState because I need the getters 
        //to be called at different times (if not I will get duplicated items)
        await this.setState({ ...this.state, "items": itemId});
    }

    async setPrice(price) {
        await this.setState({ ...this.state, "price": price });
    }
    
    render() {
        return (
            <div className="visualizer">
                <Form setItem={this.setItem.bind(this)} setPrice={this.setPrice.bind(this)}/>
                <ItemList setPrice={this.setPrice.bind(this)} getItem={this.getItem.bind(this)} isNewItem={this.state.items !== undefined}/>
                <Price getPrice={this.getPrice.bind(this)} isNewPrice={this.state.price !== undefined}/>
            </div>
        );
    } 
}

export default Visualizer;