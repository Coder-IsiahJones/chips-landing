<script lang="ts" setup>
onMounted(() => {
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  /* Menu show */
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.add("show-menu");
      }
    });
  }

  /* Menu hidden */
  if (navClose) {
    navClose.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("show-menu");
      }
    });
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll(".nav__link");

  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    if (navMenu) {
      navMenu.classList.remove("show-menu");
    }
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  /*=============== SHADOW HEADER ===============*/
  const shadowHeader = () => {
    const header = document.getElementById("header");
    // Add a class if the bottom offset is greater than 50 of the viewport
    if (header) {
      window.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
    }
  };
  window.addEventListener("scroll", shadowHeader);
});

const navItems = ref([
  { id: 0, label: "Home", href: "#home" },
  { id: 1, label: "Favorites", href: "#favorites" },
  { id: 2, label: "Care", href: "#care" },
  { id: 3, label: "Products", href: "#products" },
  { id: 4, label: "Contact", href: "#contact" },
]);

const activeIndex = ref(0);

const socialMediaLinks = ref([
  { href: "https://www.facebook.com/", iconClass: "ri-facebook-circle-line" },
  { href: "https://www.instagram.com/", iconClass: "ri-instagram-line" },
  { href: "https://twitter.com/", iconClass: "ri-twitter-x-line" },
]);
</script>

<template>
  <header class="header" id="header">
    <nav class="nav container">
      <!-- Nav logo -->
      <a href="#" class="nav__logo">CHIPS</a>

      <!-- Nav menu -->
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <!-- Loop through your list items using v-for -->
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="item.href"
              class="nav__link"
              :class="{ 'active-link': item.id === activeIndex }"
              @click="activeIndex = item.id"
              >{{ item.label }}</a
            >
          </li>
        </ul>

        <!-- Close button -->
        <div class="nav__close" id="nav-close">
          <i class="ri-close-large-line"></i>
        </div>

        <!-- Social media links -->
        <div class="nav__social">
          <a
            v-for="(socialMedia, index) in socialMediaLinks"
            :key="index"
            :href="socialMedia.href"
            target="_blank"
            class="nav__social-link"
          >
            <i :class="socialMedia.iconClass"></i>
          </a>
        </div>
      </div>

      <!-- Menu -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-apps-2-line"></i>
      </div>
    </nav>
  </header>
</template>
