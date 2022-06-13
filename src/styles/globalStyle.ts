import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   

    :root {
        --background: #eee;

        
        --red-200: #e52e4d;

        --header-bg: #2c6f72;

        --purple: #6B46C1;
        --purple-2: #6933FF;

        --loading-color:#2c146b;
        --loading-border-color: white;


        --blue-600: #22293F;
        --blue-500: #363F5F;

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
        background:  var(--background);
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
          z-index: 2;

    }

    .react-modal-content {
        width: 100%;
        max-width: 476px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        margin: 0 1rem ;
          z-index: 2;

        animation: modalAnimation 0.3s;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        cursor: pointer;

        &:hover {
            filter: brightness(0.7);
        }
    }

    main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem;
    }

    @keyframes modalAnimation {
        from {
            opacity: 0;
            transform: scale(0);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export { GlobalStyle };
