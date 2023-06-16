const item = document.getElementById('item');
const todos = document.getElementById('todos');

item.addEventListener(
    'keyup',
    function (event) {
        if (event.key == "Enter") {
            addTodo(this.value);
            this.value = "";
        }
    }
)
const addTodo = (item) =>{
    const listItem = document.createElement("li")
    listItem.innerHTML = `
            ${item}
            <i class="fas fa-times"></i>`;

            listItem.addEventListener('click', function() {
                this.classList.toggle('done')
            })

            listItem.querySelector('i').addEventListener('click',()=>{
                listItem.remove()
            })
            
            todos.appendChild(listItem)
}