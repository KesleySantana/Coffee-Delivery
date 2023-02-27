import { Card } from "./styled"


import { Coffee, Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { Amount, BuyContainer, Counter, Price, PriceAmount } from "./styled";

import { v4 as uuidv4 } from 'uuid';
import { ButtonHTMLAttributes } from "react";


export interface ICoffee {
    src: string,
    type: string,
    name: string,
    info: string,
    id: string,
    value: number,
    quantity: number,
    selected: boolean,
}

export interface CardCoffee {
    dataCoffee:ICoffee,
    onAddCoffeeSelected(dataCoffee:{}):void,
    onChangeQuantity(quantity:number, value:number):void
}



export function CoffeeCard({dataCoffee, onAddCoffeeSelected, onChangeQuantity}:CardCoffee) {
const [quantityCoffee, setQuantityCoffee] = useState<number>(1)
const [valueCoffee, setValueCoffee] = useState<number>(9.65)

    

function handleAddCoffeeSelected() {
    onAddCoffeeSelected(dataCoffee)
}

function handleChangeQuantity(mode: 'sub' | 'add') {

    if(mode === 'sub' && quantityCoffee > 1) {

        const quantity = quantityCoffee - 1
        const teste = (valueCoffee - 9.65).toFixed(2)
        const coffeeValue = parseFloat(teste)
        setValueCoffee(coffeeValue)
        setQuantityCoffee(quantity)
        onChangeQuantity(quantity, coffeeValue) 

    }
    if(mode === 'add' && quantityCoffee < 10) {

        const quantity = quantityCoffee + 1
        const teste = (valueCoffee + 9.65).toFixed(2)
        const coffeeValue = parseFloat(teste)
        setValueCoffee(coffeeValue)
        setQuantityCoffee(quantity)
        onChangeQuantity(quantity, coffeeValue)

    }
}

    


    return(
        <Card>
         <img src={dataCoffee.src} alt="" />
         <span>{dataCoffee.type}</span>
         <h2>{dataCoffee.name}</h2> 
         <p>{dataCoffee.info}</p>

         <BuyContainer>
            <Price>R$<PriceAmount>{valueCoffee}</PriceAmount></Price>
            <Counter>
                <Minus onClick={() => handleChangeQuantity('sub')} size={14} weight="bold" color="#8047F8" cursor="pointer"/>
                <Amount>{quantityCoffee}</Amount>
                <Plus onClick={() => handleChangeQuantity('add')} size={14} weight="bold" color="#8047F8" cursor="pointer" />
            </Counter>
            <button onClick={() => handleAddCoffeeSelected()} >
                <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
            </button>
         </BuyContainer>
         
        </Card>
    )
}