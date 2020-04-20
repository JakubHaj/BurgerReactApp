import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData).then((res) => {
            dispatch(purchaseBurgerSuccess(res.data.name, orderData))
        }).catch((er) => {
            dispatch(purchaseBurgerFail(er))
        })
    };
};

const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    }
}

const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    }
}

const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}

const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart);
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        axios.get('https://burgerapp-3d824.firebaseio.com/orders.json' + queryParams).then((res) => {
            const fetchOrders = [];
            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                });
            };
            dispatch(fetchOrdersSuccess(fetchOrders))
        }).catch(er => {
            dispatch(fetchOrdersFail(er))
        });
    }
}

export { purchaseBurger, purchaseInit, fetchOrders }