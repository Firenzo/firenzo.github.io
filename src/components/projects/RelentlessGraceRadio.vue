<template>
	<div class="additional-content">
		<section class="text-container">
			<h2>{{projectData.content.bootcamp.h2}}</h2>
			<p>{{projectData.content.bootcamp.p1}}</p>
			<h3>{{projectData.content.bootcamp.h3a}}</h3>
			<p>{{projectData.content.bootcamp.p2}}</p>
		</section>

		<ImageSlider v-bind:sliderData="projectData.content.sliders[0]"></ImageSlider>

		<section class="text-container">
			<h3>{{projectData.content.bootcamp.h3b}}</h3>
			<p>{{projectData.content.bootcamp.p3}}</p>
		</section>

		<ImageSlider v-bind:sliderData="projectData.content.sliders[1]"></ImageSlider>

		<section class="text-container">
			<h3>{{projectData.content.makingWebsite.h2}}</h3>
			<p>{{projectData.content.makingWebsite.p1}}</p>
			<p>{{projectData.content.makingWebsite.p2}}</p>
			<div :class="'image-container ' + projectData.content.makingWebsite.img1.classList">
				<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.makingWebsite.img1.aspectRatio + ')'}">
					<img v-lazy="require('../../assets/creations/specific/' + projectData.content.makingWebsite.img1.path + projectData.content.makingWebsite.img1.image)">
				</div>
			</div>
			<h2>{{projectData.content.improvements.h2}}</h2>
			<p>{{projectData.content.improvements.p1}}</p>
			<p>{{projectData.content.improvements.p2}}</p>
			<h3>{{projectData.content.improvements.h3a}}</h3>
			<div :class="'image-container ' + projectData.content.improvements.img1.classList">
				<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img1.aspectRatio + ')'}">
					<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img1.path + projectData.content.improvements.img1.image)">
				</div>
			</div>
			<p>{{projectData.content.improvements.p3}}</p>
			<p>{{projectData.content.improvements.p4}}</p>
			<div :class="'image-container ' + projectData.content.improvements.img2.classList">
				<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img2.aspectRatio + ')'}">
					<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img2.path + projectData.content.improvements.img2.image)">
				</div>
				<div class="image-descritpion">
					<p class="alternative" v-if="projectData.content.improvements.img2.imageDescription">{{projectData.content.improvements.img2.imageDescription}}</p>
				</div>
			</div>

			<h3>{{projectData.content.improvements.h3b}}</h3>
			<p>{{projectData.content.improvements.p5}}</p>

			<div class="before-after-phone">
				<div :class="'image-container ' + projectData.content.improvements.img3.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img3.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img3.path + projectData.content.improvements.img3.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img3.imageDescription">{{projectData.content.improvements.img3.imageDescription}}</p>
					</div>
				</div>

				<div :class="'image-container ' + projectData.content.improvements.img4.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img4.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img4.path + projectData.content.improvements.img4.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img4.imageDescription">{{projectData.content.improvements.img4.imageDescription}}</p>
					</div>
				</div>
			</div>

			<h3>{{projectData.content.improvements.h3c}}</h3>
			<p>{{projectData.content.improvements.p6}}</p>

			<div class="before-after-phone">
				<div :class="'image-container ' + projectData.content.improvements.img5.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img5.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img5.path + projectData.content.improvements.img5.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img5.imageDescription">{{projectData.content.improvements.img5.imageDescription}}</p>
					</div>
				</div>

				<div :class="'image-container ' + projectData.content.improvements.img6.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img6.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img6.path + projectData.content.improvements.img6.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img6.imageDescription">{{projectData.content.improvements.img6.imageDescription}}</p>
					</div>
				</div>
			</div>

			<h3>{{projectData.content.improvements.h3d}}</h3>
			<p>{{projectData.content.improvements.p7}}</p>

			<div class="before-after-phone">
				<div :class="'image-container ' + projectData.content.improvements.img7.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img7.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img7.path + projectData.content.improvements.img7.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img7.imageDescription">{{projectData.content.improvements.img7.imageDescription}}</p>
					</div>
				</div>

				<div :class="'image-container ' + projectData.content.improvements.img8.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img8.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img8.path + projectData.content.improvements.img8.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img8.imageDescription">{{projectData.content.improvements.img8.imageDescription}}</p>
					</div>
				</div>
			</div>

			<h3>{{projectData.content.improvements.h3e}}</h3>
			<p>{{projectData.content.improvements.p8}}</p>

			<div class="before-after-phone">
				<div :class="'image-container ' + projectData.content.improvements.img9.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img9.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img9.path + projectData.content.improvements.img9.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img9.imageDescription">{{projectData.content.improvements.img9.imageDescription}}</p>
					</div>
				</div>

				<div :class="'image-container ' + projectData.content.improvements.img10.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img10.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img10.path + projectData.content.improvements.img10.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img10.imageDescription">{{projectData.content.improvements.img10.imageDescription}}</p>
					</div>
				</div>
			</div>

			<h3>{{projectData.content.improvements.h3f}}</h3>
			<p>{{projectData.content.improvements.p9}}</p>

			<div class="before-after-phone">
				<div :class="'image-container ' + projectData.content.improvements.img11.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img11.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img11.path + projectData.content.improvements.img11.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img11.imageDescription">{{projectData.content.improvements.img11.imageDescription}}</p>
					</div>
				</div>

				<div :class="'image-container ' + projectData.content.improvements.img12.classList">
					<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img12.aspectRatio + ')'}">
						<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img12.path + projectData.content.improvements.img12.image)">
					</div>
					<div class="image-description">
						<p class="alternative center big" v-if="projectData.content.improvements.img12.imageDescription">{{projectData.content.improvements.img12.imageDescription}}</p>
					</div>
				</div>
			</div>

			<h3>{{projectData.content.improvements.h3g}}</h3>
			<p>{{projectData.content.improvements.p10}}</p>

			<div :class="'image-container ' + projectData.content.improvements.img13.classList">
				<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img13.aspectRatio + ')'}">
					<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img13.path + projectData.content.improvements.img13.image)">
				</div>
				<div class="image-description">
					<p class="alternative center big" v-if="projectData.content.improvements.img13.imageDescription">{{projectData.content.improvements.img13.imageDescription}}</p>
				</div>
			</div>

			<div :class="'image-container ' + projectData.content.improvements.img14.classList">
				<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.improvements.img14.aspectRatio + ')'}">
					<img v-lazy="require('../../assets/creations/specific/' + projectData.content.improvements.img14.path + projectData.content.improvements.img14.image)">
				</div>
				<div class="image-description">
					<p class="alternative center big" v-if="projectData.content.improvements.img14.imageDescription">{{projectData.content.improvements.img14.imageDescription}}</p>
				</div>
			</div>
		</section>

		<section class="text-container">
			<h2>{{projectData.content.extras.h2}}</h2>
			<p>{{projectData.content.extras.p1}}</p>
			<div class="rgr-animation">
				<div class="rgr-logo-animation"></div>
			</div>
			<p class="alternative">Lottie intro animation for the logo</p>
		</section>

		<section class="text-container">
			<a v-if="projectData.hasLink" v-bind:href="projectData.projectLink" target="_blank" class="button">{{projectData.buttonText}}<fa-icon :icon="['fas', 'chevron-right']" /></a>
		</section>

		
	</div>
