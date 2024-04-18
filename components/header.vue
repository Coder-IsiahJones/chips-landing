<script lang="ts" setup></script>

<template>
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">CHIPS</a>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li>
            <a href="#home" class="nav__link active-link">Home</a>
          </li>

          <li>
            <a href="#favorites" class="nav__link">Favorites</a>
          </li>

          <li>
            <a href="#care" class="nav__link">Care</a>
          </li>

          <li>
            <a href="#products" class="nav__link">Products</a>
          </li>

          <li>
            <a href="#contact" class="nav__link">Contact</a>
          </li>
        </ul>

        <!-- Close button -->
        <div class="nav__close" id="nav-close">
          <i class="ri-close-large-line"></i>
        </div>

        <div class="nav__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="nav__social-link"
          >
            <i class="ri-facebook-circle-line"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="nav__social-link"
          >
            <i class="ri-instagram-line"></i>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            class="nav__social-link"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
        </div>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-apps-2-line"></i>
      </div>
    </nav>
  </header>
</template>
