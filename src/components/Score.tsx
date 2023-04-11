import styled from "styled-components";

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
    value: number | undefined;
}

export const Score: React.FC<Props> = (props) => {
    const { value } = props;

    const isEmpty = !value;

    return (
        <ScoreContainer>
            {
                isEmpty ? "Enter word to get score" : `Score is ${value}`
            }
        </ScoreContainer>
    )
}
