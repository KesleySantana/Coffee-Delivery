import styled from "styled-components";



export const AsideContainer = styled.aside`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        width: 25rem;

        @media(max-width:750px){
        &{
            display: none;
        }
    }
    }

    @media(max-width: 900px){
        & {
            flex-direction: column-reverse;
        }
    }

`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 2rem;  

    @media(max-width:750px){
        &{
            align-items: center;
        }
 }

`;


export const Title = styled.div`
    display: flex;
    flex-direction: column;
  

    gap: 1rem;

    h1 {
        color: ${(props) => props.theme["base-title"]};

        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2.5rem;
    }

    p {
        color: ${(props) => props.theme["base-subtitle"]};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;

export const Itens = styled.div`
    display: grid;
    grid: repeat(2, 3rem) /auto-flow 20rem;
    width: 100%;

    @media(max-width:640px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;


  p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;

      color: ${(props) => props.theme["base-text"]};
  }
`;



const  SPAN_COLORS = {
    'yellow-dark': 'yellow-dark',
    'base-text': 'base-text',
    'yellow': 'yellow',
    'purple': 'purple'
} as const

interface SpanProps {
    spanColor: keyof typeof SPAN_COLORS;
}

export const Span = styled.span<SpanProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 8px;
    gap: 8px;

    width: 2rem;
    height: 2rem;
    
    border-radius: 1000px;

    background: ${(props) => props.theme[SPAN_COLORS[props.spanColor]]};
`;