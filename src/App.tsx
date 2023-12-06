import React, {useState} from 'react';
import './App.css';
import {Header} from "./sait/components/Header";
import {Body} from "./sait/components/Body";
import {Footer} from "./sait/components/Footer";
import {NewComponent} from "./sait/components/NewComponent";
import {Car} from "./sait/components/Car";
import {Button} from "./sait/components/Button";

function App() {

    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]
    //
    //
    // const Button1Foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    // const Button2Foo = (subscriber: string) => {
    //     console.log(subscriber)
    // }
    // const Button3Foo = () => {
    //     console.log("Im stupid Button")
    // }

    // let a = 1

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


            {/*<Header title="header"/>*/}
            {/*<Body title="body"/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<Car/>*/}
            {/*<Button name="chanel1" callBack={() => Button1Foo("Im Vasya", 21)}/>*/}
            {/*<Button name="chanel2" callBack={() => Button2Foo("Im Ivan")}/>*/}
            {/*<Button name="chanel3" callBack={Button3Foo}/>*/}
            {/*<Footer title="footer"/>*/}


        </>
    )
}

export default App;
