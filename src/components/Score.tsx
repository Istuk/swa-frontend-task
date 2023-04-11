import styled from "styled-components";
import { WordScore } from "../types";

export const ScoreContainer = styled.p`
    width: 100%;

    text-align: center;

    padding: 16px;

    border: 1px solid green;
    border-radius: 16px;

    color: green;

    .is-empty {
        color: black;
    }
`

interface Props {
    value: WordScore | undefined;
}

export const Score: React.FC<Props> = (props) => {
    const { value } = props;

    const isEmpty = !value;

    return (
        <ScoreContainer>
            {
                isEmpty ? "Enter word to get score" : `Score for "${value.word}" is ${value.score}`
            }
        </ScoreContainer>
    )
}
