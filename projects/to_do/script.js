const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerText = input.value;
    task.classList.add('taskAdded');
    toDoContainer.appendChild(task);

    input.value = "";

    task.addEventListener('click', () => {
        task.classList.add('taskCompleted');
    });

    task.addEventListener('dblclick', () => {
        toDoContainer.removeChild(task); 
    });
});





