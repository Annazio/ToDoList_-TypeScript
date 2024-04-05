import { IToDo } from "../types/data"

interface ITodoItem extends IToDo{
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const ToDoItem: React.FC<ITodoItem> = (props) =>{
    const {id, title, complete, removeTodo, toggleTodo } = props;

return(
    <div>
        <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
        {title}
        <button onClick={() => removeTodo(id)}>X</button>
    </div>
)
}

export {ToDoItem}