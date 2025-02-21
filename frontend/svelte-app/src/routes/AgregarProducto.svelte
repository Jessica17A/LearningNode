<script>
  let nombre = '';
  let precio = '';
  let descripcion = '';

  async function agregarProducto() {
      const nuevoProducto = { nombre, precio: Number(precio), descripcion };

      const res = await fetch('http://localhost:5000/api/productos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoProducto)
      });

      if (res.ok) {
          const data = await res.json();
          alert(data.message);
          window.location.href = '/'; // 🔴 Redirige a Home después de agregar el producto
      } else {
          alert("❌ Error al agregar el producto");
      }
  }
</script>

<main>
  <h1>Agregar Producto</h1>
  <form on:submit|preventDefault={agregarProducto}>
      <label>Nombre</label>
      <input type="text" bind:value={nombre} required>

      <label>Precio</label>
      <input type="number" bind:value={precio} required>

      <label>Descripción</label>
      <input type="text" bind:value={descripcion} required>

      <button type="submit">Agregar</button>
  </form>
</main>

<style>
  main {
      text-align: center;
      padding: 20px;
  }
  form {
      display: flex;
      flex-direction: column;
      width: 300px;
      margin: auto;
  }
  input, button {
      margin: 10px 0;
      padding: 10px;
  }
  button {
      background-color: green;
      color: white;
      border: none;
      cursor: pointer;
  }
</style>
