<template>
  <div class="container mt-5">
    <h1>Your Cart</h1>
    <div v-if="cartItems.length === 0" class="text-center">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>{{ item.productName }}</td>
            <td>
              <input type="number" v-model="item.quantity" @change="updateQuantity(item)" min="1" class="form-control" />
            </td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button @click="removeFromCart(item.id)" class="btn btn-danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right">
        <h3>Total: ${{ totalAmount.toFixed(2) }}</h3>
        <button @click="checkout" class="btn btn-success">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = computed(() => store.state.cart);

const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

function updateQuantity(item) {
  store.dispatch('updateCartItem', item);
}

function removeFromCart(itemId) {
  store.dispatch('removeFromCart', itemId);
}

function checkout() {
  store.dispatch('checkout');
}
</script>

<style scoped>
.table {
  margin-top: 20px;
}
.text-right {
  text-align: right;
}
</style>
