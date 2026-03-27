<template>

<div class="additional-content">
	<section class="text-container">
		<h2>{{projectData.content.bootcamp.h2}}</h2>
		<p>{{projectData.content.bootcamp.p1}}</p>
		<h3>{{projectData.content.bootcamp.h3}}</h3>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[0]"></ImageSlider>

	<section class="text-container">
		<h2>{{projectData.content.research.h2}}</h2>
		<p>{{projectData.content.research.p1}}</p>
		<h3>{{projectData.content.research.h3a}}</h3>
		<p>{{projectData.content.research.p2}}</p>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[1]"></ImageSlider>

	<section class="text-container">
		<h3>{{projectData.content.research.h3b}}</h3>
		<ul>
			<li v-for="listItem in projectData.content.research.ul1" :key="listItem">{{listItem}}</li>
		</ul>
		<h3>{{projectData.content.research.h3c}}</h3>
		<p>{{projectData.content.research.p3}}</p>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[2]"></ImageSlider>

	<section class="text-container">
		<h3>{{projectData.content.research.h3d}}</h3>
		<ul>
			<li v-for="listItem in projectData.content.research.ul2" :key="listItem">{{listItem}}</li>
		</ul>
	</section>

	<section class="text-container">
		<h2>{{projectData.content.ideation.h2}}</h2>
		<p>{{projectData.content.ideation.p1}}</p>
		<p>{{projectData.content.ideation.p2}}</p>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[3]"></ImageSlider>

	<section class="text-container">
		<h3>{{projectData.content.ideation.h3a}}</h3>
		<p>{{projectData.content.ideation.p3}}</p>
		<div :class="'image-container ' + projectData.content.ideation.img1.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.ideation.img1.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.ideation.img1.path + projectData.content.ideation.img1.image)">
			</div>
		</div>
		<h2>{{projectData.content.productCreation.h2}}</h2>
		<h3>{{projectData.content.productCreation.h3a}}</h3>
		<p>{{projectData.content.productCreation.p1}}</p>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[4]"></ImageSlider>

	<section class="text-container">
		<h3>{{projectData.content.productCreation.h3b}}</h3>
		<p>{{projectData.content.productCreation.p2}}</p>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[5]"></ImageSlider>

	<section class="text-container">
		<h3>{{projectData.content.productCreation.h3c}}</h3>
		<p>{{projectData.content.productCreation.p3}}</p>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[6]"></ImageSlider>

	<section class="text-container">
		<p>{{projectData.content.productCreation.p4}}</p>
		<div :class="'image-container ' + projectData.content.productCreation.img1.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.productCreation.img1.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.productCreation.img1.path + projectData.content.productCreation.img1.image)">
			</div>
		</div>
		<p>{{projectData.content.productCreation.p5}}</p>

		<div :class="'image-container ' + projectData.content.productCreation.img2.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.productCreation.img2.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.productCreation.img2.path + projectData.content.productCreation.img2.image)" />
			</div>
			<div class="image-description">
				<p class="alternative">{{projectData.content.productCreation.img2.imageDescription}}</p>
			</div>
		</div>

		<h3>{{projectData.content.productCreation.h3d}}</h3>
		<p>{{projectData.content.productCreation.p6}}</p>
	</section>

	<ImageSlider v-bind:sliderData="projectData.content.sliders[7]"></ImageSlider>

	<section class="text-container">
		<h2>{{projectData.content.finalProduct.h2}}</h2>
		<video controls="true" v-bind:poster="require('../../assets/videos/thumbnails/' + projectData.content.finalProduct.video1.thumbnail)">
			<source v-bind:src="require('../../assets/videos/' + projectData.content.finalProduct.video1.file)" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		<p class="alternative">Video is also available on <a v-bind:href="projectData.content.finalProduct.video1.link" target="_blank">{{projectData.content.finalProduct.video1.externalPlatform}}</a></p>

		<p>{{projectData.content.finalProduct.p1}}</p>
		<div :class="'image-container ' + projectData.content.finalProduct.img1.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.finalProduct.img1.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.finalProduct.img1.path + projectData.content.finalProduct.img1.image)">
			</div>
			<div class="image-description">
				<p class="alternative" v-if="projectData.content.finalProduct.img1.imageDescription">{{projectData.content.finalProduct.img1.imageDescription}}</p>
			</div>
		</div>
		<p>{{projectData.content.finalProduct.p2}}</p>
		<p>{{projectData.content.finalProduct.p3}}</p>
	</section>

	<section class="text-container">
		<a v-if="projectData.hasLink" v-bind:href="projectData.projectLink" target="_blank" class="button">{{projectData.buttonText}}<fa-icon :icon="['fas', 'chevron-right']" /></a>
	</section>

	<!-- <div class="video" v-if="project.hasVideo">
		<h2>Video</h2>
		<video controls="true" v-bind:poster="require('../assets/videos/thumbnails/' + project.thumbnail)">
			<source v-bind:src="require('../assets/videos/' + project.videoLink)" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		<p class="alternative">Video is also available on <a v-bind:href="project.videoLink2" target="_blank">{{project.externalPlatform}}</a></p>
	</div> -->

</div>

</template>

<style lang="scss">
	@import '../../styles/additionalContent.scss';

	#multifeedPersona{
		.longImage{
			@include min-1500{
				overflow:hidden;
			}
		}
	}

	section.text-container{
		.multifeed-logo{
			max-width:400px;
			margin:auto;
		}
	}

</style>


<script>
	export default {

		props: ["projectData"],

		data: () => ({

		}),

		methods: {

		},

		computed: {

		},

		mounted(){

		}
	}
</script>