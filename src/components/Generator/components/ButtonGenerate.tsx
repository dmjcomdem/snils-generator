// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import { ButtonGenerate as Button } from './styled';

export const ButtonGenerate: React.FC<React.HTMLProps<HTMLButtonElement>> = (
    props
): React.ReactElement => (
    <Button {...(props as object)}>
        <svg fill="none" viewBox="0 0 26 28">
            <path
                fill="currentColor"
                d="M5.5 4.9L19 3.7a3 3 0 013.2 2.7l1.2 13.8a3 3 0 01-2.7 3.2L7.2 24.6A3 3 0 013.9 22L2.7 8.1A3 3 0 015.5 5zm.1 2a1 1 0 00-.9 1L6 21.7a1 1 0 001.1 1l13.7-1.3a1 1 0 00.9-1L20.4 6.6a1 1 0 00-1.1-1L5.6 7zm2.9 4.7a1.5 1.5 0 01-1.6-2 1.5 1.5 0 011.9-1 1.5 1.5 0 011 1.4 1.5 1.5 0 01-1.3 1.6zm8.8-.8a1.5 1.5 0 01-1.6-2 1.5 1.5 0 011.9-.9 1.5 1.5 0 011 1.9 1.5 1.5 0 01-1.3 1zm-8 9.7a1.5 1.5 0 01-1.6-2 1.5 1.5 0 011.9-1 1.5 1.5 0 011 2 1.5 1.5 0 01-1.3 1zm8.8-.8a1.5 1.5 0 01-1.6-2 1.5 1.5 0 011.9-1 1.5 1.5 0 011 2 1.5 1.5 0 01-1.3 1zm-4.8-4a1.5 1.5 0 01-1.6-1.4 1.5 1.5 0 011.9-1.6 1.5 1.5 0 011 1.9 1.5 1.5 0 01-1.3 1zM24.5 6a.8.8 0 01-.9-.8 4 4 0 00-4.4-3.6.8.8 0 01-.9-.7.8.8 0 01.8-.9 5.6 5.6 0 016.1 5 .8.8 0 01-.7 1zm-18 22a5.6 5.6 0 01-4-1.6c-1.1-1-1.7-2.5-1.7-4a.8.8 0 01.7-.8c.5 0 .9.4.9.8a4 4 0 004 4 .8.8 0 01.9.8.8.8 0 01-.8.8z"
            />
        </svg>
    </Button>
);
