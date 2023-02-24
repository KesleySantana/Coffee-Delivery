import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money } from "phosphor-react";
import { CoffeeSelected } from "../Home/components/Card/CardSelected";
import { CheckoutContainer, Form, FormContainer, Info, Label, PayContainer, Payment, SectionForm, SectionInfo, Title, TitleForm } from "./styled";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { number } from "zod";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


interface IClient {
    nome: string,
    CEP: string,
    rua:string,
    numero:string,
    cidade:string,
    bairro:string,
    UF:string
}


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

type ConfirmedOrder = zod.infer<typeof confirmedOrderValidationSchema>


export function Checkout() {
const [client, setClient] = useState({} as IClient[])
const [formPayment, setFormPayment] = useState<string>('')

    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm<ConfirmedOrder>({
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

    useEffect(()=> {
        if(client.length > 0) {
            console.log(client, formPayment)
        }
    }, [client, formPayment])


    function handleConfirmOrder(data:ConfirmedOrder) {
        const newClient = {
            nome: data.Nome,
            CEP: data.CEP,
            rua:data.Rua,
            numero: data.Numero,
            cidade:data.Cidade,
            bairro:data.Bairro,
            UF:data.UF.toUpperCase(),
        }
        setClient([newClient])
        reset()
    }

    function handleChangeFormPayment(form: 'Dinheiro' | 'Cartão de Crédito' | 'Cartão de Débito') {
        if(form === 'Dinheiro'){
            setFormPayment('Dinheiro')
        }
        if(form === 'Cartão de Crédito'){
            setFormPayment('Cartão de Crédito')
        }
        if(form === 'Cartão de Débito'){
            setFormPayment('Cartão de Débito')
        }
    }   


    return(
        <CheckoutContainer>
            <SectionForm>
                <Title>Complete seu pedido</Title>
                <FormContainer >
                    <TitleForm>
                        <MapPinLine size={22} color="#C47F17" />
                        <div>
                            <h2>Endereço de Entrega</h2>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
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
                                <input type="text" placeholder="Número" id="Numero" {...register('Numero', {
                                    required:true,
                                    })}/>
                                <input type= "text" placeholder="Complemento    Opcional" id="Complemento" {...register('Complemento')}/>
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
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </Label>
                            <Payment>
                                < button type="button" >
                                    <CreditCard size={16} color='#8047F8' />
                                    Cartão de Crédito
                                </ button >             
                
                                < button type="button" onClick={()=>handleChangeFormPayment('Cartão de Débito')}>
                                    <Bank size={16} color='#8047F8' />
                                    Cartão de Débito
                                </ button >

                                < button type="button" onClick={()=>handleChangeFormPayment('Dinheiro')}>
                                    <Money size={16} color='#8047F8' />
                                    Dinheiro
                                </ button >
                            </Payment>
                </PayContainer>

            </SectionForm>
            <SectionInfo>
                <Title>Cafés selecionados</Title>
                <Info>
                    
                    <div id="cardSelected">
                        <CoffeeSelected />
                        <CoffeeSelected />
                    </div>

                    <div id="info">
                        <div>
                            <p>Total de itens</p>
                            <span>ComponenteValue</span>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <span>ComponenteValue</span>
                        </div>
                        <div >
                            <p className="lastInfo">Total</p>
                            <span className="lastInfo">ComponenteValue</span>
                        </div>
                    </div>
                    <NavLink to="/success" style={{textDecoration:'none'}}>
                        <button id="buttonSend"  onClick={handleSubmit(handleConfirmOrder)} disabled={Object.keys(errors).length > 0} >
                            Confirmar Pedido
                        </button>
                    </NavLink>
                   
                        
                </Info>
            </SectionInfo>
        </CheckoutContainer>
    )
}