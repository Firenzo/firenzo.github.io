import Vue from 'vue'
import Vuex from 'vuex'
import json from '../data/portfolioData.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		menuOpen: false,
		isMobile: false,
		gotHomeFromMenu: false,
		lastScrollPositionOnHome: 0,
		isHome: true,
		json
	},

	mutations: {
		//syncronus way to update state in Vuex store
		SET_MENU_STATUS(state, status){
			state.menuOpen = status;
			//console.log("menu open: " + status);
		},

		SET_MOBILE_STATUS(state, status){
			state.isMobile = status;
			//console.log(status + " " + window.innerWidth);
		},

		SET_USER_GOT_HOME_FROM_MENU(state, status){
			state.gotHomeFromMenu = status;
		},

		SET_LAST_SCROLL_POSITION(state, status){
			state.lastScrollPositionOnHome = status;
			//console.log("Last Scroll Position: " + status)
		},

		SET_IS_HOME_STATUS(state, status){
			state.isHome = status;
		}

	},

	actions: {
		//asyncronous -- Fetched and Grabbed information
		closeMenu(context) {
			context.commit("SET_MENU_STATUS", false);
			document.querySelector("body").classList.remove("no-scroll");
		},

		openMenu(context){
			context.commit("SET_MENU_STATUS", true);
			document.querySelector("body").classList.add("no-scroll");
		},

		userGotHomeFromMenu(context){
			context.commit("SET_USER_GOT_HOME_FROM_MENU", true)
		},

		userDidNotGetHomeFromMenu(context){
			context.commit("SET_USER_GOT_HOME_FROM_MENU", false)
		},

		setLastScrollPosition(context){
			context.commit("SET_LAST_SCROLL_POSITION", window.scrollY)
		},

		checkMobileState(context){
			if (window.innerWidth < 1024) {
				context.commit("SET_MOBILE_STATUS", true)
			} else {
				context.commit("SET_MOBILE_STATUS", false)
			}
			
		},

		setIsHomeToFalse(context){
			context.commit("SET_IS_HOME_STATUS", false)
		},

		setIsHomeToTrue(context){
			context.commit("SET_IS_HOME_STATUS", true)
		}


	},
	modules: {
	},
	getters: {
		//grab information and display it anywhere in the app
		getCurrentMenuState: state => state.menuOpen, // showMenuState(state {return state.menuOpen})

		getProject: state => projectName => {
			return state.json.projects.find(project => project.route === projectName )
		},

		getHomeState: state => state.isHome,

		getMobileState: state => state.isMobile,

		getHowUserGotHome: state => state.gotHomeFromMenu,

		getLastScrollPositionOnHome: state => state.lastScrollPositionOnHome,
	}
})
