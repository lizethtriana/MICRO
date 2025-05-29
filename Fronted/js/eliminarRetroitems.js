async function eliminarRetroItem(Id) {
    try {
        const respuesta = await fetch(`http://127.0.0.1:8000/api/retro_item/${Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (respuesta.ok) {
            alert('Retro_item eliminado correctamente');
        } else {
            alert('Error al eliminar el Retro_item');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión al eliminar el Retro_item');
    }
}