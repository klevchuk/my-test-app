import React, {useState} from "react";

export const UseState = () => {
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onClickHandlerZero = () => {
        setA(a = 0);
        console.log(a)
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerZero}>0</button>
        </>
    )
}