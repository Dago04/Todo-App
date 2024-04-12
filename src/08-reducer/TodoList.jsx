
import { TodoItem } from "./TodoItem"
export const TodoList = ({ todos = [], doneTodo, deleteTodo }) => {
    return (
        <ul className="w-full flex flex-col gap-4  text-grey-darker flex-1">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} doneTodo={doneTodo} deleteTodo={deleteTodo} />
                ))
            }


        </ul>
    )
}
