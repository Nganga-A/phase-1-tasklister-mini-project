document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('task-description');
  const taskList = document.getElementById('tasks');


  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (taskInput.value.trim() !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskInput.value;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });


      taskList.appendChild(taskItem);
      taskItem.appendChild(deleteBtn);
      taskInput.value = '';

    }
    event.target.reset()
  });

});


