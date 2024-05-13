import Axios1 from '../plugins/axios'
export default {
    async ListProduct() {
        try {
            const result = await Axios1.get("products")
            return result;
        } catch (error) {
        }
    },
    async ListProduct2({ }, id) {
        try {
            const result = await Axios1.get(`products/${id}`)
            return result;
        } catch (error) {
        }
    },
    async ListProduct3({ commit }, data) {
        commit("SET_CART", data)

    },
    SetUser({ commit }, userData) {
        commit("SET_USER", userData)
    },
    isLogin({ },userJSON) {
        localStorage.setItem('user', userJSON);
    }
};