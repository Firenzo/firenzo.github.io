<template>
  <div class="additional-content">
    <section class="text-container">
      <h2>{{ projectData.content.design.h2 }}</h2>
      <p>{{ projectData.content.design.p1 }}</p>
      <p>{{ projectData.content.design.p2 }}</p>
    </section>
    <ImageSlider
      v-bind:sliderData="projectData.content.sliders[0]"
    ></ImageSlider>
    <section class="text-container">
      <h2>{{ projectData.content.development.h2 }}</h2>
      <p>{{ projectData.content.development.p1 }}</p>
      <div
        :class="
          'image-container ' + projectData.content.development.img1.classList
        "
      >
        <div
          class="image"
          :style="{
            paddingTop:
              'calc(100% / (' +
              projectData.content.development.img1.aspectRatio +
              ')',
          }"
        >
          <img
            v-lazy="
              require('../../assets/creations/specific/' +
                projectData.content.development.img1.path +
                projectData.content.development.img1.image)
            "
          />
        </div>
      </div>
    </section>
    <section class="text-container">
      <a
        v-if="projectData.hasLink"
        v-bind:href="projectData.projectLink"
        target="_blank"
        class="button"
        >{{ projectData.buttonText }}<fa-icon :icon="['fas', 'chevron-right']"
      /></a>
    </section>
  </div>
</template>

<style lang="scss">
#BarberIwanV2Design {
  .image-slider-container {
    img {
      box-shadow: none;
    }
  }
}
</style>

<script>
export default {
  props: ["projectData"],

  data: () => ({}),

  methods: {},

  computed: {},

  mounted() {},
};
</script>
