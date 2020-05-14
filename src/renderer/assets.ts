// assets.ts
/**
 * Common assets used throughout the front-end
 *
 * authors: Niall C.C
 * @packageDocumentation
 */
import { join } from 'path'
import { Token } from "../game_data/player"


/**
 * Maps a Token enum to an image path
 */
const getTokenPath = (fileName: string): string => join("..", "assets", "images", "tokens", fileName)
const tokenImageMap: Record<Token, string> = {
    [Token.CAT]: getTokenPath("cat.png"),
    [Token.BOOT]: getTokenPath("boot.png"),
    [Token.SPOON]: getTokenPath("spoon.png"),
    [Token.GOBLET]: getTokenPath("goblet.png"),
    [Token.HATSTAND]: getTokenPath("hatstand.png"),
    [Token.SMARTPHONE]: getTokenPath("smartphone.png")
}

export { tokenImageMap }
