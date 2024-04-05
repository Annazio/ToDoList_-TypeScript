import { IToDo } from "../types/data"
import { ToDoItem } from "./ToDoItem"

interface ITodoListProps {
    items: IToDo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const ToDoList: React.FC<ITodoListProps> = (props) =>{
    const {items, toggleTodo, removeTodo} = props;
return(
    <div>
        {
            items.map(todo=> (
            <ToDoItem key={todo.id} {...todo} 
            toggleTodo={toggleTodo} 
            removeTodo={removeTodo}
            />))
        }
    </div>
)
}

export {ToDoList}