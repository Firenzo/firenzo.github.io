<template>

	<div class="imageBox" v-bind:id="sliderData.sliderId">
		<div class="box-header">
			<div class="box-container ml13">
				<h2 v-if="sliderData.hasHeader">{{sliderData.contentData[0].title}}</h2>
				<span class="subtext" v-if="sliderData.hasSubHeader" v-html="sliderData.contentData[0].subtitle"></span>
			</div>
		</div>
		
		<splide v-if="sliderData.type === 'slider'" :options="splideOptions" @splide:moved="splideMoved">
			<splide-slide v-for="slide in sliderData.contentData" :key="slide.slideId">
				<div class="image-slider-container" v-bind:style="{
					paddingTop: 'calc(100% / ('+ slide.aspectRatio + ')' + ' * ' + sliderData.scaleFactor[sliderImageScaleIndex] +')',
					width: 100 * sliderData.scaleFactor[sliderImageScaleIndex] + '%',
					transform: 'translateX( calc( (100% - (100% * ' + sliderData.scaleFactor[sliderImageScaleIndex]+')) /2 ) )',
					/*backgroundImage: 'url(' + require('../../assets/creations/specific/' + slide.imageFolder + slide.image) + ')' */}">
					<img v-lazy="require('../../assets/creations/specific/' + slide.imageFolder + slide.image)" />
				</div>
			</splide-slide>
		</splide>

		<div class="singleImage" v-if="sliderData.type === 'singleImage'">
			<div class="image-slider-container"
				v-bind:style="{
					paddingTop: 'calc(100% / ('+ sliderData.contentData[0].aspectRatio + ')' + ' * ' + sliderData.scaleFactor[sliderImageScaleIndex] +')', 
					width: 100 * sliderData.scaleFactor[sliderImageScaleIndex] + '%',
					transform: 'translateX( calc( (100% - (100% * ' + sliderData.scaleFactor[sliderImageScaleIndex]+')) /2 ) )',
					/*backgroundImage: 'url(' + require('../../assets/creations/specific/' + sliderData.contentData[0].imageFolder + sliderData.contentData[0].image) + ')'*/ }">
					<img v-lazy="require('../../assets/creations/specific/' + sliderData.contentData[0].imageFolder + sliderData.contentData[0].image)" />
			</div>
		</div>


		<div class="longImage" v-if="sliderData.type === 'longImage'">
			<div class="image-slider-container"
				v-bind:style="{/*backgroundImage: 'url(' + require('../../assets/creations/specific/' + sliderData.contentData[0].imageFolder + sliderData.contentData[0].image) + ')',*/
								height: sliderData.contentData[0].desiredHeight[longImageHeightIndex] + 'px',
								width: sliderData.contentData[0].width / sliderData.contentData[0].height * sliderData.contentData[0].desiredHeight[longImageHeightIndex] + 'px'}">
								<img v-lazy="require('../../assets/creations/specific/' + sliderData.contentData[0].imageFolder + sliderData.contentData[0].image)" />
			</div>
		</div>

		<div class="box-footer">
			<div class="box-container ml15" v-if="sliderData.hasFooter" v-html="sliderData.contentData[0].footer"></div>
		</div>
	</div>

</template>

