import styled from 'styled-components';

export const Button = styled.button`
    --scale: 1;
    --rotate: 0deg;

    position: relative;
    border: none;

    background-color: transparent;
    cursor: pointer;
    opacity: 0.6;
    color: var(--accent-color);

    border-radius: 50%;

    transition: 0.3s;
    transform: scale(var(--scale)) rotate(var(--rotate));
    user-select: none;

    &:hover,
    &:focus {
        outline: none;
        opacity: 1;
    }

    &:hover {
        --scale: 1.1;
    }

    &:active {
        --scale: 0.9;
    }

    &::after {
        content: '';
        position: absolute;
        width: 4rem;
        height: 4rem;
        top: 48%;
        left: 50%;
        border-radius: 50%;
        background-color: rgba(102, 94, 162, 0.1);
        transform: translate(-50%, -50%) scale(0);
        transition: 0.1s 0.1s ease-in-out;
    }

    &:focus::after,
    &:hover::after {
        transform: translate(-50%, -50%) scale(1.6);
    }

    &:active::after {
        transform: translate(-50%, -50%) scale(1.4);
    }
`;

export const ButtonGenerate = styled(Button)`
    svg {
        width: 4rem;
        height: 4rem;
    }
`;

export const ButtonCopy = styled(Button)`
    svg {
        width: 4rem;
        height: 3.4rem;
    }
`;
