
export class UnknownCharacterError extends Error {
    public character: string;

    constructor(character: string) {
        super(`Unsupported letter '${character}'`);

        this.character = character;
    }
}
