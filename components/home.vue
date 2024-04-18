<script lang="ts" setup>
import chipsOne from "@/assets/img/chips-1.png";
import chipsTwo from "@/assets/img/chips-2.png";
import chipsThree from "@/assets/img/chips-3.png";
import tomatoOne from "@/assets/img/tomato-1.png";
import tomatoTwo from "@/assets/img/tomato-2.png";
import leafThree from "@/assets/img/leaf-3.png";

const images = [
  {
    img: chipsOne,
    className: "home__chips-1",
  },
  {
    img: chipsTwo,
    className: "home__chips-2",
  },
  {
    img: chipsThree,
    className: "home__chips-3",
  },
  {
    img: tomatoOne,
    className: "home__tomato-1",
  },
  {
    img: tomatoTwo,
    className: "home__tomato-2",
  },
  {
    img: leafThree,
    className: "home__leaf",
  },
];
</script>

<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <div class="home__data">
        <h1 class="home__title">
          SNACK <br />
          WITH NO <br />
          LIMITS
        </h1>

        <p class="home__description">
          When you are hungry and don't have time to cook, snacks are the
          perfect solution, always prepare for midday hunger.
        </p>

        <img src="assets/img/meat.png" alt="image" class="home__meat" />

        <div class="home__buttons">
          <a href="#" class="button">Snack Now</a>
          <a href="#" class="button button__ghost">Buy Now</a>
        </div>
      </div>

      <div class="home__images">
        <div class="home__circle">
          <div class="home__subcircle"></div>
        </div>

        <img src="assets/img/home-chips.png" alt="image" class="home__img" />

        <img
          v-for="(image, index) in images"
          :src="image.img"
          :alt="`image-${index}`"
          :key="index"
          :class="image.className"
        />
      </div>
    </div>
  </section>
</template>
