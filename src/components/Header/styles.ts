import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;

    padding: 1.5rem 10rem;
    width: 1440px;
    height: 6.5rem;


   
    div {


        &:last-child {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
        }
    }

    p {
        font-family: 'Baloo', sans-serif;
        font-size: 1rem;

        &:first-child {
            font-weight: 800;
        }
        &:last-child {
            font-weight: 400;
        }

    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 2rem;

        background: ${(props) => props.theme["purple-light"]};
        color: ${(props) => props.theme["purple-dark"]};
            
        padding: 8px;
        gap: 4px;
        border-radius: 6px;

        cursor: default;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1;
    }

    button {
        background: ${(props) => props.theme["yellow-light"]};
        width: 2rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 6px;

        cursor: pointer;

        transition: 0.1s;

        &:hover{
            opacity: 0.7;
        }
    }
`;