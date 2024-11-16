// Vue bileşenlerini içe aktarırken relatif dosya yolları kullanın
import Home from '../Home.js';
import MovieDetail from '../MovieDetail.js';
import ActorDetail from '../ActorDetail.js';

// Vue Router ayarları
const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MovieDetail },
  { path: '/actor/:slug', component: ActorDetail },
  { path: '/actor/:slug/movie', component:  Home}
];

// VueRouter'ı global VueRouter değişkeninden kullanın
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

// Vue uygulamasını oluşturun ve router'ı kullanın
Vue.createApp({}).use(router).mount('#app');
