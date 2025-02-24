<script>
  import { navigate } from 'svelte-routing';
  import Swal from 'sweetalert2';

  let nombre = '';
  let correo = '';
  let direccion = '';
  let telefono = '';
  let errorMessage = '';

  async function agregarCliente() {
    try {
      const response = await fetch('http://localhost:5000/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, direccion, telefono }),
      });

      if (!response.ok) {
        const data = await response.json();
        errorMessage = data.message || 'Error al agregar cliente';
        return;
      }

      
      await Swal.fire({
        title: 'Cliente agregado',
        text: 'El cliente ha sido agregado exitosamente.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      
      navigate('/');
    } catch (error) {
      errorMessage = 'Error al conectar con el servidor';
    }
  }
</script>

<main class="container mt-5">
  <div class="card shadow-sm p-4">
    <h1 class="text-center">Agregar Cliente</h1>
    <form on:submit|preventDefault={agregarCliente} class="mt-3">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" id="nombre" bind:value={nombre} class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo</label>
        <input type="email" id="correo" bind:value={correo} class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="direccion" class="form-label">Dirección</label>
        <input type="text" id="direccion" bind:value={direccion} class="form-control" />
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="tel" id="telefono" bind:value={telefono} class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary w-100">Agregar Cliente</button>
    </form>

    {#if errorMessage}
      <p class="text-danger mt-3">{errorMessage}</p>
    {/if}
  </div>
</main>
