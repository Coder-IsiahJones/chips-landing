<script lang="ts" setup>
import shrimp from "assets/img/shrimp.png";
import crab from "assets/img/crab.png";
import meat from "assets/img/meat.png";

// Define an array of social media objects
const socialMediaLinks = [
  {
    iconClass: "ri-whatsapp-fill",
    link: "",
  },
  {
    iconClass: "ri-messenger-fill",
    link: "",
  },
  {
    iconClass: "ri-mail-fill",
    link: "mailto:examplemail@correo.com",
  },
];

const images = [
  { src: shrimp, alt: "Shrimp", className: "contact__shrimp" },
  { src: crab, alt: "Crab", className: "contact__crab" },
  { src: meat, alt: "Meat", className: "contact__meat" },
];
</script>

<template>
  <section class="contact section" id="contact">
    <div class="contact__container container">
      <h2 class="section__title">
        CONTACT US TO <br />
        EAT CHIPS
      </h2>

      <div class="contact__content grid">
        <div class="contact__data grid">
          <div>
            <h3 class="contact__title">Write to us</h3>

            <div class="contact__social">
              <a
                v-for="(socialMedia, index) in socialMediaLinks"
                :key="index"
                :href="socialMedia.link"
                target="_blank"
              >
                <i :class="socialMedia.iconClass"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 class="contact__title">Call us</h3>

            <address class="contact__info">
              +00-987-7654-321 <br />
              +11-012345
            </address>
          </div>

          <div>
            <h3 class="contact__title">Find us here</h3>

            <address class="contact__info">
              Fort Wayne - Indiana - US <br />
              Av. Moon #4321
            </address>
          </div>
        </div>

        <img
          src="assets/img/contact-man.png"
          alt="image"
          class="contact__img"
        />
      </div>

      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :class="image.className"
      />
    </div>
  </section>
</template>
