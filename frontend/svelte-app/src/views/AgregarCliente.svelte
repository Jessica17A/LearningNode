<script>
    import { navigate } from 'svelte-routing'; 
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
          body: JSON.stringify({
            nombre,
            correo,
            direccion,
            telefono,
          }),
        });
  
        if (!response.ok) {
          const data = await response.json();
          errorMessage = data.message || 'Error al agregar cliente';
          return;
        }
  
      
        alert('Cliente agregado exitosamente');
        navigate('/'); 
      } catch (error) {
        errorMessage = 'Error al conectar con el servidor';
      }
    }
  </script>
  
  <main>
    <h1>Agregar Cliente</h1>
    <form on:submit|preventDefault={agregarCliente}>
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" bind:value={nombre} required />
      </div>
      <div>
        <label for="correo">Correo</label>
        <input type="email" id="correo" bind:value={correo} required />
      </div>
      <div>
        <label for="direccion">Dirección</label>
        <input type="text" id="direccion" bind:value={direccion} />
      </div>
      <div>
        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" bind:value={telefono} />
      </div>
      <button type="submit">Agregar Cliente</button>
    </form>
  
    {#if errorMessage}
      <p style="color: red;">{errorMessage}</p>
    {/if}
  </main>
  
  <style>
    main {
      padding: 20px;
      max-width: 600px;
      margin: auto;
      background-color: #f4f4f4;
      border-radius: 8px;
    }
  
    h1 {
      text-align: center;
    }
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    div {
      margin-bottom: 10px;
    }
  
    label {
      font-size: 1rem;
    }
  
    input {
      padding: 8px;
      font-size: 1rem;
      width: 100%;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  
    button {
      padding: 10px;
      background-color: #333;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 10px;
    }
  
    button:hover {
      background-color: #444;
    }
  </style>
  