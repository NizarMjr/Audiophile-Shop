import { Types } from "./Types";

const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const globalQuantity = localStorage.getItem('quantity') ? parseInt(localStorage.getItem('quantity')) : 0;

export const reducerAddToCart = (state = cart, { type, payload, quantity }) => {
    const obj = {
        data: payload,
        quantity: quantity,
    }
    var add = true;
    switch (type) {
        case Types.ADD_TO_CART: {
            state.map((ele) => {
                if (ele.data === obj.data) {
                    add = false;
                    ele.quantity += obj.quantity;
                }
                return ele;
            })
            if (add)
                state.push(obj);
            localStorage.setItem('cart', JSON.stringify(state))
            return state;
        }
        case Types.RESTART_SHOP: {
            state.length = 0;
            localStorage.removeItem('cart');
            return state;
        }
        case Types.UPDATE_CART: {
            state = payload;
            localStorage.setItem('cart', JSON.stringify(state))
            return state;
        }
        default: return state;
    }
}
export const reducerGlobalQuantity = (state = globalQuantity, { type, payload }) => {
    switch (type) {
        case Types.GLOBAL_QUANTITY: {
            state += payload;
            localStorage.setItem('quantity', state);
            return state;
        }
        case Types.RESTART_QUANTITY: {
            state = 0;
            localStorage.setItem('quantity', state);
            return state;
        }
        case Types.UPDATE_GLOBAL_QUANTITY: {
            state = payload;
            localStorage.setItem('quantity', state);
            return state;
        }
        default: return state;
    }
}
export const reducerEraseElement = (state = cart, { type, payload }) => {
    const filtred = [];
    switch (type) {
        case Types.ERASE_ELEMENT: {
            filtred = state.filter((ele) => {
                return ele.id == !payload;
            })
            state = filtred;
            localStorage.setItem('cart', state);
            return state;
        }
        default: return state;
    }
}