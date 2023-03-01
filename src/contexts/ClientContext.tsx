import { createContext, ReactNode, useEffect, useState } from "react";
import { ConfirmedOrder } from "../pages/Checkout";



interface IClientContextProviderProps {
    children: ReactNode
}

interface IClient {
    nome: string,
    CEP: string,
    rua: string,
    numero: string,
    cidade: string,
    bairro: string,
    UF: string,
    pagamento: string
}

interface IClientContext {
    client: IClient[],
    handleConfirmOrder: (data:ConfirmedOrder) => void,
    handleChangeFormPayment: (form:string) => void
}


export const ClientContext = createContext({} as IClientContext)

export function ClientContextProvider({ children }: IClientContextProviderProps) {
const [client, setClient] = useState({} as IClient[])
const [formPayment, setFormPayment] = useState<string>('')





function handleConfirmOrder(data:ConfirmedOrder) {
    const newClient = {
        nome: data.Nome,
        CEP: data.CEP,
        rua:data.Rua,
        numero: data.Numero,
        cidade:data.Cidade,
        bairro:data.Bairro,
        UF:data.UF.toUpperCase(),
        pagamento: formPayment
    }
    setClient([newClient])
    // reset()
}

function handleChangeFormPayment(form:string) {
    setFormPayment(form)
}   



return(
    <ClientContext.Provider value={{
        client,
        handleChangeFormPayment,
        handleConfirmOrder
    }}>
      {children}
    </ClientContext.Provider>
)
}