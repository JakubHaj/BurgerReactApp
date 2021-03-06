import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {  
    render() {
        const  ingredientSummary = Object.keys(this.props.ingredients)
                    .map( (igKey) => {
                    return (
                        <li key={igKey}>
                            <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                            : {this.props.ingredients[igKey]}
                        </li>)
                    });
        
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A burger with:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.fullPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button clicked={this.props.purchaseCancelled} btnType='Danger'>
                    CANCEL
                </Button>
                <Button clicked={this.props.purchaseContinue} btnType='Success'>
                    CONTINUE
                </Button>
            </Auxiliary>
        );
    };
};

export default OrderSummary;