
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import { useTodo } from "../hooks";

export const TodoApp = () => {
    const { todos, newTodo, doneTodo, deleteTodo } = useTodo();

    const todoLenght = todos.length;
    const completedTodoLength = todos.filter(todo => todo.done).length;
    const pendingTodoLength = todoLenght - completedTodoLength;

    return (
        <>
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-5/6 lg:max-w-4xl lg:mx-auto">
                <h1 className="text-grey-darkest">
                    <em>Tareas: {todoLenght}</em> | <em>Pendientes: {pendingTodoLength} </em>
                </h1>
                <TodoAdd newTodo={newTodo} />
                <TodoList todos={todos} doneTodo={doneTodo} deleteTodo={deleteTodo} />
            </div >
        </>
    );
};
