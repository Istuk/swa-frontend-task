import { LETTER_SCORES } from "./consts";
import { UnknownCharacterError } from "./errors";
import { KnownLetter, LetterScoreDictionary } from "./types";

/**
 * Get Scrabble letter score for given word.
 * @param word word we want to get score for
 * @param letterScores dictionary with scores for each letter
 * @throws {UnknownCharacterError} in case word contains character not specified in letterScore
 * @returns Scrabble score
 */
export function getLetterScore(word: string, letterScores = LETTER_SCORES) {
    const arrayOfLetters = word.toLocaleLowerCase().split('');

    const score = arrayOfLetters.reduce((prev, curr) => {
        if (!isKnownLetter(curr)) {
            throw new UnknownCharacterError(curr);
        }

        const letterScore = letterScores[curr];

        return prev + letterScore;
    }, 0);

    return score;
}

export function isKnownLetter(letter: string): letter is KnownLetter {
    const knownLetters = Object.keys(LETTER_SCORES);

    return knownLetters.includes(letter);
}
