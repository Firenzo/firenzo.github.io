import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//FontAwesome Free Solid
import { faTimes, faBars, faEnvelope, faMapMarkerAlt, faChevronLeft, faUser, faPencilRuler, faFileAlt, faComments, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Fontawesome Brands
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


//free-solic
library.add(faTimes, faBars, faEnvelope, faMapMarkerAlt, faChevronLeft, faUser, faPencilRuler, faFileAlt, faComments, faChevronRight)

//free-brands
library.add(faLinkedin, faGithub)

Vue.component('fa-icon', FontAwesomeIcon)