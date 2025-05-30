async function actualizarSprint(event) {
    event.preventDefault();
    const id = document.getElementById('sprintId').value;
    const nombre = document.getElementById('nombre').value;
    const fecha_inicio = document.getElementById('fecha_inicio').value;
    const fecha_fin = document.getElementById('fecha_fin').value;

    try {
        const respuesta = await fetch(`http://127.0.0.1:8000/api/sprint/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                fecha_inicio,
                fecha_fin
            })
        });

        const data = await respuesta.json().catch(() => ({}));
        if (respuesta.ok) {
            document.getElementById('mensaje').textContent = 'Sprint actualizado correctamente';
            document.getElementById('mensaje').style.color = '#27ae60'; // Verde para éxito
            cargarSprints();
            // Oculta el mensaje después de 3 segundos
            setTimeout(() => {
                document.getElementById('mensaje').textContent = '';
            }, 3000);
        } else {
            document.getElementById('mensaje').textContent = 'Error al actualizar el sprint: ' + (data.detail || data.message || respuesta.status);
            document.getElementById('mensaje').style.color = '#c0392b'; // Rojo para error
        }
    } catch (error) {
        document.getElementById('mensaje').textContent = 'Error de conexión al actualizar el sprint';
        document.getElementById('mensaje').style.color = '#c0392b';
    }
}