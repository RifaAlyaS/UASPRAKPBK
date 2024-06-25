import { createRouter, createWebHistory } from 'vue-router';
import Tugas7 from '../components/tugas7.vue';
import Tugas1 from '../components/tugas1.vue';
import Tugas2 from '../components/tugas2.vue';
import Tugas3 from '../components/tugas3.vue';
import Tugas4 from '../components/tugas4.vue';
import Tugas5 from '../components/tugas5.vue';
import Tugas6 from '../components/tugas6.vue';


const routes = [
  { path: '/tugas7', component: Tugas7 },
  { path: '/tugas1', component: Tugas1 },
  { path: '/tugas2', component: Tugas2 },
  { path: '/tugas3', component: Tugas3 },
  { path: '/tugas4', component: Tugas4 },
  { path: '/tugas5', component: Tugas5 },
  { path: '/tugas6', component: Tugas6 }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;
