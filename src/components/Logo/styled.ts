import styled from 'styled-components';
import { rotateRoundAnimation } from 'styles/global';

export const H1Styled = styled.h1`
    position: relative;

    margin: 0;
    padding: 0;

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 13rem);
        top: calc(50% - 8rem);
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        background-image: var(--circle-magic-bg);

        animation: 4s ${rotateRoundAnimation} linear infinite;
    }
`;

export const ImageLogoStyled = styled.img`
    width: 50rem;
    height: 14rem;
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.4));
`;
