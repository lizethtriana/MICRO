async function eliminarSprint(Id) {
    if (Id === 1) {
        alert('No se puede eliminar el Sprint con ID 1');
        return; 
    }
    try {
        const respuesta = await fetch(`http://127.0.0.1:8000/api/sprint/${Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (respuesta.ok) {
            alert('Sprint eliminado correctamente');
        } else {
            alert('Error al eliminar el sprint');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión al eliminar el sprint');
    }
}