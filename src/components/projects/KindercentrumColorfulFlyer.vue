<template>

<div class="additional-content">
	<section class="text-container">
		<h2>{{projectData.content.flyer.h2}}</h2>
		<div :class="'image-container a5-flyer ' + projectData.content.flyer.img1.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.flyer.img1.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.flyer.img1.path + projectData.content.flyer.img1.image)">
			</div>
		</div>
		<div :class="'image-container a5-flyer ' + projectData.content.flyer.img2.classList">
				<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.flyer.img2.aspectRatio + ')'}">
					<img v-lazy="require('../../assets/creations/specific/' + projectData.content.flyer.img2.path + projectData.content.flyer.img2.image)">
				</div>
			</div>
	</section>
</div>

</template>

<style lang="scss">

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