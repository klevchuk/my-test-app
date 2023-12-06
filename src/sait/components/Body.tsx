

export function Body() {
    // const myFirstSubscriberVasya = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello, Im Vasya")
    // }
    // const mySecondSubscriberIvan = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello, Im Ivan")
    // }

        const onClickHandler=(name:string)=>{
            console.log(name)
        }

//     const foo1 = () => {
// // ничего не передавать, но в консоль 100200
//         console.log(100200)
//     }
//
//     const foo2 = (num: number) => {
// // передать число 100200
//         console.log(num)
//     }

    return (
        <div>
            {/*<h3>{props.title}</h3>*/}
            <button onClick={ (event) => onClickHandler("Vasya")}>MyYouTubeChanel-1</button>
            <button onClick={ (event) =>   onClickHandler("Ivan")}>MyYouTubeChanel-2</button>
        {/*<button onClick={foo1}>1</button>*/}
        {/*<button onClick={ (event) => foo2(100200)}>2</button>*/}

        </div>
    )
}