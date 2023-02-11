import styled from "styled-components";


export const Card = styled.div`
    background: ${(props) => props.theme["base-card"]};

    width: 15rem;
    height: 19rem;

    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    gap: 0.5rem;

    padding-bottom: 2rem;
    
    
   img {
    width: 7rem;
    padding-bottom: 1rem;
   }

   span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;

    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};

    border-radius: 100px;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.60rem;
    text-transform: uppercase;
   }

   h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;

    text-align: center;

    color: ${(props) => props.theme["base-subtitle"]};
   }

   p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.85rem;
    line-height: 18px;
    
    text-align: center;
    max-width: 14rem;

    color: ${(props) => props.theme["base-label"]};
   }
`;

export const BuyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    margin-top: 1.5rem;

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        padding: 8px;
        gap: 8px;

        width: 2rem;
        height: 2rem;

        background: ${(props) => props.theme["purple-dark"]};

        border-radius: 6px;

        cursor: pointer;

        transition: 0.1s;

        &:hover {
            background: ${(props) => props.theme["purple"]};
        }
    }

`;

export const Price = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        
        gap: 4px;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.85rem;

        text-align: right;

        color: ${(props) => props.theme["base-text"]};

        cursor: default;
`;

export const PriceAmount = styled.div`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
`;

export const Counter = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 4rem;
        height: 2rem;

        background: ${(props) => props.theme["base-button"]};

        border-radius: 6px;

`;

export const Amount = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    padding: 6px;
            
    text-align: center;

    color: ${(props) => props.theme["base-title"]};

    cursor: default;
`;