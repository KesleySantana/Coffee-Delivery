import { Trash } from "phosphor-react";
import { CoffeeSelectedContainer } from "./styled";

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
                    <button onClick={()=> handleRemoveCoffeeSelected(dataCoffee.id)} id="buttonRemove" type="button">
                        <Trash size={14} color="#8047F8"/>
                        Remover
                    </button>
                </div>
                <div id="containerPrice">
                    <span id="price">R${dataCoffee.value}</span>
                </div>
            </div>
        </CoffeeSelectedContainer>
    )
}