import { CoffeeCard } from "../Card";
import { CardsContainer, ShopContainer } from "./styled";
import { v4 as uuidv4 } from 'uuid';
import { ICoffee } from "../Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ExpressoTradicional from "./assets/ExpressoTradicional.svg";
import ExpressoAmericano from "./assets/ExpressoAmericano.svg";
import ExpressoCremoso from "./assets/ExpressoCremoso.svg";
import ExpressoGelado from "./assets/ExpressoGelado.svg";
import CafeComLeite from "./assets/CaféComLeite.svg";
import Latte from "./assets/Latte.svg";
import Capuccino from "./assets/Capuccino.svg";
import Macchiato from "./assets/Macchiato.svg";
import Mocaccino from "./assets/Mocaccino.svg";
import ChocolateQuente from "./assets/ChocolateQuente.svg";
import Cubano from "./assets/Cubano.svg";
import Havaiano from "./assets/Havaiano.svg";
import Arabe from "./assets/Árabe.svg";
import Irlandes from "./assets/Irlandês.svg";

import { createContext, useContext, useEffect, useState } from "react";
import { CoffeeSelected } from "../Card/CardSelected";

import { CoffeeContext } from "../../../../contexts/CoffeeContext";





export function Shop() {
const { cardProps, handleAddCoffeeSelected, MyCart } = useContext(CoffeeContext)



function onChangeQuantity(id:string, quantity:number, value:number) {
    const coffeeFound = cardProps.find(item => item.id === id)
    if(coffeeFound){
        coffeeFound.quantity = quantity
        coffeeFound.value = value
    }
}

    return(

        <div>
        
            <ShopContainer>
            <ToastContainer
                position="top-right"
                autoClose={800}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="colored"
            />
                <h1>Nossos cafés</h1>
                <CardsContainer>
                    {cardProps.map((product) => (
                        <CoffeeCard
                         key={product.id}
                         dataCoffee={{...product}}
                         onChangeQuantity={(quantity:number, value:number)=>onChangeQuantity(product.id, quantity, value)}
                         onAddCoffeeSelected={()=>handleAddCoffeeSelected(product)}
                        />
                    ))}
                </CardsContainer>
            </ShopContainer>
        </div>
    )
}