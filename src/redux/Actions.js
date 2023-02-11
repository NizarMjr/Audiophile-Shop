import { type } from "@testing-library/user-event/dist/type";
import { Types } from "./Types";

export const add_To_Cart = (data, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        payload: data,
        quantity: quantity,
    }
}
export const globalQuantity = (data) => {
    return {
        type: data === 0 ? Types.RESTART_QUANTITY : Types.GLOBAL_QUANTITY,
        payload: data,
    }
}
export const restartShop = () => {
    return {
        type: Types.RESTART_SHOP,
    }
}
export const updateCart = (data) => {
    return {
        type: Types.UPDATE_CART,
        payload: data,
    }
}
export const updateGlobalQuantity = (data) => {
    return {
        type: Types.UPDATE_GLOBAL_QUANTITY,
        payload: data,
    }
}
export const eraseElement = (id) => {
    return {
        type: Types.ERASE_ELEMENT,
        payload: id,
    }
}