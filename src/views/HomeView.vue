<template>
<div class="container">
        <div class="row mt-5 mb-4">
            <div class=" d-flex align-items-center alert alert-primary">
                <Header class="display-4 " title="Home" description="Discover your favorite products at amazing price"/>
                <img src="../assets/images/samsung.jpg" alt="Image">
            </div>
            <div class="d-flex justify-content-end" >
                <RouterLink to="/product" class="btn btn-primary">Shop Now</RouterLink>
            </div>
        </div>
    <h1>Featured Products</h1>
    <div class="row">
        <div class="col-md-3"> <!-- first colume of first row -->
                <div class="card" style="width: 18rem;">
        <img src="../assets/images/earpord.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"></p>
            <a href="" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
        <div class="col-md-3"> <!-- second colume of first row -->
                <div class="card" style="width: 18rem;">
        <img src="../assets/images/samsung.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
<div class="col-md-3"> <!-- third colume of first row -->
                <div class="card" style="width: 18rem;">
        <img src="../assets/images/bag.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
        <div class="col-md-3"> <!-- fourth colume of first row -->
                <div class="card" style="width: 18rem;">
        <img src="../assets/images/note-phones_260x144.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    </div>
    
</div>
pkj
</template>
<script setup>
import Header from '@/components/Header.vue'
</script>
