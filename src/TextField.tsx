import React from 'react';
import { useRef } from 'react';


// defines structure of an object
interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok: boolean;
    i?: number; // Optional prop
    fn: (arg1: number) => string;
    person: Person;
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const TextField: React.FC<Props> = ({ handleInput }) => {

    // state is inferred when set to specific typed value
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleInput} />
        </div>
    )
}



// export const TextField: React.FC<{ text: string }> = () => {}