export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [
                ...initialState,
                action.payload,
            ]
        case '[TODO] Done Todo':

            return initialState.map((todo) => todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case '[TODO] Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload);


        default:
            return initialState;
    }
}