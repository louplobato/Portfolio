import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Photo from '../views/PhotoView.vue'
import Projet from '../views/ProjetView.vue'
import YAM from '../views/YouAreMine.vue'
import exil from '../views/Exil.vue'
import Gaudi from '../views/Gaudi.vue'
import Mannequin from '../views/Mannequin.vue'
import arte from '../views/arte.vue'
import Ma from '../views/Ma.vue'
import Contact from '../views/contact.vue'
import about from '../views/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/photo', name: 'photo', component: Photo },
    { path: '/projet', name: 'projet', component: Projet },
    { path: '/yam', name: 'YAM', component: YAM },
    { path: '/exil', name: 'exil', component: exil },
    { path: '/gaudi', name: 'Gaudi', component: Gaudi },
    { path: '/mannequin', name: 'Mannequin', component: Mannequin },
    { path: '/arte', name: 'arte', component: arte },
    { path: '/ma', name: 'Ma', component: Ma },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/about', name: 'about', component: about },


  ]
})

export default router
