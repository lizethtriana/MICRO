document.addEventListener('DOMContentLoaded', function() {
    
    async function fetchSprints() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/sprint/{id}');
            const result = await response.json();
            if (response.ok) {
                displaySprints(result.data); 
            } else {
                alert(result.data || 'Error al obtener los sprints');
            }
        } catch (error) {
            alert('Error inesperado al obtener los sprints');
            console.error(error);
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
            creadoCell.textContent = sprint.creado; 
            row.appendChild(creadoCell);

            const actualizadoCell = document.createElement('td');
            actualizadoCell.textContent = sprint.actualizado; 
            row.appendChild(actualizadoCell);

            
            sprintsTabla.appendChild(row);
        });
    }

   
    fetchSprints();
});