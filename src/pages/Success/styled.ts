import styled from "styled-components";


export const SuccessContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    padding: 0 10rem;
    width: 100%;

    gap: 2rem;

    @media(max-width: 1170px){
        & {
            width: 70%;
            padding: 0;
        }
    }

    @media(max-width: 1040px){
        & {
            width: 60%;
        }
    }
    @media(max-width: 900px){
        & {
            width: 50%;
            align-items: center;
            justify-content: center;
        }
    }

    @media(max-width:750px){
        &{
            width: 40%;
        }
    }
    @media(max-width:640px){
        &{
            width: 30%;
        }
    }

    .Title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-weight: 800;
            font-size: 2rem;
            
            color: ${(props) => props.theme["yellow-dark"]};
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.25rem;

            color: ${(props) => props.theme["base-subtitle"]};
        }
    }

    .Info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        gap: 4rem;

        img {
            width: 24rem;
        }

        @media(max-width: 900px){
        & {
            flex-direction: column;
        }
    }
    }

`;

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    gap: 2rem;

    width: 28rem;
    height: 15rem;

    
    border: 1px solid ;
    border-image: linear-gradient(to right, #DBAC2C, #8047F8) 1;
    border-radius: 6px 36px;

`;

export const InfoPerson = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        width: 22rem;
        height: 2.6rem;

        span {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 8px;
            gap: 8px;

            width: 2rem;
            height: 2rem;

            background: ${(props) => props.theme["green"]};
            border-radius: 1000px;
        }
`;
export const StatePerson = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: ${(props) => props.theme["base-text"]};

    cursor: default;
`;


export const InfoPlace = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        width: 22rem;
        height: 2.6rem;

        span {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 8px;
            gap: 8px;

            width: 2rem;
            height: 2rem;

            background: ${(props) => props.theme.purple};
            border-radius: 1000px;
        }
`;
export const StatePlace = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: ${(props) => props.theme["base-text"]};

    cursor: default;
`;


export const StatePay = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    color: ${(props) => props.theme["base-text"]};

    cursor: default;
`;
export const InfoPay = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        width: 22rem;
        height: 2.6rem;

        span {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 8px;
            gap: 8px;

            width: 2rem;
            height: 2rem;

            background: ${(props) => props.theme["yellow-dark"]};
            border-radius: 1000px;
        }
`;

export const State = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;

    color: ${(props) => props.theme["base-text"]};

    cursor: default;
`;