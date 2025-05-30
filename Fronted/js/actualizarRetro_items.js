async function actualizarRetroItem(event) {
    event.preventDefault();
    const id = document.getElementById('retroItemId').value;
    const sprint_id = document.getElementById('sprint_id').value;
    const categoria = document.getElementById('categoria').value;
    const descripcion = document.getElementById('descripcion').value;
    const cumplida = document.getElementById('cumplida').value;
    const fecha_revision = document.getElementById('fecha_revision').value;

    // Opcional: imprime los datos enviados
    console.log({
        sprint_id: Number(sprint_id),
        categoria,
        descripcion,
        cumplida: cumplida === '' ? null : cumplida === 'true',
        fecha_revision: fecha_revision === '' ? null : fecha_revision
    });

    try {
        const respuesta = await fetch(`http://127.0.0.1:8000/api/retro_item/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sprint_id: Number(sprint_id),
                categoria,
                descripcion,
                cumplida: cumplida === '' ? null : cumplida === 'true',
                fecha_revision: fecha_revision === '' ? null : fecha_revision
            })
        });

        const data = await respuesta.json().catch(() => ({}));
        if (respuesta.ok) {
            document.getElementById('mensaje').textContent = 'Retro_item actualizado correctamente';
            cargarRetroItems();
        } else {
            document.getElementById('mensaje').textContent = 'Error al actualizar el Retro_item: ' + (data.detail || data.message || respuesta.status);
        }
    } catch (error) {
        document.getElementById('mensaje').textContent = 'Error de conexión al actualizar el Retro_item';
    }
}