<template>
	<section id="contact">
		<div class="header">
			<h1>Contact</h1>
		</div>
		<!-- <h1>Email</h1> -->
		<a href="mailto:firenzo.jorden@gmail.com" class="email-block">
			<div class="button-content">
				<div class="offset-icon"></div>
				<div class="icon">
					<fa-icon :icon="['fas', 'envelope']" />
				</div>
				<span>firenzo.jorden@gmail.com</span>
			</div>
			
		</a>
		<!-- <h1>Social Media</h1> -->
		<a href="https://www.linkedin.com/in/firenzo-jorden" target="_blank"  class="linkedin-block">
			<div class="button-content">
				<div class="offset-icon"></div>
				<div class="icon linkedin">
					<fa-icon :icon="['fab', 'linkedin']" />
				</div>
				<span>Visit Linkedin</span>
			</div>
		</a>

		<a href="https://github.com/Firenzo" target="_blank"  class="linkedin-block">
			<div class="button-content">
				<div class="offset-icon"></div>
				<div class="icon linkedin">
					<fa-icon :icon="['fab', 'github']" />
				</div>
				<span>Github</span>
			</div>
		</a>
	</section>
</template>

<script>
	export default {

		data: () => ({

		}),

		methods: {

		},

		computed: {

		},

		mounted(){
			window.scrollTo(0, 0);
		},

		beforeDestroy(){
			if (this.$route.path === '/') {
				this.$store.dispatch("setIsHomeToTrue")
			} else {
				this.$store.dispatch("setIsHomeToFalse")
			}
		}
	}
</script>

<style lang="scss">
@import "../styles/contact.scss";

</style>
