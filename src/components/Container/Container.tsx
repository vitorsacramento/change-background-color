import styled from "styled-components";

type ContainerProps = {
    column?: boolean;
    alignItem?: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.column ? "column" : "row"};
    ${(props) => props.alignItem ? "align-items: center" : "justify-content: center" };
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
`