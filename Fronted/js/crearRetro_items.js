document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['retroItemForm'];
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const sprint_id = form['sprint_id'].value;
        const categoria = form['categoria'].value;
        const descripcion = form['descripcion'].value;
        const cumplida = categoria === 'accion' ? form['cumplida'].checked : null;
        const fecha_revision = form['fecha_revision'].value || null;

        if (!sprint_id || !categoria || !descripcion) {
            alert('Por favor, complete todos los campos requeridos.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/retro_item', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sprint_id,
                    categoria,
                    descripcion,
                    cumplida,
                    fecha_revision
                })
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.data || 'Retro item guardado correctamente.');
                form.reset();
            } else {
                alert(result.data || 'Error al guardar el retro item');
            }
        } catch (error) {
            alert('Error inesperado');
            console.error(error);
        }
    });

    // Mostrar/ocultar checkbox según categoría
    form['categoria'].addEventListener('change', function () {
        const checkboxDiv = form['cumplida'].closest('div');
        if (this.value === 'accion') {
            checkboxDiv.style.display = 'block';
        } else {
            checkboxDiv.style.display = 'none';
        }
    });

    // Inicialmente ocultar checkbox si categoría no es 'acción'
    if (form['categoria'].value !== 'accion') {
        form['cumplida'].closest('div').style.display = 'none';
    }
});
