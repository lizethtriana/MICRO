document.addEventListener('DOMContentLoaded', function () {
  
    async function fetchRetroItems() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/retro_item'); 
            const result = await response.json();
            if (response.ok) {
                displayRetroItems(result.data); 
            } else {
                alert(result.data || 'Error al obtener los retro items');
            }
        } catch (error) {
            alert('Error inesperado al obtener los retro items');
            console.error(error);
        }
    }

    
    function displayRetroItems(retroItems) {
        const retroItemsTabla = document.getElementById('retroItemsTabla'); 
        retroItemsTabla.innerHTML = ''; 

        retroItems.forEach(item => {
            const row = document.createElement('tr');

            
            const idCell = document.createElement('td');
            idCell.textContent = item.id; 
            row.appendChild(idCell);

            const sprintIdCell = document.createElement('td');
            sprintIdCell.textContent = item.sprint_id; 
            row.appendChild(sprintIdCell);

            const categoriaCell = document.createElement('td');
            categoriaCell.textContent = item.categoria; 
            row.appendChild(categoriaCell);

            const descripcionCell = document.createElement('td');
            descripcionCell.textContent = item.descripcion; 
            row.appendChild(descripcionCell);

            const cumplidaCell = document.createElement('td');
            cumplidaCell.textContent = item.cumplida ? 'Sí' : 'No'; 
            row.appendChild(cumplidaCell);

            const fechaRevisionCell = document.createElement('td');
            fechaRevisionCell.textContent = item.fecha_revision || 'N/A'; 
            row.appendChild(fechaRevisionCell);

            const createdAtCell = document.createElement('td');
            createdAtCell.textContent = item.created_at; 
            row.appendChild(createdAtCell);

            const updatedAtCell = document.createElement('td');
            updatedAtCell.textContent = item.updated_at; 
            row.appendChild(updatedAtCell);

            
            retroItemsTabla.appendChild(row);
        });
    }

    
    fetchRetroItems();
});