import styled from "styled-components";


export const CheckoutContainer = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;

    padding: 0 10rem;
    width: 1440px;
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
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 2rem;
    gap: 2rem;

    width: 40rem;
    height: 21rem;

    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;

    #form {
        display: flex;
        flex-direction: column;

        gap: 2.5rem;
    }
`;

export const TitleForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;

    width: 35rem;
    height: 2rem;

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

    width: 35rem;
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
    }

    #CEP {
        width: 12.5rem;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
   
}

    #Rua {
        width: 35rem;
    }

    #Numero {
        width: 12.5rem;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    #Complemento {
        width: 21.75rem;

        &::placeholder {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }

    #Bairro {
        width: 12.5rem;
    }

    #Cidade {
        width: 17.25rem;
    }

    #UF {
        width: 3.75rem;
        text-transform: uppercase;
    }

    
    .DivInputs {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
    }
`;

export const PayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
    gap: 2rem;

    right: 1rem;

    width: 40rem;
    height: 11rem;

    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
`;
export const Label = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    gap: 8px;

    width: 35rem;
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

    width: 35rem;
    height: 3rem;

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
    justify-content: space-around;
    
    padding: 0 2rem;

    width: 23rem;
    height: 25rem;

    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        gap: 1rem;
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

            .teste {
                font-weight: 700;
                font-size: 1.25rem;
                color: ${(props) => props.theme["base-subtitle"]};
            }

        }

        button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 12px 8px;
        
        width: 20rem;
        height: 2.9rem;

        background: ${(props) => props.theme.yellow};
        border-radius: 4px 8px;

        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;

        color: ${(props) => props.theme.white};

        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }
    }
    }


`;