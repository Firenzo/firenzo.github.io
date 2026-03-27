<template>

<div class="additional-content">
	<section class="text-container">
		<h2>{{projectData.content.oldLogo.h2}}</h2>
		<div :class="'image-container ' + projectData.content.oldLogo.img1.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.oldLogo.img1.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.oldLogo.img1.path + projectData.content.oldLogo.img1.image)">
			</div>
		</div>
		<p>{{projectData.content.oldLogo.p1}}</p>
	</section>
	<section class="text-container">
		<h2>{{projectData.content.designProcess.h2}}</h2>
		<h3>{{projectData.content.designProcess.h3a}}</h3>
		<p>{{projectData.content.designProcess.p1}}</p>
		<div :class="'image-container ' + projectData.content.designProcess.img1.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img1.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img1.path + projectData.content.designProcess.img1.image)">
			</div>
		</div>

		<h3>{{projectData.content.designProcess.h3b}}</h3>
		<p>{{projectData.content.designProcess.p2}}</p>
		<div :class="'image-container ' + projectData.content.designProcess.img2.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img2.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img2.path + projectData.content.designProcess.img2.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img3.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img3.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img3.path + projectData.content.designProcess.img3.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img4.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img4.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img4.path + projectData.content.designProcess.img4.image)">
			</div>
			<div class="image-description">
				<p class="alternative">{{projectData.content.designProcess.img4.imageDescription}}</p>
			</div>
		</div>

		<h3>{{projectData.content.designProcess.h3c}}</h3>
		<p>{{projectData.content.designProcess.p3}}</p>
		<div :class="'image-container ' + projectData.content.designProcess.img5.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img5.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img5.path + projectData.content.designProcess.img5.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img6.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img6.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img6.path + projectData.content.designProcess.img6.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img7.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img7.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img7.path + projectData.content.designProcess.img7.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img8.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img8.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img8.path + projectData.content.designProcess.img8.image)">
			</div>
		</div>

		<h3>{{projectData.content.designProcess.h3d}}</h3>
		<p>{{projectData.content.designProcess.p4}}</p>
		<div :class="'image-container ' + projectData.content.designProcess.img9.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img9.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img9.path + projectData.content.designProcess.img9.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img10.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img10.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img10.path + projectData.content.designProcess.img10.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img11.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img11.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img11.path + projectData.content.designProcess.img11.image)">
			</div>
		</div>
		<div :class="'image-container ' + projectData.content.designProcess.img12.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img12.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img12.path + projectData.content.designProcess.img12.image)">
			</div>
		</div>


		<h3>{{projectData.content.designProcess.h3e}}</h3>
		<p>{{projectData.content.designProcess.p5}}</p>
		<div :class="'image-container ' + projectData.content.designProcess.img13.classList">
			<div class="image" :style="{paddingTop: 'calc(100% / (' + projectData.content.designProcess.img13.aspectRatio + ')'}">
				<img v-lazy="require('../../assets/creations/specific/' + projectData.content.designProcess.img13.path + projectData.content.designProcess.img13.image)">
			</div>
			<div class="image-description">
				<p class="alternative">{{projectData.content.designProcess.img13.imageDescription}}</p>
			</div>
		</div>
	</section>
</div>

</template>

<style lang="scss">
@import '../../styles/additionalContent.scss';

.colors-logo-stage1,
.colors-logo-stage2-rounded,
.colors-logo-stage2-slab-serif,
.static-color-rounded,
.static-color-slab-serif,
.gradient-rounded,
.gradient-slab-serif,
.final-static-color-rounded,
.final-gradient-rounded,
.final-static-color-slab-serif,
.final-gradient-slab-serif{
	max-width: 600px;
	margin:auto;
}

.colors-logo-stage1,
.colors-logo-stage2-rounded,
.colors-logo-stage2-slab-serif{
	padding:30px 0;
}

.static-color-rounded,
.static-color-slab-serif,
.gradient-rounded,
.gradient-slab-serif,
.final-static-color-rounded,
.final-gradient-rounded,
.final-static-color-slab-serif,
.final-gradient-slab-serif{
	padding:5px 0;
}
.gradient-rounded,
.final-static-color-slab-serif{
	padding-top:40px;
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