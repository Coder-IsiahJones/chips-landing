<script setup lang="ts">
const careItems = [
  {
    iconClass: "ri-plant-line",
    description:
      "The potatoes that are made into snacks are grown and harvested and are 100% organic.",
  },
  {
    iconClass: "ri-fire-line",
    description:
      "We fry the fries with vegetable and natural oil for good care.",
  },
  {
    iconClass: "ri-heart-pulse-line",
    description:
      "The potatoes are not processed, once cleaned they are cooked without preservatives.",
  },
  {
    iconClass: "ri-hand-heart-line",
    description: "They contain fewer calories and less fat for good health.",
  },
];
</script>

<template>
  <section class="care section" id="care">
    <h2 class="section__title">
      ENJOY AND TAKE <br />
      CARE OF YOUR HEALTH
    </h2>

    <div class="care__container container grid">
      <ul class="care__list">
        <li class="care__item" v-for="item in careItems" :key="item.iconClass">
          <i :class="item.iconClass"></i>
          <p>{{ item.description }}</p>
        </li>
      </ul>

      <img src="assets/img/care-chips.png" alt="image" class="care__img" />
    </div>
  </section>
</template>
