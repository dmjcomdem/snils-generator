import React from 'react';
import { MainWrapperStyled, ContainerStyled } from './styled';

type MainTypes = {
    children: React.ReactNode;
};

export const Main: React.FC<MainTypes> = ({ children }) => (
    <MainWrapperStyled>
        <ContainerStyled>{children}</ContainerStyled>
    </MainWrapperStyled>
);
