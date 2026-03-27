<template>
	<section id="about-me">
		<div class="header">
			<h1>About me</h1>
			<h2>Firenzo Jorden</h2>
			<h3>Visual Designer / Front End Developer</h3>
		</div>
		
		<article>
			<div class="profile-image">
				<!-- <v-lazy-image alt="me" v-bind:src="require('../assets/picca.jpg')" class="profile-pic clip-circle" /> -->
				<img v-lazy="require('../assets/me2.jpg')" class="profile-pic clip-circle">
			</div>
			<div class="text">
				<p class="introduction">
					Welcome to my portfolio website! On this website you can find all my <router-link to="/resume">experience</router-link> and <router-link to="/creations">projects I've been working on.</router-link> If you want to get in touch with me, you can also find my contact info on the <router-link to="/contact">contact page.</router-link>
				</p>
				<h1>Who Am I?</h1>
				<p>
					I would describe myself as a UI designer at the core. I like the process from designing the interaction of applications and websites all the way to making them visually appealing.
					On top of that I do have skills in Front End Development as well.

				</p>
				<p>
					As of summer 2020 I graduated at Amsterdam University of applied sciences. My Major was Communication & Multimedia Design. For my minor I decided to do Game Design where I learned the basics of game theory and game art.
				</p>

				<p>
					Even though I graduated, I want to continue learning new skills. Therefore I’m always on the lookout for awesome software and technologies to improve my workflow. With this I hope to make beautiful and useful applications that people all over the world can use!
				</p>

				<h1>Other interests</h1>
				<h2>🎶 Music Production</h2>
				<p>
					There are several things I like to do in my spare time. One of them is producing music. I listen to hip-hop a lot, so that's what I produce the most, but I also really like to experiment with different genres. Gotta stay creative!
				</p>
				<h2>🎬 Video editing</h2>
				<p>
					Video editing is something I started to like more and more as we had to make video’s for certain excersices in school. I would love to get the opportunity to edit more video’s on a professional level someday. 
				</p>
				<h2>🎮 Gaming</h2>
				<p>
					Last but not least, I like to play games as well. I really like competitive games. Especially fighting games. So if you think you're better than me in Super Smash Bros. or Tekken, I would be more than happy to prove you wrong! 😉
				</p>
				
				
		</div>
		</article>
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
	@import "../styles/aboutMe.scss";
</style>
