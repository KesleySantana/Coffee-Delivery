import { Trash } from "phosphor-react";
import { CoffeeSelectedContainer } from "./styled";

import ExpressoTradicional from '../../Shop/assets/ExpressoTradicional.svg'




export function CoffeeSelected() {

    
    return(
        <CoffeeSelectedContainer>          
                <div id="container">
                    <img src={ExpressoTradicional} alt="" />
                    <div id="action">
                        <h1> <span>2</span> Expresso Tradicional</h1>
                        <button id="buttonRemove" type="button">
                            <Trash size={14} color="#8047F8"/>
                            Remover
                        </button>
                    </div>
                    <div id="containerPrice">
                        <span id="price">R$ 9.90</span>
                    </div>
                </div>
        </CoffeeSelectedContainer>
    )
}