<script>
  import { Router, Route } from 'svelte-routing';
  import Navbar from './components/Navbar.svelte';  // Importa el Navbar desde la carpeta /components
  import Home from './views/Home.svelte';  // Ahora Home está en /views/
  import AgregarProducto from './views/AgregarProducto.svelte';  // Ahora AgregarProducto está en /views/
  import AgregarCliente from './views/AgregarCliente.svelte'; // Importar la vista de agregar cliente

</script>

<Router>
 
  <Navbar />

 
  <Route path="/" component={Home} />
  <Route path="/agregarProducto" component={AgregarProducto} />
  <Route path="/agregarCliente" component={AgregarCliente} /> <!-- Ruta para agregar cliente -->
  
</Router>
