import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'styles/theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.typography.primary};
    }
    body{
        background-color: ${({ theme }) => theme.colors.black.primary};
    }
    button{
        background: none;
        border: none;
    }
    
    input{
        border: none;
        &:focus{
            outline: none;
        }
    }
    ul{
        padding: 0;
        list-style: none;
    }

    a{
        outline: none;
        color: ${({ theme }) => theme.colors.white.primary};
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
`;

export default GlobalStyle;
