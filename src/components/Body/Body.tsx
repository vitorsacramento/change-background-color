import styled from "styled-components";

type BodyColorProps = {
    red: string;
    green: string;
    blue: string;
}

export const Body = styled.div<BodyColorProps>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${(props) => `rgb(${props.red}, ${props.green}, ${props.blue})`};
`