</template>

<style lang="scss">
	@import "../../styles/project.scss";

	#RgrHeaderDesigns{

		.image-slider-container{
			img{
				box-shadow:none;
			}
		}
	}

	.rgr-animation{
		width:100%;
		background: linear-gradient(177deg, #2b2b2b 0%, #000000 100%);
		//box-shadow: inset 0 -10px 0 rgb(255 255 255 / 22%), inset 0 10px 0 rgb(255 255 255 / 22%);
		padding:20px 0;
		border-radius:15px;

		.rgr-logo-animation{
			max-width:750px;
			margin:auto;
		}
	}
</style>

<script>

	import lottie from 'lottie-web';

	export default {
		props: ["projectData"],

		data: () => ({
			animation: null
		}),

		methods: {

		},

		computed: {

		},

		mounted(){
			this.animation = lottie.loadAnimation({
				container: document.querySelector('.rgr-logo-animation'),
				animationData: require('../../assets/creations/specific/relentless-grace-radio/LogoAnimation.json'),
				renderer: 'svg',
				loop: false,
				autoplay: true,
			})
			this.animation.setSpeed(1.2);
			this.animation.onComplete = function(){
				setTimeout(function(){
					this.goToAndPlay(1, true);
				}.bind(this), 1000);
			}
		}
	}
</script>