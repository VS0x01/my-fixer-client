import VueRouter from 'vue-router';
import SignIn from '@/auth/views/SignIn';
import SignUp from '@/auth/views/SignUp';

const routes = [
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
];

const router = new VueRouter({
  routes
});

export default router