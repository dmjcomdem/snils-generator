import styled from 'styled-components';

export const WrapperStyled = styled.div`
    position: relative;
    z-index: 1;

    display: grid;
    grid-template-columns: max-content 1fr max-content;
    grid-gap: 2rem;

    background-color: var(--white);
    padding: 2rem 3rem;

    border-radius: 5rem;
    box-shadow: var(--shadow-input);
`;

export const GeneratorTextStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    width: 35rem;

    font-size: 4rem;
    text-align: center;
    font-weight: 700;
    white-space: nowrap;
`;

export const CopiedTextStyled = styled.div<{ isVisible: boolean }>`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    font-size: 1.8rem;

    border-radius: 5rem;
    background-color: var(--white);
    user-select: none;

    transition: 0.3s;

    opacity: 0;
    filter: blur(30px);

    visibility: hidden;

    ${p =>
        p.isVisible &&
        `
        opacity: 1;
        filter: blur(0);
        visibility: visible;
    `}
`;
