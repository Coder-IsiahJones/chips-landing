<script lang="ts" setup>
import ScrollReveal from "@/assets/js/scrollreveal.min.js";

onMounted(() => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
  });

  sr.reveal(`.home__data, .favorites__container, .footer__container`);
  sr.reveal(`.home__circle, .home__img`, { delay: 600, scale: 0.5 });
  sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {
    delay: 1000,
    interval: 100,
  });
  sr.reveal(`.home__leaf`, { delay: 1200 });
  sr.reveal(`.home__tomato-1, .home__tomato-2`, { delay: 1400, interval: 100 });
  sr.reveal(`.care__img, .contact__img`, { origin: "left" });
  sr.reveal(`.care__list, .contact__data`, { origin: "right" });
  sr.reveal(`.banner__item, .products__card`, { interval: 100 });
});
</script>

<template>
  <div>
    <Header />

    <main class="main">
      <Home />
      <Favorite />
      <Care />
      <Banner />
      <Product />
      <Contact />
    </main>

    <LazyFooter />
    <LazyScrollUp />
  </div>
</template>
