import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*
{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}

html{
    @media (max-width: 1700px) {
        font-size: 75%;
    }
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    display: flex;
  flex-direction: column;
  height: 100%;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #D92929;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #D92929;
        color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color: #D92929;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
.App{flex: 1}
`;

export default GlobalStyle;
