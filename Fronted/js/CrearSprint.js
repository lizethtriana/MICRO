const form = document.forms['crearsprintForm'];

document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['personasForm'];
    if (!form) return;
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const nombre = form['nombreInput'].value;
        const fecha_inicio = form['fechaInicioInput'].value;
        const fecha_fin = form['fechaFinInput'].value;
        try {
            const response = await fetch('http://127.0.0.1:8000/api/sprint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, fecha_inicio, fecha_fin })
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.data || 'Sprint guardado correctamente.');
                form.reset();
            } else {
                alert(result.data || 'Error al guardar el sprint');
            }
        } catch (error) {
            alert('Error inesperado');
            console.error(error);
        }
           });
});