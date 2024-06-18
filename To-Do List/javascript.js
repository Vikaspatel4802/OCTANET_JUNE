// scripts.js
document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    // Get form values
    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskCategory = document.getElementById('task-category').value;
    const taskLabels = document.getElementById('task-label').value.split(',');

    // Create task element
    const task = document.createElement('li');
    task.className = 'task';

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';
    taskInfo.innerHTML = `
        <h3>${taskName}</h3>
        <p>Deadline: ${taskDeadline}</p>
        <p>Category: ${taskCategory}</p>
        <p class="task-priority-${taskPriority}">Priority: ${taskPriority.charAt(0).toUpperCase() + taskPriority.slice(1)}</p>
    `;

    const taskLabelsDiv = document.createElement('div');
    taskLabelsDiv.className = 'task-labels';
    taskLabels.forEach(label => {
        const labelSpan = document.createElement('span');
        labelSpan.textContent = label.trim();
        taskLabelsDiv.appendChild(labelSpan);
    });

    task.appendChild(taskInfo);
    task.appendChild(taskLabelsDiv);

    // Add task to list
    document.getElementById('task-list').appendChild(task);

    // Clear form
    document.getElementById('task-form').reset();
}
