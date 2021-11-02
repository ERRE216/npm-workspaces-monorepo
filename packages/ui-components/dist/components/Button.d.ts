/// <reference types="react" />
export interface ButtonProps extends StyledButtonProps {
    text: string;
}
interface StyledButtonProps {
    backgroundColor: string;
}
export declare function Button({ text, backgroundColor }: ButtonProps): JSX.Element;
export {};
