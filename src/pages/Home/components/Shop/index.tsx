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



// const cardProps:ICoffee[] = [
//     { id:uuidv4(),  src:ExpressoTradicional, type:"Tradicional", name:"Expresso Tradicional", info:"O tradicional café feito com água quente e grãos moídos", quantity: 1, value: 9.65, selected: false },
    
//     { id:uuidv4(), src:ExpressoAmericano, type:"Tradicional", name:"Expresso Americano", info:"Expresso diluído, menos intenso que o tradicional", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:ExpressoCremoso, type:"Tradicional", name:"Expresso Cremoso", info:"Café expresso tradicional com espuma cremosa", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:ExpressoGelado, type:"Tradicional", name:"Expresso Gelado", info:"Bebida preparada com café expresso e cubos de gelo", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:CafeComLeite, type:"Tradicional", name:"Café com Leite", info:"Meio a meio de expresso tradicional com leite vaporizado", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Latte, type:"Tradicional", name:"Latte", info:"Uma dose de café expresso com o dobro de leite e espuma cremosa", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Capuccino, type:"Tradicional", name:"Capuccino", info:"Bebida com canela feita de doses iguais de café, leite e espuma", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Macchiato, type:"Tradicional", name:"Macchiato", info:"Café expresso misturado com um pouco de leite quente e espuma", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Mocaccino, type:"Tradicional", name:"Mocaccino", info:"Café expresso com calda de chocolate, pouco leite e espuma", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:ChocolateQuente, type:"Tradicional", name:"Chocolate Quente", info:"Bebida feita com chocolate dissolvido no leite quente e café", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Cubano, type:"Tradicional", name:"Cubano", info:"Drink gelado de café expresso com rum, creme de leite e hortelã", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Havaiano, type:"Tradicional", name:"Havaiano", info:"Bebida adocicada preparada com café e leite de coco", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Arabe, type:"Tradicional", name:"Árabe", info:"Bebida preparada com grãos de café árabe e especiarias", quantity: 1, value: 9.65, selected: false },

//     { id:uuidv4(), src:Irlandes, type:"Tradicional", name:"Irlandês", info:"Bebida a base de café, uísque irlandês, açúcar e chantilly", quantity: 1, value: 9.65, selected: false }
// ]




export function Shop() {
const { cardProps, handleAddCoffeeSelected, MyCart } = useContext(CoffeeContext)
// const [MyCart, setMyCart] = useState([] as ICoffee[])



// useEffect(() => {
//     if(MyCart.length > 0) {
//         console.log(MyCart)
//     }
// },[MyCart])



// function handleAddCoffeeSelected(coffee:ICoffee) {

//     const coffeeSelected = {
//         id: coffee.id,
//         value: coffee.value,
//         name: coffee.name,
//         selected: coffee.selected = true,
//         quantity: coffee.quantity,
//         type: coffee.type,
//         src: coffee.src,
//         info: coffee.info
//     }
//     setMyCart([coffeeSelected, ...MyCart])
//     return toast.success(`${coffeeSelected.quantity} ${coffeeSelected.name} adicionado ao carrinho`)
// }

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
                autoClose={2000}
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