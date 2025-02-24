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
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
            {#each productos as producto}
                <tr>
                    <td>{producto.nombre}</td>
                    <td>Q{producto.precio}</td>
                    <td>{producto.descripcion}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
    }

    main {
        text-align: center;
        padding: 40px 20px;
        background-color: #f4f7fc;
        min-height: 100vh;
    }

    h1 {
        color: #333;
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    h2 {
        color: #555;
        font-size: 1.8rem;
        margin: 20px 0;
    }

    button {
        padding: 12px 25px;
        margin: 20px 0;
        background-color: #28cfdc;
        color: white;
        font-size: 1rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    button:hover {
        background-color: #1ac0c0;
        transform: translateY(-2px);
    }

    button:active {
        transform: translateY(1px);
    }

    table {
        width: 80%;
        margin-top: 30px;
        border-collapse: collapse;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 12px 18px;
        text-align: left;
        font-size: 1rem;
    }

    th {
        background-color: #f2f2f2;
        color: #333;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f1f1f1;
    }

    td {
        color: #555;
    }
</style>
