<script>
  let nombre = "";
  let precio = "";

  async function agregarProducto() {
    const response = await fetch("http://localhost:5000/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio })
    });

    if (response.ok) {
      alert("Producto agregado correctamente");
      nombre = "";  // Limpiar el campo nombre
      precio = "";  // Limpiar el campo precio
    } else {
      alert("Error al agregar el producto");
    }
  }
</script>

<form on:submit|preventDefault={agregarProducto}>
  <input bind:value={nombre} placeholder="Nombre del producto" required />
  <input bind:value={precio} type="number" placeholder="Precio" required />
  <button type="submit">Agregar</button>
</form>
