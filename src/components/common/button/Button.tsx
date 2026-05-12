import styled from "styled-components";
import type { ReactNode } from "react";

export type ButtonColorType = "primary" | "secondary" | "success" | "error" | "warning" | "info";
export type ButtonVariantType = "contained" | "text" | "icon";

const StyledButton = styled.button<{ $color: ButtonColorType, $variant: ButtonVariantType }>`
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.$variant === "contained" ? "#ffffff" : "inherit"};
    background-color: ${props => props.$variant === "contained" ? props.theme.colors[props.$color] : "transparent"};
    padding: ${props => props.$variant === "icon" ? "8px" : "8px 12px"};
    border-radius: ${props => props.$variant === "icon" ? "50%" : "6px"};
    transition: all 0.5s;
    
    &:hover {
        filter: brightness(0.8);
        background-color: ${props => props.$variant === "contained" ? undefined : props.theme.colors.background.default};
    }
`;

type Props = {
    children: ReactNode;
    color: ButtonColorType;
    variant: ButtonVariantType;
}

function Button({ children, color, variant }: Props) {
    return <StyledButton $color={color} $variant={variant}>{children}</StyledButton>;
}

export default Button;