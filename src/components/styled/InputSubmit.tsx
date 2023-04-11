import styled from "styled-components";

export const SubmitInput = styled.input`
    background-color: #677f93;
    color: white;

    border: none;
    border-radius: 12px;

    font-size: 16px;

    padding: 12px;

    &:disabled {
        background-color: #bcc0c3;
        color: gray;
    }
`