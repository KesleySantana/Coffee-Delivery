import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        :focus {
            outline: 0;
        }
    }

    body {
        background-color: ${(props) => props.theme.background};
        

    }

    body, input, textarea, button {
        border: none;
    }   

    h1, h2, p, span {
        user-select: none;
    }
`;