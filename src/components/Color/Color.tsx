import styled from "styled-components";

type ColorProps = {
    color: string;
}

export const Color = styled.span<ColorProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    font-weight: bold;
    ::before {
        padding-bottom: 10px;
        content: "${(props) => props.color.toUpperCase()}";
    }
`;
