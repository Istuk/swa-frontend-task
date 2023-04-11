import { LETTER_SCORES } from "./consts";
import { UnknownCharacterError } from "./errors";
import { LetterScoreDictionary } from "./types";

/**
 * Get Scrabble letter score for given word.
 * @param word word we want to get score for
 * @param letterScores dictionary with scores for each letter
 * @throws {UnknownCharacterError} in case word contains character not specified in letterScore
 * @returns Scrabble score
 */
export function getLetterScore(word: string, letterScores: LetterScoreDictionary = LETTER_SCORES) {
    const arrayOfLetters = word.split('');

    const score = arrayOfLetters.reduce((prev, curr) => {
        const letterScore = letterScores[curr];

        if (!letterScore) {
            throw new UnknownCharacterError(curr);
        }

        return prev + letterScore;
    }, 0);

    return score;
}
