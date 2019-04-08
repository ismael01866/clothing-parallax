<template>
  <div
    id="carousel"
    class="carousel slide"
    data-ride="carousel"
    data-pause="false"
    data-interval="3000"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="slide-bg bg-polar" />
        <div class="shape bg-polar-dk" />
        <span class="title">
          Sporting
          <br>&nbsp; &nbsp;Yellow Set
        </span>
        <img
          src="static/img/png/img-1.png"
          alt=""
        >
      </div>
      <div class="carousel-item">
        <div class="slide-bg bg-vanilla-ice" />
        <div class="shape bg-vanilla-ice-dk" />
        <span class="title">
          Lady
          <br>&nbsp; &nbsp;In Pink
        </span>
        <img
          src="static/img/png/img-2.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<style>
  @import '@scss/mixins/_common.scss';
  @import './carousel.scss';
</style>
