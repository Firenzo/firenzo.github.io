<template>
  <section id="project">
    <div class="header">
      <h1>{{ project.projectPageTitle }}</h1>
    </div>

    <article>
      <div class="project-introduction">
        <div class="image-and-link">
          <div class="sticky-wrapper">
            <img v-bind:src="require('../assets/creations/' + project.image)" />
            <router-link
              v-if="project.hasLink && project.projectLinkIsInternal"
              :to="{
                name: 'project',
                params: { projectName: project.projectLink },
              }"
              class="button"
              >{{ project.buttonText }}<fa-icon :icon="['fas', 'chevron-right']"
            /></router-link>
            <a
              v-if="project.hasLink && !project.projectLinkIsInternal"
              v-bind:href="project.projectLink"
              target="_blank"
              class="button"
              >{{ project.buttonText }}<fa-icon :icon="['fas', 'chevron-right']"
            /></a>
          </div>
        </div>

        <div class="project-content">
          <div class="text" v-html="project.pageLayout"></div>
        </div>
      </div>

      <component :is="project.projectContent" v-bind:projectData="project" />
    </article>
  </section>
</template>

<style lang="scss">
@import "../styles/project.scss";
</style>

<script>
export default {
  data: () => ({}),

  methods: {},

  computed: {
    project() {
      return this.$store.getters.getProject(this.$route.params.projectName);
    },

    isMobile() {
      return this.$store.getters.getMobileState;
    },
  },

  mounted() {
    //console.log(this);
    window.scrollTo(0, 0);
  },

  created() {
    this.$Lazyload.$on("loaded", function({ el }) {
      if (el.parentNode.classList.contains("image-slider-container")) {
        el.parentNode.classList.add("loaded");
      } else if (
        el.parentNode.parentNode.classList.contains("image-container") &&
        el.parentNode.classList.contains("image")
      ) {
        el.parentNode.classList.add("loaded");
      }
    });
  },

  beforeDestroy() {
    if (this.$route.path === "/") {
      this.$store.dispatch("setIsHomeToTrue");
    }
  },
};
</script>
