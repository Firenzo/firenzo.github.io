<template>
    <div id="app">
        <AppMenu v-if="mobileState"></AppMenu>
        <header>
            <div class="backbuttonspace">
              <transition name="fade" mode="out-in">
                <router-link @click.native="SetUserGotHomeFromMenu" v-if="currentRoute.substring(0, 11) == '/creations/'" to="/creations" class="backbutton" ><fa-icon :icon="['fas', 'chevron-left']" />Back</router-link>
              </transition>
            </div>
            
            <transition name="justfade" mode="out-in">
              <div class="menu-open" @click="ChangeMenuState" v-if="this.showNavBar && mobileState">
                  <fa-icon :icon="['fas', 'bars']" />
              </div>
            </transition>
        </header>

        <DesktopMenu v-if="!mobileState"></DesktopMenu>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
  </div>
</template>

<script>
    export default {

        data: () => ({
            showNavBar: true,
            appLastScrollPosition: 0,
        }),

        methods: {
            ChangeMenuState(){
                if (this.$store.getters.getCurrentMenuState == 1) {
                    this.$store.dispatch("closeMenu")
                } else if (this.$store.getters.getCurrentMenuState == 0) {
                    this.$store.dispatch("openMenu")
                }
            },

            onScroll(){
              const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
              if (currentScrollPosition < 0) {
                return
              }

              if (Math.abs(currentScrollPosition - this.appLastScrollPosition) < 60) {
                return
              }

              this.showNavBar = currentScrollPosition < this.appLastScrollPosition

              this.appLastScrollPosition = currentScrollPosition
            },

            SetUserGotHomeFromMenu(){
              this.$store.dispatch("userDidNotGetHomeFromMenu");
            },

            changeMobileState(){
              this.$store.dispatch("checkMobileState");
            }
        },

        computed: {
            menuState(){
                return this.$store.getters.getCurrentMenuState;
            },

            currentRoute(){
              return this.$route.path;
            },

            userGotHomeFromMenu(){
              return this.$store.getters.getHowUserGotHome
            },

            mobileState(){
              return this.$store.getters.getMobileState
            }
        },

        mounted(){
            //console.log(this.$store.state);
            this.changeMobileState();
        },

        created() {
          window.addEventListener("resize", this.changeMobileState);
          window.addEventListener('scroll', this.onScroll);
        },
        destroyed() {
          window.removeEventListener("resize", this.changeMobileState);
          window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>

<style lang="scss">

@import "./styles/main.scss";

.v-lazy-image {
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .v-lazy-image-loaded {
    opacity: 1;
  }

.fade-enter{
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-to{
  opacity: 1;
  transform: translateX(0em);
}

.fade-enter-active{
  transition: all 0.4s ease;
}

.fade-leave{
  opacity: 1;
  transform: translateX(0em);
}

.fade-leave-to{
  opacity: 0;
  transform: translateX(-2em);

}

.fade-leave-active{
  transition: all 0.4s ease;
}





.justfade-enter{
  opacity: 0;
}

.justfade-enter-to{
  opacity: 1;
}

.justfade-enter-active{
  transition: all 0.4s ease;
}

.justfade-leave{
  opacity: 1;
}

.justfade-leave-to{
  opacity: 0;

}

.justfade-leave-active{
  z-index: 500;
  transition: all 0.4s ease;
}

</style>
