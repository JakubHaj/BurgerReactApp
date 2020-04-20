import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

const setIngredient = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

const initIngredients = () => {
    return dispatch => {
        axios.get('https://burgerapp-3d824.firebaseio.com/ingredients.json').then((res) => {
            dispatch(setIngredient(res.data));
        }).catch((er) => {
            dispatch(fetchIngredientsFailed());
        });
    }
}

export {addIngredient, removeIngredient, initIngredients }