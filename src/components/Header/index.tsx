import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'

export function Header() {
    return(
        <HeaderContainer>
            <div>
                <img src={logoCoffeeDelivery} alt="" />
            </div>
            <div>
                <span><MapPin size={22} weight="fill" color="#8047F8" />Itabuna, BA</span>
                <button><ShoppingCart size={22} weight="fill" color="#C47F17"/></button>
            </div>
        </HeaderContainer>
    )
}