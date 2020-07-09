import React, { Component } from 'react'

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "price": 0
        };
    }

    //When component is updated and if there is newPrice add (or substract) it
    //to the total price (this.state.price)
    async componentDidUpdate() {
        if (this.props.isNewPrice) {
            let price = await this.props.getPrice();
            this.setState({ ...this.state, price: this.state.price + price})
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.price}€</p>    
            </div>
        )
    }
}

export default Price
