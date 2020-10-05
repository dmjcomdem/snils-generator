import React from 'react';
import { H1Styled, ImageLogoStyled } from './styled';

export const Logo: React.FC = () => (
    <H1Styled>
        <span className="visually-hidden">Онлайн СНИЛС генератор</span>
        <ImageLogoStyled
            src="./assets/logo.svg"
            alt="Онлайн СНИЛС генератор"
            aria-hidden="true"
        />
    </H1Styled>
);
