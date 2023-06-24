
/* @noSelfInFile */
// Make a interface for a object called Text

declare interface Text {
    /**
     * Returns the width of the currently set text in pixels.
     * Will give the same result even if the text isn't finished typing.
     * 
     * Also ignores Text.xscale.
     * Useful if you want to center your text.
     * @returns {number} The width of the text in pixels.
     */
    GetTextWidth(): number;
    /**
     * Returns the height of the curently set text in pixels.
     * Will give the same result even if the text isn't finished typing.
     * 
     * Also ignores Text.yscale.
     * 
     * [**Note**]: This function is not 100% accurate.
     * @returns {number} The height of the text in pixels.
     */
    GetTextHeight(): number;

    /**
     * Hides the text object bubble.
     */
    HideBubble(): void

    /**
     * Moves the text to a new position, relative to the text object's **parent's position**.
     * @param {number} x The X position to move the text to.
     * @param {number} y The Y position to move the text to.
     */
    MoveTo(x: number,  y: number): void;

    /**
     * Moves the text to a new position, relative to the **bottom-left** corner of the window.
     * @param {number} x The X position to move the text to.
     * @param {number} y The Y position to move the text to.
     */
    MoveToAbs(x: number, y: number): void;


}
