export type KnownLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

export type LetterScoreDictionary = Record<KnownLetter, number>;

export type InputChangeEvent = React.ChangeEventHandler<HTMLInputElement>
export type FormSubmitEvent = React.FormEventHandler<HTMLFormElement>;
export type SubmitWordEvent = (letterScore: number) => void;
