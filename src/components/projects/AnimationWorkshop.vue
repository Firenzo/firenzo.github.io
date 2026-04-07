<template>
  <div class="additional-content">
    <section class="text-container">
      <h2>{{ projectData.content.presentation.h2 }}</h2>
      <p>{{ projectData.content.presentation.p1 }}</p>
      <p>{{ projectData.content.presentation.p2 }}</p>
      <p>{{ projectData.content.presentation.p3 }}</p>
    </section>
    <section class="text-container">
      <h2>{{ projectData.content.assignments.h2 }}</h2>
      <p>{{ projectData.content.assignments.p1 }}</p>
      <p>{{ projectData.content.assignments.p2 }}</p>
    </section>
    <section class="text-container">
      <h2>{{ projectData.content.design.h2 }}</h2>
      <p>{{ projectData.content.design.p1 }}</p>
      <p>{{ projectData.content.design.p2 }}</p>
      <p>{{ projectData.content.design.p3 }}</p>
      <p>{{ projectData.content.design.p4 }}</p>
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
