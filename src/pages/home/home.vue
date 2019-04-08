<template>
  <div class="d-flex flex-column h-100">
    <navbar-component />

    <div class="content d-flex flex-column h-100 m-t-80 m-b-8">
      <h1>
        Featured Collection
      </h1>
      <carousel-component />
    </div>

    <footer-component />
  </div>
</template>

<script>
import NavbarComponent   from './components/navbar/navbar.vue';
import CarouselComponent from './components/carousel/carousel.vue';
import FooterComponent   from './components/footer/footer.vue';

export default {
  components: {
    NavbarComponent,
    CarouselComponent,
    FooterComponent
  }
};
</script>
