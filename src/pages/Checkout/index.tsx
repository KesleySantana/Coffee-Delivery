import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money } from "phosphor-react";
import { CoffeeSelected } from "../Home/components/Card/CardSelected";
import { CheckoutContainer, Form, FormContainer, Info, Label, PayContainer, Payment, SectionForm, SectionInfo, Title, TitleForm } from "./styled";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { number } from "zod";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { ClientContext } from "../../contexts/ClientContext";


// interface IClient {
//     nome: string,
//     CEP: string,
//     rua:string,
//     numero:string,
//     cidade:string,
//     bairro:string,
//     UF:string
// }


const confirmedOrderValidationSchema = zod.object({
    Nome: zod.string().min(2).max(50),
    CEP: zod.string().min(9).max(9),  
    Rua: zod.string().min(1).max(50),
    Numero: zod.string().min(1).max(5),
    Complemento: zod.string(),
    Bairro: zod.string().min(1).max(40),
    Cidade: zod.string().min(1).max(30),
    UF: zod.string().min(2).max(2)
})

export type ConfirmedOrder = zod.infer<typeof confirmedOrderValidationSchema>


export function Checkout() {

const { MyCart, MyCartLength, totalFormated, freteOfCoffeeFormated, SumValueCoffeeFormated} = useContext(CoffeeContext)
const { client, handleChangeFormPayment, handleConfirmOrder } = useContext(ClientContext)

// const [client, setClient] = useState({} as IClient[])
// const [formPayment, setFormPayment] = useState<string>('')

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ConfirmedOrder>({
        resolver: zodResolver(confirmedOrderValidationSchema),
        defaultValues: {
            Nome: '',
            CEP: '',
            Rua: '',
            Numero: '',
            Complemento: '',
            Bairro: '',
            Cidade: '',
            UF: '',
        }
    })

    // useEffect(()=> {
    //     if(client.length > 0) {
    //         console.log(client)
    //     }
    // }, [client])


    // function handleConfirmOrder(data:ConfirmedOrder) {
    //     const newClient = {
    //         nome: data.Nome,
    //         CEP: data.CEP,
    //         rua:data.Rua,
    //         numero: data.Numero,
    //         cidade:data.Cidade,
    //         bairro:data.Bairro,
    //         UF:data.UF.toUpperCase(),
    //         Pagamento: formPayment
    //     }
    //     setClient([newClient])
    //     reset()
    // }

    // function handleChangeFormPayment(form: 'Dinheiro' | 'Cart??o de Cr??dito' | 'Cart??o de D??bito') {
    //     setFormPayment(form)
    // }   


    return(
        <CheckoutContainer>
            <SectionForm>
                <Title>Complete seu pedido</Title>
                <FormContainer >
                    <TitleForm>
                        <MapPinLine size={22} color="#C47F17" />
                        <div>
                            <h2>Endere??o de Entrega</h2>
                            <p>Informe o endere??o onde deseja receber seu pedido</p>
                        </div>
                    </TitleForm>
                    <form action="" id="form">
                        <Form>
                            <div className="DivInputs">
                                <input type="text" placeholder="Nome" id="Nome" {...register('Nome', {
                                    required:true,
                                    } )}/>
                                <input type="text" placeholder="CEP" id="CEP" {...register('CEP', {
                                    required:true,
                                    } )}/>
                            </div>
                            
                            <input type="text" placeholder="Rua" id="Rua" {...register('Rua', {
                                required:true,
                                })} />
                
                            <div className="DivInputs">
                                <input type="text" placeholder="N??mero" id="Numero" {...register('Numero', {
                                    required:true,
                                    })}/>
                                <input type= "text" placeholder="Complemento" id="Complemento" {...register('Complemento')}/>
                            </div>
                            <div className="DivInputs">
                                <input type="text" placeholder="Bairro" id="Bairro" {...register('Bairro', {
                                    required:true,
                                    })}/>
                                <input type= "text" placeholder="Cidade" id="Cidade" {...register('Cidade', {
                                    required:true,
                                    })}/>
                                <input type= "text" placeholder="UF" id="UF" {...register('UF', {
                                    required:true,
                                    })} />
                            </div>   
                        </Form>
                    </form>
                </FormContainer>

                <PayContainer>
                            <Label>
                                <CurrencyDollar size={22} color='#8047F8' />
                                <div>
                                    <p>Pagamento</p>
                                    <p>O pagamento ?? feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </Label>
                            <Payment>
                                < button type="button" onClick={()=>handleChangeFormPayment('Cart??o de Cr??dito')} >
                                    <CreditCard size={16} color='#8047F8' />
                                    Cart??o de Cr??dito
                                </ button >             
                
                                < button type="button" onClick={()=>handleChangeFormPayment('Cart??o de D??bito')}>
                                    <Bank size={16} color='#8047F8' />
                                    Cart??o de D??bito
                                </ button >

                                < button type="button" onClick={()=>handleChangeFormPayment('Dinheiro')}>
                                    <Money size={16} color='#8047F8' />
                                    Dinheiro
                                </ button >
                            </Payment>
                </PayContainer>

            </SectionForm>
            <SectionInfo>
                <Title>Caf??s selecionados</Title>
                <Info>
                    
                    <div id="cardSelected">
                        {MyCart.map((item)=> (
                            <CoffeeSelected 
                                key={item.id}
                                dataCoffee={{...item}}/>
                        ))}
                    </div>

                    <div id="infoContainer">
                        <div id="info">
                            <div>
                                <p>Total de itens</p>
                                <span>{SumValueCoffeeFormated}</span>
                            </div>
                            <div>
                                <p>Entrega</p>
                                <span>{freteOfCoffeeFormated}</span>
                            </div>
                            <div >
                                <p className="lastInfo">Total</p>
                                <span className="lastInfo">{totalFormated}</span>
                            </div>
                        </div>
                
                        <div id="buttonsContainer">
                            <button className="buttonSend" id="buttonConfirm" onClick={handleSubmit(handleConfirmOrder)} disabled={Object.keys(errors).length > 0 || Object.keys(client).length > 0} >
                                Confirmar Pedido
                            </button>
                            <NavLink to="/success" style={{textDecoration:'none'}}>
                                <button className="buttonSend" type="button" id="buttonSend" disabled={Object.keys(client).length === 0} >
                                    Finalizar
                                </button>
                            </NavLink>
                            
                        </div>
                    
                    </div>
                   
                        
                </Info>
            </SectionInfo>
        </CheckoutContainer>
    )
}