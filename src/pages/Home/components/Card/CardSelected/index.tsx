import { Minus, Plus, Trash } from "phosphor-react";
import { Amount, CoffeeSelectedContainer, Counter } from "./styled";

import ExpressoTradicional from '../../../../../assets/assetsCoffee/ExpressoTradicional.svg'

import { useContext } from "react";
import { CoffeeContext } from "../../../../../contexts/CoffeeContext";
import { ICoffee } from "..";

interface ICardSelectedProps {
    dataCoffee: ICoffee
}

export function CoffeeSelected({ dataCoffee }:ICardSelectedProps) {
const { MyCart, handleRemoveCoffeeSelected} = useContext(CoffeeContext)


    
    return(
        <CoffeeSelectedContainer>                  
            <div id="container">
            <img src={dataCoffee.src} alt="" />
                <div id="action">
                    <h1>{dataCoffee.quantity} <span>{dataCoffee.name}</span></h1>
                    <div id="changeContainer">
                        <Counter>
                            <Minus onClick={() => handleChangeQuantity('sub')} size={12} weight="bold" color="#8047F8" cursor="pointer"/>
                            <Amount>{dataCoffee.quantity}</Amount>
                            <Plus onClick={() => handleChangeQuantity('add')} size={12} weight="bold" color="#8047F8" cursor="pointer" />
                        </Counter>
                        <button onClick={()=> handleRemoveCoffeeSelected(dataCoffee.id)} id="buttonRemove" type="button">
                            <Trash size={14} color="#8047F8"/>
                        </button>
                    </div>
                </div>
                <div id="containerPrice">
                    <span id="price">R${dataCoffee.value}</span>
                </div>
            </div>
        </CoffeeSelectedContainer>
    )
}