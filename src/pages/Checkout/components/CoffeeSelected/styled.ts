import styled from "styled-components";


export const CoffeeSelectedContainer = styled.div`
    width: 100rem;
    height: 5rem;

    background: ${(props) => props.theme["base-card"]};

    #teste {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    img {
        width: 4rem;
        height: 4rem;
    }

     #Action {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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

        #ButtonRemove {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            width: 5.7rem;
            height: 2rem;
            gap: 6px;

            background: ${(props) => props.theme["base-button"]};
            border-radius: 6px;

            text-transform: uppercase;
            cursor: pointer;

            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 11px;
            color: ${(props) => props.theme["base-text"]};

        }
    }
`;