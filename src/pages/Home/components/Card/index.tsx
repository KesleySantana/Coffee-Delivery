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
    onAddCoffeeSelected(id:string): void
}

// interface CardCoffee {
//     coffee:ICoffee,
//     selected: boolean,
//     value: number,
//     quantity: number,
//     onRemoveCoffee(id:string):void,
//     onAddCoffeeSelected: (id:string) => void
// }



export function CoffeeCard({ ...props }:ICoffee) {
    const [quantityCoffee, setQuantityCoffee] = useState(1)


    
    const coffeeValueCalc = (9.65 * quantityCoffee).toFixed(2)
    const coffeeValue = parseFloat(coffeeValueCalc)
    
    
    function handleAddQuantity() {
        if( quantityCoffee < 10) {
            setQuantityCoffee(quantityCoffee + 1)
        }
    }
    
    function handleReduceQuantity() {
        if (quantityCoffee > 1) {
            setQuantityCoffee(quantityCoffee - 1)
        }
    }
    
    
    function handleAddCoffeeSelected() {
        props.onAddCoffeeSelected(props.id)
    }


    
    // function handleAddCoffeeSelected() {

    //     const cardSelected = {
    //         name: props.name,
    //         id: props.id,
    //         type: props.type,
    //         src: props.src,
    //         info: props.info,
    //         value: props.value,
    //         quantity: props.quantity,
    //         selected: true     
    //     }
    // }


    


    return(
        <Card>
         <img src={props.src} alt="" />
         <span>{props.type}</span>
         <h2>{props.name}</h2> 
         <p>{props.info}</p>

         <BuyContainer>
            <Price>R$<PriceAmount>{coffeeValue}</PriceAmount></Price>
            <Counter>
                <Minus onClick={handleReduceQuantity} size={14} weight="bold" color="#8047F8" cursor="pointer"/>
                <Amount>{quantityCoffee}</Amount>
                <Plus onClick={handleAddQuantity} size={14} weight="bold" color="#8047F8" cursor="pointer" />
            </Counter>
            <button onClick={() => handleAddCoffeeSelected()} >
                <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
            </button>
         </BuyContainer>
         
        </Card>
    )
}