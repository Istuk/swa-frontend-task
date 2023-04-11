import { memo, useState } from "react";
import styled from "styled-components";
import { UnknownCharacterError } from "../errors";
import { FormSubmitEvent, InputChangeEvent, SubmitWordEvent } from "../types";
import { getLetterScore } from "../utils";
import { FormContainer } from "./styled/FormContainer";
import { SubmitInput } from "./styled/InputSubmit";
import { WordInput } from "./styled/WordInput";

interface Props {
    onSubmit: SubmitWordEvent;
}

const Error = styled.p`
    background-color: #9c1d1d;
    color: white;

    position: absolute;

    width: 100%;

    bottom: calc(100% - 32px);
    padding: 12px;
    padding-bottom: 24px;

    border-radius: 16px 16px 0 0;

    z-index: -1;
`

export const InputForm: React.FC<Props> = (props) => {
    const { onSubmit } = props;

    const [value, setValue] = useState('');
    const [score, setScore] = useState<number>();
    const [error, setError] = useState<string>();

    const hasError = !!error;
    const isSubmitDisabled = hasError || value === '';

    const handleChange: InputChangeEvent = (e) => {
        const word = e.target.value

        setValue(word);

        try {
            const score = getLetterScore(word)

            setScore(score);
            setError(undefined);
        } catch (e) {
            if (e instanceof UnknownCharacterError) {
                setScore(undefined);

                if (e.character === ' ') {
                    setError('Please enter only one word');
                } else {
                    setError(`Please use only letters. Word contains unknown character '${e.character}'`);
                }
            }
        }
    }

    const handleSubmit: FormSubmitEvent = (e) => {
        e.preventDefault();

        if (!score) return;

        onSubmit({
            word: value,
            score
        });
        setValue('');
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            { !!error && <Error>{error}</Error> }
            <WordInput value={value} onChange={handleChange} className={hasError ? 'is-error': undefined} placeholder="Enter word you want to score for" />
            <SubmitInput type="submit" disabled={isSubmitDisabled} />
        </FormContainer>
    )
}

export const MemoizedInputForm = memo(InputForm, (prev, curr) => prev.onSubmit === curr.onSubmit);
