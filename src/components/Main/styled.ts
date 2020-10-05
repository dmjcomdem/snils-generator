import styled from 'styled-components';

export const MainWrapperStyled = styled.main`
    position: relative;
    min-height: 100vh;

    display: grid;
    place-items: center;

    background-image: var(--body-bg-light);

    @media (prefers-color-scheme: dark) {
        background-image: var(--body-bg-dark);
    }
`;

export const ContainerStyled = styled.section`
    position: relative;

    display: grid;
    grid-gap: 2rem;
    place-items: center;

    padding-bottom: clamp(2vmax, 6vw, 6vmax);
`;
