<template>
    <section id="creations">
		<div class="header">
			<h1>Creations</h1>
		</div>

		<div class="projects">
			<ul>

				<li v-for="project in projectData" :key="project.projectName">
					<h1 class="project-name" v-html="project.projectName"></h1>
					<router-link @click.native="StoreLastScrollPosition" class="project-image" :to="{ name: 'project', params: {projectName: project.route} }">
						<div class="content">
							<!-- <v-lazy-image v-bind:src="require('../assets/creations/' + project.image)" v-bind:alt="project.imageAlt" /> -->
							<img v-lazy="require('../assets/creations/' + project.image)" v-bind:alt="project.imageAlt">
						</div>
					</router-link>
					<div class="project-tags">
						<div v-for="tag in project.tags" :key="tag" class="tag-name">{{tag}}</div>
					</div>
				</li>

			</ul>
		</div>
	</section>
</template>

<style lang="scss">
	@import '../styles/creations.scss'
</style>

<script>
	export default {

		data: () => ({

		}),

		methods: {
			StoreLastScrollPosition(){
				this.$store.dispatch("setLastScrollPosition")
			}

		},

		computed: {
			projectData(){
				return this.$store.state.json.projects
			},

			userGotHomeFromMenu(){
				return this.$store.getters.getHowUserGotHome
			},

			lastScrollPosition(){
				return this.$store.getters.getLastScrollPositionOnHome
			}
		},

		mounted(){
			//console.log(this)
			//console.log("UserGotHomeFromMenu: "+ this.userGotHomeFromMenu)

			if (this.UserGotHomeFromMenu === true) {
				window.scrollTo(0, 0);
			} else {
				//console.log(this.lastScrollPosition);
				window.scrollTo(0, this.lastScrollPosition);
			}
		},

		beforeDestroy(){
			if (this.$route.path === '/') {
				this.$store.dispatch("setIsHomeToTrue")
			} else {
				this.$store.dispatch("setIsHomeToFalse")
			}
		},

		created(){

		}
	}
</script>
