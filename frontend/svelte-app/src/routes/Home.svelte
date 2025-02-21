<script>
    import { onMount } from 'svelte';
    import { Link } from 'svelte-routing';

    let productos = [];

    async function cargarProductos() {
        const res = await fetch('http://localhost:5000/api/productos');
        productos = await res.json();
    }

    onMount(cargarProductos);
</script>

<main>
    <h1>Bienvenido a la Tienda</h1>
    <Link to="/agregar">
        <button>Agregar Producto</button>
    </Link>

    <h2>Lista de Productos</h2>
    <ul>
        {#each productos as producto}
            <li>{producto.nombre} - ${producto.precio}</li>
        {/each}
    </ul>
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }
    button {
        padding: 10px;
        margin: 10px;
        background-color: blue;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
