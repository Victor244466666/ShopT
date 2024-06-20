<template>
  <div class="container">
          <div class=" d-flex align-items-center alert alert-primary">
            <Header class="display-4 " title="Products" description="Discover your favorite electronic products at amazing price shop with us on ShopT"/>
            <img src="../assets/images/samsung.jpg" alt="">
          </div>
          
       
          <div class="row">
            <div class="row image-container mt-5">
              <div class="card col-md-3 mb-3" style="width: 18rem;">
                <img src="../assets/images/phone.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card card col-md-3 mb-3" style="width: 18rem;">
                <img src="../assets/images/Gaming_laptop-1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card card col-md-3 mb-3" style="width: 18rem;">
                <img src="../assets/images/itel phone.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

               <div class="card" style="width: 18rem;">
              <img src="../assets/images/itel phone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

            <!-- <div class="col-md-3">
              <div class="card" style="width: 18rem;">
                <img src="../assets/images/Gaming_laptop-1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <table>
                    <tr>
                      <th>{{ productName }}</th>
                      <th>{{ price }}</th>
                      <th>{{ dateTime }}</th>
                      <a href="http://localhost/Product/postproductapi.php" class="btn btn-primary">buy</a>
                    </tr>
                  </table>
                </div>
              </div>
            </div> -->
            
           

          <div class="card" style="width: 18rem;">
            <img src="../assets/images/itel phone.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

            <div class="card" style="width: 18rem;">
              <img src="../assets/images/itel phone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card" style="width: 18rem;">
              <img src="../assets/images/itel phone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card" style="width: 18rem;">
              <img src="../assets/images/itel phone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card" style="width: 18rem;">
              <img src="../assets/images/itel phone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted( async () => {
    await store.dispatch('fetchproducts');
});

 const totalproducts = computed(() => store.getters.totalproducts);
 
</script>
