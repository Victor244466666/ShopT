import  { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state:{
        products: [],
        selectedProduct: [],

    },
    getters: {
        totalProducts(state) {
            return state.products.length;
        },
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_SELECTED_PRODUCT(state, product) {
            state.selectedProduct = product;
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            const response = await axios.get('http://localhost/Product/getproductapi.php')
                commit('SET_PRODUCTS', response.data);
        },
        async fetchProductsById({ commit },  id) {
            const response = await axios.get(`http://localhost/EMPLOYEESDATA/apiGet.php?id=${id}`)
                commit('SET_SELECTED_EMPLOYEES', response.data);
    },
}
});