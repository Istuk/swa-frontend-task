import { useState } from "react";
import { Container } from "./components/styled/Container";
import { InputForm } from "./components/InputForm";
import { Score } from "./components/Score";
import { SubmitWordEvent } from "./types";
import { Content } from "./components/styled/Content";

export const App: React.FC = () => {
    const [score, setScore] = useState<number>();

    const handleSubmit: SubmitWordEvent = (letterScore) => {
        setScore(letterScore);
    }

    return (
        <Container>
            <Content>
                <InputForm onSubmit={handleSubmit} />
                <Score value={score} />
            </Content>
        </Container>
    )
}
