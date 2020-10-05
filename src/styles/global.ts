import { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: white;
        --text-color: #2d2743;
        --accent-color: #665ea2;
        
        --body-bg-light: radial-gradient(50% 50% at 50% 50%, #a0c6e2, #c5d4ef);
        --body-bg-light-fill: #a0c6e2;
        
        --body-bg-dark: radial-gradient(
            50% 50% at 50% 50%,
            #2d2743 0%,
            #101920 100%
        );
        --body-bg-fill-dark: #101920;
        
        --circle-magic-bg: linear-gradient(
            233.36deg,
            rgba(137, 124, 235, 0.4) 16.32%,
            rgba(255, 255, 255, 0.4) 40.7%,
            rgba(177, 204, 255, 0.4) 62.82%,
            rgba(255, 155, 227, 0.4) 88.32%
        );
        
        --shadow-input: 0 0 6px rgba(0, 0, 0, 0.3), -5px 0 0 #a8d0ed, 5px 0 0 #a8d0ed,
        10px 0 0 rgba(137, 124, 235, 0.6), -10px 0 0 rgba(137, 124, 235, 0.6);
    
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        
        &::after,
        &::before {
            box-sizing: inherit;
        }
    }

    body {
        margin: 0;
        padding: 0;
        
        min-height: 100vh;
        
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        
        color: var(--text-color);
        
        background-color: var(--body-bg-light-fill);
    
        @media (prefers-color-scheme: dark) {
            background-color: var(--body-bg-fill-dark);
        }
    }
    
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        border: 0;
        clip: rect(0 0 0 0)
    }
`;

export const rotateRoundAnimation = keyframes`
    from {
        filter: blur(20px);
    }

    25%,
    75% {
        filter: blur(30px);
    }

    to {
        filter: blur(20px);
        transform: rotate(1turn);
    }
`;
