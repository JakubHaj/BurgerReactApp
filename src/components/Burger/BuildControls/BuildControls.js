import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}


]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                removeIngredientHandler={() => props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />))}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}
            >{ props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
        </div>
    );
};

export default buildControls;