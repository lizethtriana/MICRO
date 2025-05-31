document.addEventListener('DOMContentLoaded', function() {
    
   async function fetchSprints() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/sprints'); 
        const result = await response.json();
        if (response.ok) {
            // Asegúrate de que result es un array
            if (Array.isArray(result.data)) {
                displaySprints(result.data); 
            } else {
                alert('La respuesta no es un array');
                console.error('Respuesta inesperada:', result);
            }
        } else {
            alert('Error al obtener los retro items');
        }
    } catch (error) {
        alert('Error inesperado al obtener los sprints');
        console.error(error); // Esta línea debe estar aquí
    }
}

    
    function displaySprints(sprints) {
        const sprintsTabla = document.getElementById('sprintsTabla'); 
        sprintsTabla.innerHTML = ''; 

        sprints.forEach(sprint => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = sprint.id; 
            row.appendChild(idCell);

            const nombreCell = document.createElement('td');
            nombreCell.textContent = sprint.nombre;
            row.appendChild(nombreCell);

            const fechaInicioCell = document.createElement('td');
            fechaInicioCell.textContent = sprint.fecha_inicio;
            row.appendChild(fechaInicioCell);

            const fechaFinCell = document.createElement('td');
            fechaFinCell.textContent = sprint.fecha_fin;
            row.appendChild(fechaFinCell);

            const creadoCell = document.createElement('td');
            creadoCell.textContent = sprint.created_at; 
            row.appendChild(creadoCell);

            const actualizadoCell = document.createElement('td');
            actualizadoCell.textContent = sprint.updated_at; 
            row.appendChild(actualizadoCell);

            sprintsTabla.appendChild(row);
        });
    }

    fetchSprints();
});