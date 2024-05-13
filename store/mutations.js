
export default {
    SET_CART(state, item) {
        const record = state.cart.find(element => element.id == item.id);

        if (record) {
            record.quantity += item.quantity
        }
        else {
            state.cart.push(item)
        }
        state.quantity = state.cart.length
    },
    SET_USER(state, userData) {
        console.log("userData", userData);
        state.user = { ...userData }
    }
}
