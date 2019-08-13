import VueRouter from 'vue-router';
import Auth from "@/auth/views/Auth";

const routes = [
  { path: '/auth', component: Auth }
]

const router = new VueRouter({
  routes
})

export default router