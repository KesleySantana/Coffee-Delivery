import { Cactus, CurrencyDollar, MapPin } from "phosphor-react";
import { InfoPay, InfoPerson, InfoPlace, OrderInfo, StatePay, StatePerson, StatePlace, SuccessContainer } from "./styled";
import Illustration from './assets/Illustration.svg';
import { useContext, useEffect } from "react";
import { ClientContext } from "../../contexts/ClientContext";

export function Success() {
const { client } = useContext(ClientContext)

console.log(client)

    return(
        <SuccessContainer>
            <div className="Title">
                <h1>Uhu!, Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <div className="Info">

                <OrderInfo>
                    <InfoPerson>
                        <span>
                            <Cactus size={16} weight="fill" color="#FFFFFF"/>
                        </span>
                        <StatePerson>
                            <p>Obrigado por confiar em nós</p>
                            <p>value</p>
                        </StatePerson>
                    </InfoPerson>
                    <InfoPlace>
                        <span>
                            <MapPin size={16} weight="fill" color="#FFFFFF"/>
                        </span>
                        <StatePlace>
                            <p>Entrega em</p>
                            <p>value</p>
                        </StatePlace>
                    </InfoPlace>
                    <InfoPay>
                        <span>
                            <CurrencyDollar size={16} color="#FFFFFF" />
                        </span>
                        <StatePay>
                            <p>Pagamento na entrega</p>
                            <p>value</p>
                        </StatePay>
                    </InfoPay>
                </OrderInfo>
                <img src={Illustration} alt="" />
            </div>
        </SuccessContainer>
    )
}