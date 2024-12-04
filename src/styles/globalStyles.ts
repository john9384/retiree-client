import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: "Open Sans", sans-serif;
        font-optical-sizing: auto;
          max-width: 100%;
    }

    #webpack-dev-server-client-overlay-div,
    #webpack-dev-server-client-overlay {
        display: none;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -ms-overflow-style: none;
        scrollbar-width: none; 
    }

    body {
        overflow-x: hidden;
        max-width: 100vw;
        max-height: 100vh;
        background-color: ${({ theme }) => theme.colors.appBG};
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    a {
        color: inherit;
        transition: all 0.3s;
        text-decoration: none;

        &:hover {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
`
