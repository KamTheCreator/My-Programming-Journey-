// document.addEventListener('DOMContentLoaded',function(){

//      const taskInput = document.getElementById('taskInput');
//      const addTaskBtn = document.getElementById('addTaskBtn');
//      const taskList = document.getElementById('tasklist');

//      //  Load tasks from local storage
//      const tasks = JSON.parse(localStorage.getItem('item')) || [];

//      //Function to add tasks
//      function rendertask(){
//           tasklist.innerHTML = '';
//           tasks.forEach(function(task,index){
//                const li = document.createElement('li');
//                li.textContent = task.name;
//                if (task.completed){
//                     li.classList.add('completed');   
//                }
//         // ADD EVENT listener to mark task as completed 
//         li.addEventListener(' click',function(){

//           tasks[index].completed = !tasks[index].completed;
//           renderTasks();
//           saveTasks();  
//         });
//         // Add event listener to delete task 
//         li.addEventListener('contextmenu',function(e){
//           e.preventDefault();
//           tasks.splice(index, 1);
//           renderTasks();
//           saveTasks();
//         });
//         tasklist.appendChild(li);

          
//      });
//  }
//  // function to save tasks to local storage 
//  function saveTasks(){
//      localStorage.setItem('tasks',JSON.stringify(tasks));
//  }
//  // Add new task 
//  addTaskBtn.addEventListener('click',function(){

//      const taskName = taskInput.value.trim();
//      if ( taskName  !=='') {
//           tasks.push({name:taskName,completed:false});
//             renderTasks();
//             saveTasks();
//             taskInput.value = '';
//      }
//  });

//  // Render tasks on page load
//  renderTasks();
// });

document.addEventListener('DOMContentLoaded', function() {
     const taskInput = document.getElementById('taskInput');
     const addTaskBtn = document.getElementById('addTaskBtn');
     const taskList = document.getElementById('taskList');
 
     // Load tasks from local storage
     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
 
     // Function to render tasks
     function renderTasks() {
         taskList.innerHTML = '';
         tasks.forEach(function(task, index) {
             const li = document.createElement('li');
             li.textContent = task.name;
             if (task.completed) {
                 li.classList.add('completed');
             }
             // Add event listener to mark task as complete
             li.addEventListener('click', function() {
                 tasks[index].completed = !tasks[index].completed;
                 renderTasks();
                 saveTasks();
             });
             // Add event listener to delete task
             li.addEventListener('contextmenu', function(e) {
                 e.preventDefault();
                 tasks.splice(index, 1);
                 renderTasks();
                 saveTasks();
             });
             taskList.appendChild(li);
         });
     }
 
     // Function to save tasks to local storage
     function saveTasks() {
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }
 
     // Add new task
     addTaskBtn.addEventListener('click', function() {
         const taskName = taskInput.value.trim();
         if (taskName !== '') {
             tasks.push({ name: taskName, completed: false });
             renderTasks();
             saveTasks();
             taskInput.value = '';
         }
     });
 
     // Render tasks on page load
     renderTasks();
 });
 


