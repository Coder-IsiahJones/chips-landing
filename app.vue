<script lang="ts" setup>
useSeoMeta({
  title: "Shop Chips Store",
  description:
    "Welcome to Shop Chips Store, your ultimate destination for the finest selection of crispy, crunchy, and flavorful chips! Explore our extensive range of tantalizing chip varieties, including classic favorites and exciting new flavors to satisfy every craving. From traditional potato chips to exotic and gourmet options, we have something for everyone. Indulge in our high-quality snacks, perfect for any occasion, whether you're snacking solo or entertaining guests. With Shop Chips Store, snack time just got a whole lot tastier. Browse our collection now and elevate your chip experience!",
  ogTitle: "Shop Chips is a website that sells chips.",
  ogDescription:
    "Welcome to Shop Chips Store, your ultimate destination for the finest selection of crispy, crunchy, and flavorful chips! Explore our extensive range of tantalizing chip varieties, including classic favorites and exciting new flavors to satisfy every craving. From traditional potato chips to exotic and gourmet options, we have something for everyone. Indulge in our high-quality snacks, perfect for any occasion, whether you're snacking solo or entertaining guests. With Shop Chips Store, snack time just got a whole lot tastier. Browse our collection now and elevate your chip experience!",
  ogImage: "https://chips-landing.netlify.app/preview.png",
  ogUrl: "https://chips-landing.netlify.app",
  twitterTitle: "Shop Chips Store",
  twitterDescription:
    "Welcome to Shop Chips Store, your ultimate destination for the finest selection of crispy, crunchy, and flavorful chips! Explore our extensive range of tantalizing chip varieties, including classic favorites and exciting new flavors to satisfy every craving. From traditional potato chips to exotic and gourmet options, we have something for everyone. Indulge in our high-quality snacks, perfect for any occasion, whether you're snacking solo or entertaining guests. With Shop Chips Store, snack time just got a whole lot tastier. Browse our collection now and elevate your chip experience!",
  twitterImage: "https://chips-landing.netlify.app/preview.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

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
