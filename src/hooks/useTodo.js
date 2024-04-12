import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-reducer/todoReducer";


const initialState = [

];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []; // Si no hay nada en el local storage, regresa un arreglo vacío
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const newTodo = (todo = {}) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };
        dispatch(action);
    };
    const doneTodo = (id) => {

        const action = {
            type: "[TODO] Done Todo",
            payload: id,
        };
        dispatch(action);
    };

    const deleteTodo = (id) => {
        const action = {
            type: "[TODO] Delete Todo",
            payload: id,
        };
        dispatch(action);
    }

    return {
        todos,
        newTodo,
        doneTodo,
        deleteTodo,
    }
}
