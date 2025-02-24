<script>
    import { navigate } from 'svelte-routing'; // Importar la función navigate desde svelte-routing
    
   
    function irAgregarProducto() {
      navigate('/agregarProducto'); // Navegar a la ruta /agregarProducto
    }

    function irAgregarCliente() {
      navigate('/agregarCliente'); // Navegar a la ruta /agregarCliente
    }
  </script>
  
  <nav>
    <ul>
      <li><a href="/" class="nav-item">Home</a></li>
      <li><a href="#" on:click={irAgregarProducto} class="nav-item">Productos</a></li> 
   <li><a href="#" on:click={irAgregarCliente} class="nav-item">Clientes</a></li> <!-- Agregar un enlace para ir a la vista de agregar cliente -->
    </ul>
  </nav>
  
  <style>
    nav {
      background-color: #333;
      padding: 15px;
    }
  
    ul {
      display: flex;
      list-style-type: none;
      gap: 20px;
      margin: 0; /* Elimina márgenes en la lista */
      padding: 0; /* Elimina padding en la lista */
    }
  
    li {
      font-size: 1.2rem;
      display: flex; /* Alinea los elementos horizontalmente */
      align-items: center; /* Centra verticalmente el contenido */
    }
  
    .nav-item {
      color: white;
      text-decoration: none;
      padding: 5px 10px; /* Añade espacio alrededor del texto */
      cursor: pointer;
    }
  
    .nav-item:hover {
      text-decoration: underline;
    }
  </style>
  