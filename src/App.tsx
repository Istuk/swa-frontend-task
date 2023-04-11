import { useCallback, useState } from "react";
import { MemoizedInputForm } from "./components/InputForm";
import { Score } from "./components/Score";
import { Container } from "./components/styled/Container";
import { Content } from "./components/styled/Content";
import { SubmitWordEvent, WordScore } from "./types";

export const App: React.FC = () => {
    const [score, setScore] = useState<WordScore>();

    const handleSubmit: SubmitWordEvent = useCallback((wordScore) => {
        setScore(wordScore);
    }, []);

    return (
        <Container>
            <Content>
                <MemoizedInputForm onSubmit={handleSubmit} />
                <Score value={score} />
            </Content>
        </Container>
    )
}
