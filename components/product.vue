<script lang="ts" setup>
import productOne from "@/assets/img/product-chips-1.png";
import productTwo from "@/assets/img/product-chips-2.png";
import productThree from "@/assets/img/product-chips-3.png";
import productFour from "@/assets/img/product-chips-4.png";
import productFive from "@/assets/img/product-chips-5.png";

// Array of products
const products = [
  { image: productOne, subtitle: "Crab", title: "Chips", price: "$8" },
  { image: productTwo, subtitle: "Cheese", title: "Chips", price: "$5" },
  { image: productThree, subtitle: "BBQ", title: "Chips", price: "$6" },
  { image: productFour, subtitle: "Hot", title: "Chips", price: "$5" },
  {
    image: productFive,
    subtitle: "Mix",
    title: "Chips",
    price: "$10",
  },
];

import crabImage from "@/assets/img/crab.png";
import hamburgerImage from "@/assets/img/hamburger.png";
import cheeseImage from "@/assets/img/cheese.png";
const additionalImages = [
  { src: crabImage, alt: "image", class: "products__crab" },
  { src: hamburgerImage, alt: "image", class: "products__hamburger" },
  { src: cheeseImage, alt: "image", class: "products__cheese" },
];
</script>

<template>
  <section class="products section" id="products">
    <h2 class="section__title">
      BEST SELLING <br />
      PRODUCT
    </h2>

    <div class="products__container container">
      <div class="products__content grid">
        <article
          v-for="(product, index) in products"
          :key="index"
          class="products__card"
        >
          <img :src="product.image" alt="image" class="products__img" />
          <span class="products__subtitle">{{ product.subtitle }}</span>
          <h2 class="products__title">{{ product.title }}</h2>
          <span class="products__price">{{ product.price }}</span>
          <button class="products__button">
            <i class="ri-shopping-bag-3-line"></i>
          </button>
        </article>
      </div>

      <img
        v-for="(image, index) in additionalImages"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :class="image.class"
      />
    </div>
  </section>
</template>

<style></style>
