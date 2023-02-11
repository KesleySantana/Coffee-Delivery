import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import ImageCoffe from '../../../../assets/imageCoffe.svg';
import { AsideContainer, Item, Itens, Section, Span, Title } from "./styled";


export function Aside() {
    return(
        <AsideContainer>
            <Section>
                <Title>
                    <h1>Encontre o café perfeito<br/> para qualquer hora do dia</h1>
                    <p>Com o Coffe Delivery você recebe seu café onde estiver, a<br/> qualquer hora</p>
                </Title>
                <Itens>
                    <Item>
                        <Span spanColor='yellow-dark'><ShoppingCart size={16} weight="fill" color="#FAFAFA"/></Span>
                        <p>Compra simples e segura</p>
                    </Item>

                    <Item>
                        <Span spanColor='yellow'><Timer size={16} weight="fill" color="#FAFAFA"/></Span>
                        <p>Entrega rápida e rastreada</p>
                    </Item>
                        
                    <Item>
                        <Span spanColor='base-text'><Package size={16} weight="fill" color="#FAFAFA"/></Span>
                        <p>Embalagem mantém o café intacto</p>
                    </Item>
                    
                    <Item>
                        <Span spanColor='purple'><Coffee size={16} weight="fill" color="#FAFAFA"/></Span>
                        <p>O café chega fresquinho até você</p>
                    </Item> 
                </Itens>
            </Section>
            <img src={ImageCoffe} alt="" />
        </AsideContainer>
    )
}