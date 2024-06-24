<template>
  <div class="container mt-5">
    <div v-if="product" class="row">
      <div class="col-md-6">
        <img :src="'/src/assets/images/' + product.image" alt="Product Image" class="img-fluid mb-3">
      </div>
      <div class="col-md-6">
        <h1>{{ product.productName }}</h1>
        <p><strong>Description:</strong> {{ product.description }}</p>
        <p><strong>Price:</strong> ${{ product.price.toFixed(2) }}</p>
        <button class="btn btn-success" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();

onMounted(async () => {
  await store.dispatch('fetchProductById', route.params.id);
});

const product = computed(() => store.getters.selectedProduct);

function addToCart(product) {
  store.dispatch('addToCart', product);
}
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.mt-5 {
  margin-top: 3rem;
}
.mb-3 {
  margin-bottom: 1rem;
}
.text-center {
  text-align: center;
}
.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}
</style>
