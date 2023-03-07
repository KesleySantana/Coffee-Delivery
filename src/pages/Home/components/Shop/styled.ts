import styled from "styled-components";


export const ShopContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    padding-top: 4rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2rem;
        
        color: ${(props) => props.theme["base-subtitle"]};
    }

`;


export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 3rem;
    padding-top: 3rem;

    width: 100%;
    height: 100%;

    /* 22 */
`;


