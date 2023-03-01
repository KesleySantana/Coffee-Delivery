import styled from "styled-components";


export const CoffeeSelectedContainer = styled.div`


    #container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        background: ${(props) => props.theme["base-card"]};

        gap: 1.5rem;
        width: 100%;
        height: 5rem;

        border-bottom: 1px solid #E6E5E5;

    }

    img {
        width: 4rem;
        height: 4rem;
    }

     #action {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;

        width: 10rem;
        height: 4rem;

        h1 {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 0.9rem;

            text-align: center;
            color: ${(props) => props.theme["base-subtitle"]};
        }

        #changeContainer{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            gap: 1rem;
        }

        #buttonRemove {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            width: 2rem;
            height: 1.8rem;
            gap: 6px;

            background: ${(props) => props.theme["base-button"]};
            border-radius: 6px;

            text-transform: uppercase;
            cursor: pointer;

            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 10px;
            color: ${(props) => props.theme["base-text"]};

        }

    }

    #containerPrice {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        height: 100%;
        
    }

    #price {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;

        text-align: right;

        color: ${(props) => props.theme["base-text"]};

        cursor: default;
    }
`;

export const Counter = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 4rem;
        height: 1.8rem;

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

