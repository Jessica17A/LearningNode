<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import AgregarProducto from './routes/AgregarProducto.svelte';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/agregar" component={AgregarProducto} />
</Router>
