<template>
	<nav class="mobileMenu" v-bind:class=" {open: menuState}">
		<div class="menu-close" @click="ChangeMenuState">
			<fa-icon :icon="['fas', 'times']" />
		</div>

		<ul>
			<li @click="ChangeMenuState"><router-link to="/about_me"><fa-icon :icon="['fas', 'user']" />About me</router-link></li>
			<li @click="ChangeMenuState"><router-link to="/resume"><fa-icon :icon="['fas', 'file-alt']" />Resume</router-link></li>
			<li @click="ChangeMenuState(); SetUserGotHomeFromMenu();"><router-link to="/creations" :class="{'router-link-active' : homeState}"><fa-icon :icon="['fas', 'pencil-ruler']" />Creations</router-link></li>
			<li @click="ChangeMenuState"><router-link to="/contact"><fa-icon :icon="['fas', 'comments']" />Contact</router-link></li>
		</ul>
	</nav>
</template>

<script>
	export default {

		data: () => ({
			//menuState: true
		}),

		methods: {
			ChangeMenuState(){
				if (this.$store.getters.getCurrentMenuState === true) {
					this.$store.dispatch("closeMenu")
				} else if (this.$store.getters.getCurrentMenuState === false) {
					this.$store.dispatch("openMenu")
				}
			},

			SetUserGotHomeFromMenu(){
				this.$store.dispatch("userGotHomeFromMenu");
			}
		},

		computed: {
			menuState(){
				return this.$store.getters.getCurrentMenuState;
			},

			userGotHomeFromMenu(){
				return this.$store.getters.getHowUserGotHome
			},

			lastScrollPosition(){
				return this.$store.getters.getLastScrollPositionOnHome
			},

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
			
		}
	}
</script>

<style lang="scss">
@import "../styles/menu.scss";

.slideOut-enter{
  transform: translateX(0vw);
}

.slideOut-enter-to{
  opacity: 1;
  transform: translateX(-100vw);
}

.slideOut-enter-active{
  transition: all 0.4s ease;
}

.slideOut-leave{
  transform: translateX(-100vw);
}

.slideOut-leave-to{
  transform: translateX(0vw);

}

.slideOut-leave-active{
  transition: all 0.4s ease;
}

</style>