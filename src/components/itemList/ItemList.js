import React, { Component } from 'react';
import Item from "../item/Item.js";
import {items} from "../../json/elements.json";

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    deleteItem(id) {
        this.props.setPrice(-this.state.items[id].price);
        this.setState({ ...this.state, items: this.state.items.filter((el, elId) => elId !== id) });
    }

    //Generate the selected items based on this.state.items (selected items)
    printSelectedItems() {
        return this.state.items.map((el, id) => <Item deleteItem={this.deleteItem.bind(this)} id={id} key={id} name={el.name} price={el.price} imageSrc={el.img} alt={el.alt} />)
    }

    //When the element is updated and the parent have a newItem
    //Ask for it a push it to this.state.items
    async componentDidUpdate() {
        if (this.props.isNewItem) {
            let id = await this.props.getItem();
            this.setState({ ...this.state, items: [...this.state.items, items.find(el => el.id == id)]})
        }
    }

    render() {
        return (
            <section>
                {this.printSelectedItems()}
            </section>
        );
    }
}

export default ItemList;