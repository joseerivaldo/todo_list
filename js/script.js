//Função que adiciona tarefa
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value
    
    if(taskTitle){
        //clona o template
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true)
        
        
    }
}

const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e){

    e.preventDefault()
    
    addTask();

})