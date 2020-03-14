import React, { HtmlHTMLAttributes } from 'react';
import { useState, useRef } from 'react';
import { prependOnceListener } from 'cluster';


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

interface NumProp {
    num: number;
}


export const TextField: React.FC<Props> = ({ handleInput }) => {

    // state is inferred when set to specific typed value
    // const [count, setCount] = useState<number | null>(5);
    const [count, setCount] = useState<NumProp>({ num: 6 });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <h1>The count is {count.num}</h1>
            <input ref={inputRef} onChange={handleInput} />
        </div>
    )
}



// export const TextField: React.FC<{ text: string }> = () => {}