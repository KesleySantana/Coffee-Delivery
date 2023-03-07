import styled from "styled-components";


export const CheckoutContainer = styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;


    @media(max-width: 1290px){
        & {
            width: 80%;
        }
    }

    @media(max-width: 1170px){
        & {
            width: 70%;
            gap: 2rem;
        }
    }

    @media(max-width: 1040px){
        & {
            flex-direction: column;
            align-items: center;
        }
    }
        
    
`;

export const Title = styled.title`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.12rem;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme["base-subtitle"]};
`;

export const SectionForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

    gap: 1rem;

    @media(max-width:640px){
        &{
            align-items:center;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    width: 100%;
    height: 21rem;

    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
/* 
    #form {
        display: flex;
        flex-direction: column;

        gap: 2.5rem;
    } */

    @media(max-width:640px){
        &{
            width: 90%;
        }
    }
`;

export const TitleForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;

    padding-left: 2rem;

    width: 100%;
    height: 2rem;

    @media(max-width:640px){
        &{
            padding-left: 0;
        }
    }

    

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;

        width: 33rem;
        height: 2.7rem;

        h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            text-align: center;

            color: ${(props) => props.theme["base-subtitle"]};
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 14px;
            text-align: center;

            color: ${(props) => props.theme["base-text"]};
        }
    }

    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
   

    width: 100%;
    height: 13.5rem;


    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        height: 2.6rem;

        background: ${(props) => props.theme["base-input"]};

        border: 1px solid #E6E5E5;
        border-radius: 4px;
        
        @media(max-width:640px){
            &{
                height: 2.3rem; 
            }
        }

    }
    
    #Nome {
        width: 80%;
    }

    #CEP { 
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        } 
}

    #Rua {
        width:100%
    }


    #Numero {
        width: 30%;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    #Complemento {
        width: 70%;

        &::placeholder {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }

    #Bairro {
        width: 45%;
    }

    #Cidade {
        width: 45%;
    }

    #UF {
        width: 10%;
        text-transform: uppercase;
    }

    
    .DivInputs {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        width: 100%;
    }
`;

export const PayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    /* right: 1rem; */

    width: 100%;
    height: 11rem;

    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;

    @media(max-width:640px){
        &{
            width: 90%;
            
        }
    }
`;
export const Label = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    gap: 8px;

    width: 100%;
    height: 2.75rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 2px;

        p {
            font-family: 'Roboto', sans-serif;
            display: flex;
            align-items: center;

            &:first-child {
                font-weight: 400;
                font-size: 1rem;
                color: ${(props) => props.theme["base-subtitle"]};
            }

            &:last-child {
                font-weight: 400;
                font-size: 14px;
                color: ${(props) => props.theme["base-text"]};
            }
        }
    }
`;
export const Payment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 12px;

    width: 100%;
    height: 3rem;

    @media(max-width:640px){
        &{
            width: 90%;
        }
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        gap: 12px;

        width: 11rem;
        height: 3rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;

        color: ${(props) => props.theme["base-text"]};
        background: ${(props) => props.theme["base-button"]};
        border-radius: 6px;

        cursor: pointer;

        &:hover {
            background: ${(props) => props.theme["base-hover"]};
        }

        &:focus {
            border: 1px solid #8047F8 ;
            box-sizing: border-box;
        }

    }
`;

export const SectionInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    padding: 20px;

    width: 23rem;
    height: 28rem;

    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px;

    
    #cardSelected {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    #infoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
      
    }



    #info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        width: 23rem;
        height: 6rem;

        

        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        
            width: 20rem;
            height: 1.3rem;


            p {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 14px;
                display: flex;
                align-items: center;
                text-align: right;

                color: ${(props) => props.theme["base-text"]};
            }

            .lastInfo {
                font-weight: 700;
                font-size: 1.2rem;
                color: ${(props) => props.theme["base-subtitle"]};
            }

        }
    }

        #buttonsContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            padding: 0 20px;
        }

        .buttonSend {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 12px 8px;

            
            width: 10rem;
            height: 2.9rem;

            background: ${(props) => props.theme.green};
            border-radius: 4px 8px;

            text-transform: uppercase;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 12px;

            color: ${(props) => props.theme.white};

            cursor: pointer;


            &:disabled {
                cursor: not-allowed;
                opacity: 0.6;
            }
        }

        #buttonConfirm {

        }

        #buttonSend {
            background: ${(props) => props.theme.yellow};
            width: 5rem;
        }

`;