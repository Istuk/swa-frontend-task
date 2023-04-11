import { useState } from "react"
import styled from "styled-components";
import { UnknownCharacterError } from "./errors";
import { FormSubmitEvent, InputChangeEvent } from "./types";
import { getLetterScore } from "./utils";

const Score = styled.p`
    color: green;
`

const Error = styled.p`
    color: red;
`

export const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [score, setScore] = useState<number>();
    const [error, setError] = useState<string>();

    const handleChange: InputChangeEvent = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit: FormSubmitEvent = (e) => {
        e.preventDefault();

        try {
            const nextScore = getLetterScore(value);

            setError(undefined);
            setScore(nextScore);
        } catch (e) {
            if (e instanceof UnknownCharacterError) {
                if (e.character === ' ') {
                    setError('Please enter only one word');
                } else {
                    setError(`Word contains unknown character '${e.character}'`)
                }
            }
        }
    }

    return (
        <span>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange} placeholder="Enter word to get score" />
                <input type="submit" />
            </form>
            {
                error && (
                    <Error>{error}</Error>
                )
            }
            <Score>
                Score: {score}
            </Score>
        </span>
    )
}
