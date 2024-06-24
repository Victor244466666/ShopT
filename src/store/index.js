// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    selectedProduct: null
  },
  getters: {
    products: state => state.products,
    selectedProduct: state => state.selectedProduct
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch('https://alvahtek.com/projects/ota/group2/getproductapi.php');
      const data = await response.json();
      commit('setProducts', data);
    },
    async fetchProductById({ commit }, id) {
      const response = await fetch(`https://alvahtek.com/projects/ota/group2/getproductapi.php=${id}`);
      const data = await response.json();
      commit('setSelectedProduct', data);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    }
  }
});
