<template>
	<nav class="desktopMenu">
		<ul>
			<li><router-link to="/about_me"><fa-icon :icon="['fas', 'user']" />About me</router-link></li>
			<li><router-link to="/resume"><fa-icon :icon="['fas', 'file-alt']" />Resume</router-link></li>
			<li><router-link to="/creations" :class="{'router-link-active' : homeState}"><fa-icon :icon="['fas', 'pencil-ruler']" />Creations</router-link></li>
			<li><router-link to="/contact"><fa-icon :icon="['fas', 'comments']" />Contact</router-link></li>
		</ul>
	</nav>
</template>

<style lang="scss">
	@import "../styles/desktopMenu.scss"
</style>

<script>
	export default {

		data: () => ({

		}),

		methods: {

		},

		computed: {
			homeState() {
				return this.$store.getters.getHomeState
			}
		},

		created(){
			if (this.$route.path != '/') {
				this.$store.dispatch("setIsHomeToFalse")
			} else {
				this.$store.dispatch("setIsHomeToTrue")
			}
		},

		mounted(){
			window.scrollTo(0, 0);
		}
	}
</script>