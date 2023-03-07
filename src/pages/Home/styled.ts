import styled from "styled-components";

export const HomeContainer = styled.main`
        display: flex;
        flex-direction: column;
        
        width: 90%;

        @media(max-width: 1290px){
        & {
            width: 80%;
        }
    }

    @media(max-width: 1170px){
        & {
            width: 70%;
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
        }
    }

    @media(max-width:750px){
        &{
            width: 35%;
        }
    }
`;