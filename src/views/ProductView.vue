<template>
  <div class="container mt-5 mb-5">
    <h1 class="mb-4 text-center">Our Products</h1>
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-else>
      <div v-if="products.length > 0">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="product in products" :key="product.id">
            <ProductCard :product="product" @view-product="viewProduct"/>
          </div>
        </div>
      </div>
      <div v-else class="text-center">No products found</div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const isLoading = ref(true);

onMounted(async () => {
  await store.dispatch('fetchProducts');
  isLoading.value = false;
});

const products = computed(() => store.getters.products);

function viewProduct(product) {
  router.push({ name: 'productDetails', params: { id: product.id } });
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
