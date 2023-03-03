import { HeaderContainer } from "./styles";
import { House, MapPin, ShoppingCart } from 'phosphor-react';
import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import { NavLink, Route, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header() {
const routerLocation = useLocation()

    return(
        <HeaderContainer>
            <div>
                <img src={logoCoffeeDelivery} alt="" />
            </div>
            <div>
                <span><MapPin size={22} weight="fill" color="#8047F8" />Itabuna, BA</span>
                {routerLocation.pathname !== '/'?      
                <NavLink to="/" style={{textDecoration:'none'}}>
                    <button><House size={22} weight="fill" color="#C47F17" /></button>
                </NavLink>   
                :
                <NavLink to="/checkout" style={{textDecoration:'none'}}>
                    <button><ShoppingCart size={22} weight="fill" color="#C47F17"/></button>
                </NavLink>           
                }
            </div>
        </HeaderContainer>
    )
}