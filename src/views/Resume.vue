<template>
	<section id="resume">
		<div class="header">
			<h1>Resume</h1>
			<h2>Skills</h2>
		</div>

		<div class="skills">
			
			<div class="design-software">
				<h3>Design Software</h3>
				<ul>
					<li v-for="designSkill in skillData.design" :key="designSkill">
						<div class="list-content">
							<img v-lazy="require('../assets/'+ designSkill.image)">
							<span v-html="designSkill.skillName"></span>
						</div>
					</li>
				</ul>
			</div>

			<div class="webdesign">
				<h3>Front End Development</h3>
				<ul>
					<li v-for="frontEndSkill in skillData.frontEnd" :key="frontEndSkill">
						<div class="list-content">
							<img v-lazy="require('../assets/'+ frontEndSkill.image)">
							<span v-html="frontEndSkill.skillName"></span>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="experience">
			<h2>Experience</h2>
			<div id="cd-timeline" class="cd-container">

					<div class="cd-timeline-block" v-for="job in experienceData" :key="job.name">
						<div class="cd-timeline-img cd-location">
							<fa-icon :icon="['fas', 'map-marker-alt']" />
						</div> <!-- cd-timeline-img -->

						<div class="cd-timeline-content">
							<h1>{{job.function}}</h1>
							<h2>{{job.companyName}}</h2>
							<h3>{{job.city}}, {{job.country}}</h3>
							<span>{{job.dateStart}} &mdash; {{job.dateEnd}}</span>
							<!-- a href="#0" class="cd-read-more">Read more</a> -->
						</div> <!-- cd-timeline-content -->
					</div> <!-- cd-timeline-block -->
				</div>
		</div>
	</section>
</template>

<style lang="scss">
	@import "../styles/resume.scss";
	@import "../styles/timeline.scss";
</style>

<script>
	export default {

		data: () => ({

		}),

		methods: {

		},

		computed: {
			experienceData(){
				return this.$store.state.json.workExperience
			},

			skillData(){
				return this.$store.state.json.skills
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
			//console.log(this)
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
