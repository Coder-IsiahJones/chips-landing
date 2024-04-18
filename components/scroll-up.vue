<script lang="ts" setup>
onMounted(() => {
  const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class

    if (scrollUp) {
      window.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
    }
  };
  window.addEventListener("scroll", scrollUp);
});
</script>

<template>
  <a href="#" class="scrollup" id="scroll-up">
    <i class="ri-arrow-up-line"></i>
  </a>
</template>