<script>
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import anime from 'animejs/lib/anime.es.js';

	export default {

		props: ["sliderData"],

		data: () => ({
			splideOptions: {
				focus: 'center',
				perPage: 1,
				trimSpace: false,
				gap:'300px',
				padding:'calc( (100% - 750px) / 2)',
				arrows: true,
				pagination: false,

				breakpoints: {
					1899: {
						gap: "100px",
						padding: "calc( (100% - 750px) / 2)",
					},
					1499: {
						gap:"30px",
						padding: "calc( (100% - 750px) / 2)"
					},
					1299: {
						gap: "30px",
						padding: "calc( (100% - 750px) / 2)"
					},

					1250: {
						gap: "20px",
						padding:"5%"
					},

					1023: {
						gap: "20px",
						padding: "calc( (100% - 750px) / 2)"
					},

					833: {
						gap: "20px",
						padding: "5%"
					}
				}
			},

			SplideIndex: 0,
			observer: null,
			smoothScroll: null,
			longImageHeightIndex: 2,
			sliderImageScaleIndex: 0,
			currentX: 0,
			currentY: 0,
			move: null
		}),

		methods: {
			splideMoved(splide){

				//console.log(splide.index);
				//console.log(this.SplideIndex);

				if (splide.index !== this.SplideIndex) {

					if (this.sliderData.hasHeader) {
						this.animateHeaderOut("#"+this.sliderData.sliderId, this.sliderData.contentData[splide.index].title);
						setTimeout( () => this.animateHeaderIn("#"+this.sliderData.sliderId), 400);	
					}
					
					if (this.sliderData.hasSubHeader) {
						this.animateSubTextOut("#"+this.sliderData.sliderId, this.sliderData.contentData[splide.index].subtitle);
						setTimeout( () => this.animateSubTextIn("#"+this.sliderData.sliderId), 400);
					}

					if (this.sliderData.hasFooter) {
						this.animateFooterTextOut("#"+this.sliderData.sliderId, this.sliderData.contentData[splide.index].footer);
						setTimeout( () => this.animateFooterTextIn("#"+this.sliderData.sliderId), 400);
					}
				}

				this.SplideIndex = splide.index;
			},

			animateHeaderIn(uniqueId){

				anime({
					targets: uniqueId + ' .ml13 h2',
					translateX: [40,0],
					translateZ: 0,
					opacity: [0,1],
					easing: "easeOutExpo",
					duration: 600,
					delay: 0
				})
			},

			animateHeaderOut(uniqueId, newText){
				anime({
					targets: uniqueId + ' .ml13 h2',
					translateX: [0,-40],
					opacity: [1,0],
					easing: "easeOutExpo",
					duration: 400,
					delay: 0,
					complete: function(){
						document.querySelector(uniqueId + " .ml13 h2").innerHTML = newText
					} 
				})
			},

			animateSubTextIn(uniqueId){

				anime({
					targets: uniqueId + ' .ml13 span.subtext',
					translateX: [25,0],
					translateZ: 0,
					opacity: [0,1],
					easing: "easeOutExpo",
					duration: 600,
					delay: 0
				})
			},

			animateSubTextOut(uniqueId, newText){
				anime({
					targets: uniqueId + ' .ml13 span.subtext',
					translateX: [0,-25],
					opacity: [1,0],
					easing: "easeOutExpo",
					duration: 400,
					delay: 0,
					complete: function(){
						document.querySelector(uniqueId + " .ml13 span").innerHTML = newText;
					} 
				})
			},

			animateFooterTextIn(uniqueId){

				anime({
					targets: uniqueId + ' .ml15',
					translateX: [25,0],
					translateZ: 0,
					opacity: [0,1],
					easing: "easeOutExpo",
					duration: 600,
					delay: 100
				})
			},

			animateFooterTextOut(uniqueId, newText){
				anime({
					targets: uniqueId + ' .ml15',
					translateX: [0,-25],
					opacity: [1,0],
					easing: "easeOutExpo",
					duration: 400,
					delay: 100,
					complete: function(){
						document.querySelector(uniqueId + " .ml15").innerHTML = newText;
					} 
				})
			},

			onElementObserved(entries){
				entries.forEach(({target, isIntersecting})=>{
					if (!isIntersecting) {
						return
					}

					this.observer.unobserve(target);
				})
			},

			setImageDimensions(){
				//Breakpoints for longImage: 		1300px, 1500px, 1900px
				// Breakpoints for slider Image:	475px, 1366px, 1500px, 1900px, 2560px

				if (window.innerWidth < 475) {
					console.log("small");
					this.longImageHeightIndex = 0;
					this.sliderImageScaleIndex = 0;
				} else if (window.innerWidth >= 475 && window.innerWidth < 1300) {
					console.log("small");
					this.longImageHeightIndex = 0;
					this.sliderImageScaleIndex = 1;
				} else if (window.innerWidth >= 1300 && window.innerWidth < 1366) {
					console.log("medium");
					this.longImageHeightIndex = 1;
					this.sliderImageScaleIndex = 1;
				} else if (window.innerWidth >= 1366 && window.innerWidth < 1500) {
					this.longImageHeightIndex = 1;
					this.sliderImageScaleIndex = 2;
				} else if (window.innerWidth >= 1500 && window.innerWidth < 1900) {
					console.log("big");
					this.longImageHeightIndex = 2;
					this.sliderImageScaleIndex = 3;
				} else if (window.innerWidth >= 1900 && window.innerWidth < 2560){
					console.log("XL");
					this.longImageHeightIndex = 3;
					this.sliderImageScaleIndex = 4;
				} else if (window.innerWidth >= 2560) {
					this.longImageHeightIndex = 3;
					this.sliderImageScaleIndex = 5;
				}
			}

		},

		computed: {

		},

		mounted(){
			this.observer.observe(this.$el);
			this.setImageDimensions();


		},

		beforeDestroy(){
			this.observer.disconnect();
			if (this.sliderData.type === "longImage") {
				window.removeEventListener("resize", this.setImageDimensions);
			}
		},

		created(){
			this.observer = new IntersectionObserver(this.onElementObserved,{root: this.$el, threshold: 0.001});
			if (this.sliderData.type === "longImage" || this.sliderData.type === "slider") {
				window.addEventListener("resize", this.setImageDimensions);
			}
		}
	}
</script>

<!-- <style src="@splidejs/splide/dist/css/themes/splide-default.min.scss"></style> -->

