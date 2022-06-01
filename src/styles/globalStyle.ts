import { createGlobalStyle } from "styled-components";

const personalizedBg = ["/register", "/"];
const GlobalStyle = createGlobalStyle`
   

    :root {
        --background: #eee;

        
        --red: #e52e4d;

        --header-bg: #2c6f72;

        --purple: #6B46C1;
        --purple-2: #6933FF;

        --loading-color:#2c146b;
        --loading-border-color: white;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --green: #33CC95;

        --shape: #ffffff;

        --gray-900: #181B23;
        --gray-800: #1F2029;
        --gray-700: #2d3748;
        --gray-600: #4B4D63;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
     
     
        -webkit-font-smoothing: antialiased;
        background:  ${
          process.browser && !personalizedBg.includes(window.location.pathname)
            ? "var(--background)"
            : "linear-gradient(to left top, #291924, #462643, #603568, #764892, #845ec2);"
        }
         
   
        
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    strong, h1, h2, h3, h4, h6  { 
        font-weight: 600;
    }


    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    h4 {
        font-size: 2rem;
    }
    
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content:center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem;
    }
`;

export { GlobalStyle };
