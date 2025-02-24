import Home from '../views/Home.svelte';
import AgregarProducto from '../views/AgregarProducto.svelte';

export const routes = [
  { path: '/', component: Home },
  { path: '/agregar', component: AgregarProducto },
];
