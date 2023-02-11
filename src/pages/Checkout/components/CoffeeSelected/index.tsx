import { Trash } from "phosphor-react";
import { CoffeeSelectedContainer } from "./styled";

import ExpressoTradicional from '../../../Home/components/Shop/assets/ExpressoTradicional.svg'




export function CoffeeSelected() {

    
    return(
        <CoffeeSelectedContainer>
            <div id="teste">
                <img src={ExpressoTradicional} alt="" />
                <div id="Action">
                    <h1>Expresso Tradicional</h1>
                    <button id="ButtonRemove">
                        <Trash size={16} color="#8047F8"/>
                        Remover
                    </button>
                </div>
                <span>R$ 9,90</span>
            </div>
        </CoffeeSelectedContainer>
    )
}