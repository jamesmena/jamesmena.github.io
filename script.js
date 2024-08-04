document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const scheduleTableBody = document.getElementById('scheduleTableBody');
    const hours = [
        '7.00', '8.00', '9.00', '10.00', '11.00', '12.00',
        '13.00', '14.00', '15.00', '16.00', '17.00', '18.00',
        '19.00', '20.00', '21.00', '22.00'
    ];

    // Generar las filas de horas
    hours.forEach(hour => {
        const row = document.createElement('tr');

        // Columna de la hora
        const hourCell = document.createElement('td');
        hourCell.textContent = `${hour} - ${parseFloat(hour) + 1}.00`;
        row.appendChild(hourCell);

        // Columnas de los días
        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        days.forEach(day => {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${day}-${hour}`);
            row.appendChild(cell);
        });

        scheduleTableBody.appendChild(row);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskInput = document.getElementById('task');
        const daySelect = document.getElementById('day');
        const hourSelect = document.getElementById('hour');

        const task = taskInput.value.trim();
        const day = daySelect.value;
        const hour = hourSelect.value;

        if (task && day && hour) {
            const cell = document.getElementById(`${day}-${hour}`);
            if (cell) {
                const existingTasks = cell.textContent;
                cell.textContent = existingTasks ? `${existingTasks}, ${task}` : task;
            }

            // Limpiar el formulario
            taskInput.value = '';
            daySelect.value = '';
            hourSelect.value = '';
        }
    });
});