<style lang="scss">
	@import "../../styles/breakpoints.scss";

	div.imageBox{
		background: linear-gradient(218deg, rgba(164,33,181,1) 0%, rgba(112,126,255,1) 100%);
		//height:700px;
		//outline:10px solid rgba(255,255,255,0.22);
		//outline-offset: -10px;
		width:100%;
		box-shadow: inset 0 -10px 0 rgba(255,255,255,0.22),inset 0 10px 0 rgba(255,255,255,0.22);
		padding-bottom:40px;
		margin-bottom:50px;

		@include min-1024{
			width:calc(100vw / 12 * 8);
		}

		@include min-1500{
			width:calc(100vw / 12 * 9);
		}

		@include min-1900{
			width:calc(100vw - 475px);
		}

		div.splide ul.splide__list li{
			padding:10px 0px;
			opacity:0.6;

			transition: opacity 0.3s ease;
			&:hover{
				opacity:0.9;
			}

			&.is-active{
				opacity:1;
			}
		}

		.singleImage{
			width:90%;
			margin:auto;

			@include min-1500{
				width:80%;
				max-width:750px;
			}
		}

		.longImage{
			overflow-y:hidden;
			overflow-x:scroll;
			//padding-left: calc( (100% - 90%) / 2 );
			padding-left: 5%;
			padding-bottom:20px;
			-webkit-overflow-scrolling: touch;
			background-color:rgba(136,136,136,0);
			-webkit-background-clip:text;
			background-clip:text;

			transition:background-color 0.4s ease;

			&::-webkit-scrollbar-track{
				//-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
				border-radius: 10px;
				background-color: transparent;
				margin-left:5vw;
				margin-right:5vw;

				/*@include min-2000{
					margin-left:calc((100vw - 1800px) / 2);
					margin-right:calc((100vw - 1800px) / 2);
				}*/
			}

			&::-webkit-scrollbar{
				height:15px;
				background-color: transparent;
			}

			&::-webkit-scrollbar-thumb{
				border-radius: 10px;
				//-webkit-box-shadow: inset 3px 3px 6px rgba(255,255,255,.3);
				background-color: inherit;
			}

			&:hover{
				background-color:rgba(0,0,0,0.4);
			}

			@include min-834{
				padding-left: calc( (100% - 750px) / 2 );
			}

			@include min-1024{
				padding-left: 5%;
			}

			@include min-1251{
				padding-left: calc( (100% - 750px) / 2);
			}

			.image-slider-container{
				&:after{
					content: " ";
					white-space: pre;
					display: block;
					width: calc(100% + ( (100vw - 90vw) / 2 ));

					@include min-1300{
						width: calc( 100% + ( ( (100vw / 12 * 8) - 750px) / 2) );
					}
				}
			}
		}

		div.box-header{
			margin-top:10px;
			margin-bottom:20px;

			div.box-container{
				width:90%;
				margin-left:auto;
				margin-right:auto;
				padding:1px 0 0 0;
				max-width:750px;
				@include min-1500{
					width:80%;
				}

				h2, h3, span, ul, li{
					color:white !important;
				}

				.ml13{
					.letter{
						display:inline-block;
						line-height: 1em;
					}
				}

				h2{
					font-size:22px !important;
					margin-bottom:10px !important;
					font-family: proxima-nova, sans-serif !important;
					color:white;

					@include min-375{
						font-size: 26px !important;
					}
				}

				span.subtext{
					font-family: proxima-nova, sans-serif;
					-webkit-font-smoothing:antialiased;
					font-size: 16px;
					font-weight:400;
					display:block;
					width:85%;
				}
			}
		}

		div.box-footer{
			margin-top:20px;
			color:white;
			font-family: proxima-nova, sans-serif;
			font-weight:400;

			p{
				color:white;
				font-family: proxima-nova, sans-serif;
				font-weight:400;	
			}

			div.box-container{
				width:90%;
				margin-left:auto;
				margin-right:auto;
				max-width:750px;
				@include min-1500{
					width:80%;
				}

				h3{
					font-family: proxima-nova, sans-serif;
					font-weight:600;
					color:white !important;
					font-size:20px !important;
					margin-bottom:0px;
				}

				p{
					color:white !important;
				}

				ul {
					list-style-type: disc;
					list-style-position: inside;

					li{
						font-family: proxima-nova, sans-serif;
						-webkit-font-smoothing:antialiased;
						font-size: 16px;
						font-weight:400;
						color:white;

						&:not(:last-of-type){
							margin-bottom:10px;
						}
					}
				}
			}
		}
	}

	.splide.is-active .splide__list{
		align-items:center;
	}

	.image-slider-container{
		width:100%;
		//padding-top: calc(100% / (16/9) );
		position:relative;
		//background: #000;
		background-size:cover;
		border-radius:15px;
		animation: loading-image 1s infinite alternate-reverse linear;

		&.loaded{
			animation:none;
			background:none;
		}

		img{
			position:absolute;
			top:0;
			bottom:0;
			left:0;
			right:0;
			border-radius:10px;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-o-user-select: none;
			user-select: none;

			opacity: 0;
			box-shadow: 0 0 0 rgba(0,0,0,0);
			transition:opacity 0.8s ease 0.4s;

			&[lazy=loaded]{
				opacity: 1;
				box-shadow: 0 2px 7px rgba(0,0,0,0.5);
			}
		}
	}

	@keyframes loading-image {
		0% {
			background: rgba(255,255,255,0.4);
		}

		100%{
			background: rgba(255,255,255,0.2);
		}
	}

</style>