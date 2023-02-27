import { createContext, ReactNode, useEffect, useState } from "react";
import { ICoffee } from "../pages/Home/components/Card";

import ExpressoTradicional from "../assets/assetsCoffee/ExpressoTradicional.svg";
import ExpressoAmericano from "../assets/assetsCoffee/ExpressoAmericano.svg";
import ExpressoCremoso from "../assets/assetsCoffee/ExpressoCremoso.svg";
import ExpressoGelado from "../assets/assetsCoffee/ExpressoGelado.svg";
import CafeComLeite from "../assets/assetsCoffee/CaféComLeite.svg";
import Latte from "../assets/assetsCoffee/Latte.svg";
import Capuccino from "../assets/assetsCoffee/Capuccino.svg";
import Macchiato from "../assets/assetsCoffee/Macchiato.svg";
import Mocaccino from "../assets/assetsCoffee/Mocaccino.svg";
import ChocolateQuente from "../assets/assetsCoffee/ChocolateQuente.svg";
import Cubano from "../assets/assetsCoffee/Cubano.svg";
import Havaiano from "../assets/assetsCoffee/Havaiano.svg";
import Arabe from "../assets/assetsCoffee/Árabe.svg";
import Irlandes from "../assets/assetsCoffee/Irlandês.svg";

import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";


interface ICoffeeContextProviderProps {
    children: ReactNode
}

interface ICoffeeContext {
    cardProps: ICoffee[],
    MyCart: ICoffee[],
    MyCartLength:number,
    FreteOfCoffee:number,
    SumValueCoffee: number,
    handleAddCoffeeSelected: (coffee:ICoffee) => void,
    handleRemoveCoffeeSelected: (coffee:string) => void
}


export const CoffeeContext = createContext({} as ICoffeeContext)

const cardProps:ICoffee[] = [
    { id:uuidv4(),  src:ExpressoTradicional, type:"Tradicional", name:"Expresso Tradicional", info:"O tradicional café feito com água quente e grãos moídos", quantity: 1, value: 9.65, selected: false },
    
    { id:uuidv4(), src:ExpressoAmericano, type:"Tradicional", name:"Expresso Americano", info:"Expresso diluído, menos intenso que o tradicional", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:ExpressoCremoso, type:"Tradicional", name:"Expresso Cremoso", info:"Café expresso tradicional com espuma cremosa", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:ExpressoGelado, type:"Tradicional", name:"Expresso Gelado", info:"Bebida preparada com café expresso e cubos de gelo", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:CafeComLeite, type:"Tradicional", name:"Café com Leite", info:"Meio a meio de expresso tradicional com leite vaporizado", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Latte, type:"Tradicional", name:"Latte", info:"Uma dose de café expresso com o dobro de leite e espuma cremosa", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Capuccino, type:"Tradicional", name:"Capuccino", info:"Bebida com canela feita de doses iguais de café, leite e espuma", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Macchiato, type:"Tradicional", name:"Macchiato", info:"Café expresso misturado com um pouco de leite quente e espuma", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Mocaccino, type:"Tradicional", name:"Mocaccino", info:"Café expresso com calda de chocolate, pouco leite e espuma", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:ChocolateQuente, type:"Tradicional", name:"Chocolate Quente", info:"Bebida feita com chocolate dissolvido no leite quente e café", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Cubano, type:"Tradicional", name:"Cubano", info:"Drink gelado de café expresso com rum, creme de leite e hortelã", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Havaiano, type:"Tradicional", name:"Havaiano", info:"Bebida adocicada preparada com café e leite de coco", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Arabe, type:"Tradicional", name:"Árabe", info:"Bebida preparada com grãos de café árabe e especiarias", quantity: 1, value: 9.65, selected: false },

    { id:uuidv4(), src:Irlandes, type:"Tradicional", name:"Irlandês", info:"Bebida a base de café, uísque irlandês, açúcar e chantilly", quantity: 1, value: 9.65, selected: false }
]



export function CoffeeContextProvider({ children }:ICoffeeContextProviderProps) {
const [MyCart, setMyCart] = useState([] as ICoffee[])
const MyCartLength = MyCart.length
const FreteOfCoffee = 4.75
const SumValueCoffee = MyCart.reduce((total = 0, item)=>{
    return total + (item.value)
},0)

// useEffect(() => {
//     if(MyCartLength > 0) {
//         console.log(MyCart)
//     }
// },[MyCart])


function handleRemoveCoffeeSelected(id:string) {
    const MycartWithoutCoffeeDelete = MyCart.filter(coffeeSelected => coffeeSelected.id !== id)
    setMyCart(MycartWithoutCoffeeDelete)
}



function handleAddCoffeeSelected(coffee:ICoffee) {

    const coffeeSelected = {
        id: coffee.id,
        value: coffee.value,
        name: coffee.name,
        selected: coffee.selected = true,
        quantity: coffee.quantity,
        type: coffee.type,
        src: coffee.src,
        info: coffee.info
    }
    setMyCart([coffeeSelected, ...MyCart])
    return toast.success(`${coffeeSelected.quantity} ${coffeeSelected.name} adicionado ao carrinho`)
}




    return(
        <CoffeeContext.Provider 
            value={{
                cardProps,
                MyCart,
                MyCartLength,
                FreteOfCoffee,
                SumValueCoffee,
                handleAddCoffeeSelected,
                handleRemoveCoffeeSelected
            }}>

            {children}
        </CoffeeContext.Provider>
    )
}