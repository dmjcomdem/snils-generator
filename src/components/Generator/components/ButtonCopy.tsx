// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import { ButtonCopy as Button } from './styled';

export const ButtonCopy: React.FC<React.HTMLProps<HTMLButtonElement>> = (
    props
): React.ReactElement => (
    <Button {...(props as object)}>
        <svg fill="none" viewBox="0 0 19 22">
            <path
                fill="currentColor"
                d="M12 22H3.4c-2 0-3.5-1.5-3.5-3.4V6.9C0 5 1.6 3.5 3.5 3.5H12c2 0 3.6 1.5 3.6 3.4v11.7c0 1.9-1.6 3.4-3.6 3.4zM3.4 5.2c-1 0-1.7.8-1.7 1.7v11.7c0 1 .8 1.7 1.7 1.7H12c1 0 1.8-.8 1.8-1.7V6.9c0-1-.8-1.7-1.8-1.7H3.5zM19 16.4v-13C19 1.5 17.4 0 15.5 0H5.7c-.5 0-.9.4-.9.9 0 .4.4.8.9.8h9.8c1 0 1.7.8 1.7 1.7v13c0 .5.4.9 1 .9.4 0 .8-.4.8-.9z"
            />
        </svg>
    </Button>
);
