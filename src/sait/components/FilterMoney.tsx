import React from "react";
import {FilterType} from "../../App";

type ArrMoneyPropsType = {
    banknote: string,
    nominal: number,
    number: string
}

type MoneyPropsType = {
    currentMoney: Array<ArrMoneyPropsType>,
    onClickFilterHandler: (value: FilterType) => void
}

export const FilterMoney = (props: MoneyPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilterHandler("all")}>all</button>
                <button onClick={() => props.onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>
            </div>
        </>
    )
}