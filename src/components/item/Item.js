import React, { Component } from 'react';
import "./Item.css";

class Item extends Component {
    render() {
        return (
            <section className="item">
                <img src={this.props.imageSrc} alt={this.props.alt}></img>
                <p>{this.props.name}</p>
                <p className="price">{this.props.price}€</p>
                <button onClick={() => this.props.deleteItem(this.props.id)}>Delete me</button>
            </section>
        );
    }
}

export default Item;
