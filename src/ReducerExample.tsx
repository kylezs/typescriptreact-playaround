import React, { useRef, useReducer } from 'react';

type Actions =
    | { type: "add"; text: string }
    | {
        type: "remove";
        idx: number;
    };

interface Todo {
    text: string;
    complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, complete: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
}

interface Props {
    todoText: string
}

export const ReducerExample: React.FC<Props> = ({ todoText }) => {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>
            {(todos).map((todo, i) => {
                return (
                    <div key={i}>
                        <p>{todo.text}</p>
                        <input
                            onClick={() => {
                                dispatch({ type: "remove", idx: i });
                            }}
                            type="radio"
                            checked={todo.complete}
                        />
                    </div>
                )
            })}
            <button
                onClick={() => {
                    dispatch({ type: "add", text: todoText });
                }}
            >
                Add to do to list
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "remove", idx: todos.length - 1 });
                }}
            >
                Remove last item from list
            </button>
        </div >
    )
}