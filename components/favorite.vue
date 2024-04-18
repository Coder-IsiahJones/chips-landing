<script lang="ts" setup>
import cheeseImage from "@/assets/img/cheese.png";
import favoriteChips1Image from "@/assets/img/favorite-chips-1.png";
import favoriteChips2Image from "@/assets/img/favorite-chips-2.png";
import favoriteChips3Image from "@/assets/img/favorite-chips-3.png";
import leaf1Image from "@/assets/img/leaf-1.png";
import leaf2Image from "@/assets/img/leaf-2.png";

// Define an array of image sources for cheese images
const cheeseImages = [
  { src: cheeseImage, alt: "Cheese" },
  { src: cheeseImage, alt: "Cheese" },
];

// Define an array of image sources for favorite chips
const favoriteChips = [
  favoriteChips1Image,
  favoriteChips2Image,
  favoriteChips3Image,
];

// Define image sources for leaf images
const leafImages = [leaf1Image, leaf2Image];
</script>

<template>
  <section class="favorite section" id="favorites">
    <div class="favorites__container container grid">
      <div class="favorites__data">
        <h2 class="section__title">
          DISCOVER YOUR <br />
          FAVORITE FLAVORS
        </h2>

        <p class="favorites__description">
          Try some exotic flavors or delicious toppings. We have collected some
          delicious snack recipes from around the world for you.
        </p>

        <!-- Loop through cheese images -->
        <img
          v-for="(cheese, index) in cheeseImages"
          :key="index"
          :src="cheese.src"
          :alt="cheese.alt"
          :class="`favorites__cheese-${index + 1}`"
        />
      </div>

      <div class="favorites__swiper swiper">
        <div class="swiper-wrapper">
          <!-- Loop through favorite chips -->
          <article
            v-for="(chip, index) in favoriteChips"
            :key="index"
            class="favorites__article swiper-slide"
          >
            <img :src="chip" alt="Favorite Chips" class="favorites__img" />

            <!-- Loop through leaf images -->
            <img
              v-for="(leaf, leafIndex) in leafImages"
              :key="leafIndex"
              :src="leaf"
              alt="Leaf"
              :class="`favorites__leaf-${leafIndex + 1}`"
            />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
