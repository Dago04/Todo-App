import { useForm } from "../hooks/useForm";
export const TodoAdd = ({ newTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return;
        const todo = {
            id: new Date().getTime(),
            description,
            done: false,
        };
        newTodo(todo);
        onResetForm();
    };
    return (
        <form className="mb-6">
            <div className="flex mt-4 ">
                <input
                    type="text"
                    placeholder="Qué hay que hacer?"
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker transition-transform duration-300 transform hover:scale-115 hover:-translate-y-1"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    className="flex-no-shrink  transition-transform duration-300 transform hover:scale-115 hover:-translate-y-1 "
                    type="submit"
                    onClick={handleSubmit}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#333333"
                            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-6 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};
