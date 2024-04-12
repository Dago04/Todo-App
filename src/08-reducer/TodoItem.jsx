export const TodoItem = ({ todo, doneTodo, deleteTodo }) => {
    const handleDone = () => {
        doneTodo(todo.id);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };
    return (
        <>
            <li className="flex flex-col flex-wrap shadow appearance-none border rounded p-3 sm:flex-row  sm:justify-between md:flex-row lg:flex-row ">
                <div className=" flex gap-2 items-center">
                    <input
                        type="checkbox"
                        className="h-auto "
                        checked={todo.done}
                        disabled
                    />
                    {todo.done ? (
                        <span className="text-green-600 line-through">
                            {todo.description}
                        </span>
                    ) : (
                        <span className="text-red-600">{todo.description}</span>
                    )}

                </div>

                <div className="mt-5 sm:mt-0">
                    <button
                        className="p-2  transition-transform duration-300 transform hover:scale-115 hover:-translate-y-1"
                        onClick={handleDone}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 48 48"
                        >
                            <g
                                fill="none"
                                stroke="#65a30d"
                                strokeLinejoin="round"
                                strokeWidth="4"
                            >
                                <path d="M34 5H8a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z" />
                                <path
                                    strokeLinecap="round"
                                    d="M44 13.002V42a2 2 0 0 1-2 2H13.003M13 20.486l6 5.525l10-10.292"
                                />
                            </g>
                        </svg>
                    </button>
                    <button
                        className="p-2 transition-transform duration-300 transform hover:scale-115 hover:-translate-y-1"
                        onClick={handleDelete}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#dc2626"
                                d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
                            />
                        </svg>
                    </button>
                </div>
            </li>
        </>
    );
};
