<script setup lang="ts">
const items = [
  { icon: "ri-leaf-line", text: "GOOD FOR NATURE" },
  { icon: "ri-heart-pulse-line", text: "LOW CALORIES" },
];
</script>

<template>
  <section class="banner">
    <div class="banner__container">
      <ul class="banner__list">
        <li class="banner__item" v-for="item in items" :key="item.icon">
          <i :class="item.icon"></i>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
