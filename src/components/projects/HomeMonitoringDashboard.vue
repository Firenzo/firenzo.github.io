<template>

<div class="additional-content">
	<section class="text-container">
		<h2>{{projectData.content.bootcamp.h2}}</h2>
		<h3>{{projectData.content.bootcamp.h3a}}</h3>
		<p>{{projectData.content.bootcamp.p1}}</p>

		<LinkPreview url="https://projects.invisionapp.com/boards/383SS7LJRNX/" class="link-preview-container">
			<template v-slot:default="preview">
				<a href="https://projects.invisionapp.com/boards/383SS7LJRNX/" target="_blank">
					<div class="link-preview-section" style="width: 90%; max-width: 700px; margin: 18px auto;">
						<div class="link-description">
							<div class="link-title">
								<span>{{preview.title}}</span>
							</div>
							<div class="link-data">
								<span class="link-description">{{preview.description}}</span>
								<span class="link-domain">{{preview.domain}}</span>
							</div>
						</div>

						<div class="link-image">
							<img :src="preview.img" :alt="preview.title">
						</div>
					</div>
				</a>
			</template>
		</LinkPreview>
		<p class="alternative">Link to moodboard</p>

		<h3>{{projectData.content.bootcamp.h3b}}</h3>
		<p>{{projectData.content.bootcamp.p2}}</p>
		<p>{{projectData.content.bootcamp.p3}}</p>

		<h3>{{projectData.content.bootcamp.h3c}}</h3>
		<p>{{projectData.content.bootcamp.p4}}</p>
		<ul>
			<li v-for="listItem in projectData.content.bootcamp.ul1" :key="listItem">{{listItem}}</li>
		</ul>
		<h3>{{projectData.content.bootcamp.h3d}}</h3>
		<p>{{projectData.content.bootcamp.p5}}</p>
	</section>
	<ImageSlider v-bind:sliderData="projectData.content.sliders[0]"></ImageSlider>
	<ImageSlider v-bind:sliderData="projectData.content.sliders[1]"></ImageSlider>

	<section class="text-container">
		<h2>{{projectData.content.animations.h2}}</h2>
		<video controls="true" v-bind:poster="require('../../assets/videos/thumbnails/' + projectData.content.animations.video1.thumbnail)">
			<source v-bind:src="require('../../assets/videos/' + projectData.content.animations.video1.file)" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		<p class="alternative">Video is also available on <a v-bind:href="projectData.content.animations.video1.link" target="_blank">{{projectData.content.animations.video1.externalPlatform}}</a></p>

		<h2>{{projectData.content.finalThoughts.h2}}</h2>
		<p>{{projectData.content.finalThoughts.p1}}</p>
		<p>{{projectData.content.finalThoughts.p2}}</p>
		<div :class="'image-container ' + projectData.content.finalThoughts.img1.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.finalThoughts.img1.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.finalThoughts.img1.path + projectData.content.finalThoughts.img1.image)">
			</div>
			<div class="image-description">
				<p class="alternative center big" v-if="projectData.content.finalThoughts.img1.imageDescription">{{projectData.content.finalThoughts.img1.imageDescription}}</p>	
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.finalThoughts.img2.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.finalThoughts.img2.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.finalThoughts.img2.path + projectData.content.finalThoughts.img2.image)">
			</div>
			<div class="image-description">
				<p class="alternative center big" v-if="projectData.content.finalThoughts.img2.imageDescription">{{projectData.content.finalThoughts.img2.imageDescription}}</p>
			</div>
		</div>
		<p>{{projectData.content.finalThoughts.p3}}</p>
		<p>{{projectData.content.finalThoughts.p4}}</p>
		
		<h3>{{projectData.content.finalThoughts.h3a}}</h3>
		<p>{{projectData.content.finalThoughts.p5}}</p>
		<p>{{projectData.content.finalThoughts.p6}}</p>
		<p>{{projectData.content.finalThoughts.p7}}</p>
	</section>
</div>

</template>

<style lang="scss">

	@import '../../styles/linkPreview.scss';
	#homeMonitoringDashboardVisuals{

		.image-slider-container{
			img{
				box-shadow:none;
			}
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