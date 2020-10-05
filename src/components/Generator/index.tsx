import React from 'react';
import { generateSnils, formatSnils, copyToClipboard } from 'utils';
import { ButtonGenerate, ButtonCopy } from './components';
import { WrapperStyled, GeneratorTextStyled, CopiedTextStyled } from './styled';

export const Generator: React.FC = () => {
    const [snils, setSnils] = React.useState(generateSnils);
    const [isCopied, setIsCopied] = React.useState(false);

    const generateHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ): void => {
        event.preventDefault();
        setSnils(generateSnils());
    };

    const copyHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setIsCopied(true);
        copyToClipboard(snils);
        window.setTimeout(() => {
            setIsCopied(false);
        }, 800);
    };

    return (
        <WrapperStyled>
            <ButtonGenerate
                onClick={generateHandler}
                disabled={isCopied}
                title="Сгенерировать новый СНИЛС"
            />
            <GeneratorTextStyled>{formatSnils(snils)}</GeneratorTextStyled>
            <ButtonCopy
                onClick={copyHandler}
                disabled={isCopied}
                title="Скопировать в буфер"
            >
                Copy
            </ButtonCopy>
            <CopiedTextStyled isVisible={isCopied}>
                Скопировано в буфер обмена 📋
            </CopiedTextStyled>
        </WrapperStyled>
    );
};
