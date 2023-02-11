import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money } from "phosphor-react";
import { CoffeeSelected } from "./components/CoffeeSelected";
import { CheckoutContainer, Form, FormContainer, Info, Label, PayContainer, Payment, SectionForm, SectionInfo, Title, TitleForm } from "./styled";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';
import { number } from "zod";
import { useState } from "react";


interface Client {
    rua:string,
    numero:string,
    cidade:string,
    bairro:string,
    UF:string,
    formPayment:string
}


const confirmedOrderValidationSchema = zod.object({
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
const [client, setClient] = useState<Client[]>([])

    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm<ConfirmedOrder>({
        resolver: zodResolver(confirmedOrderValidationSchema),
        defaultValues: {
            CEP:'',
            Rua: '',
            Numero: '',
            Complemento: '',
            Bairro: '',
            Cidade: '',
            UF: '',
        }
    })


    function handleConfirmOrder(data:ConfirmedOrder) {
        console.log(data)
        const client = {
            rua:data.Rua,
            numero:data.Numero,
            cidade:data.Cidade,
            bairro:data.Bairro,
            UF:data.UF,
      
        }
        reset()
    }

    function handleSendCartãoDeCredito() {
        console.log('cartão de crédito')
    }
    function handleSendCartãoDeDébito() {
        console.log('cartão de débito')
    }
    function handleSendDinheiro() {
        console.log('Dinheiro')
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
                            <input type="text" placeholder="CEP" id="CEP" {...register('CEP', {
                                required:true, 
                                } )}/>
                            
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
                                < button type="button" onClick={handleSendCartãoDeCredito}>
                                    <CreditCard size={16} color='#8047F8' />
                                    Cartão de Crédito
                                </ button >
                                < button type="button" onClick={handleSendCartãoDeDébito}>
                                    <Bank size={16} color='#8047F8' />
                                    Cartão de Débito
                                </ button >
                                < button type="button" onClick={handleSendDinheiro}>
                                    <Money size={16} color='#8047F8' />
                                    Dinheiro
                                </ button >
                            </Payment>
                </PayContainer>

            </SectionForm>
            <SectionInfo>
                <Title>Cafés selecionados</Title>
                <Info>
                    <CoffeeSelected />

                    <div>
                        <div>
                            <p>Total de itens</p>
                            <span>ComponenteValue</span>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <span>ComponenteValue</span>
                        </div>
                        <div>
                            <p className="teste">Total</p>
                            <span>ComponenteValue</span>
                        </div>

                        <button onClick={handleSubmit(handleConfirmOrder)} disabled={Object.keys(errors).length > 0} >
                            Confirmar Pedido
                        </button>
                    </div>
                        
                </Info>
            </SectionInfo>
        </CheckoutContainer>
    )
}