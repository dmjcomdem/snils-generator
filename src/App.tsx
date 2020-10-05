import React from 'react';
import { Main, Logo, Generator } from 'components';
import { GlobalStyles } from './styles/global';

export const App: React.FC = () => (
    <>
        <GlobalStyles />
        <Main>
            <Logo />
            <Generator />
        </Main>
    </>
);
