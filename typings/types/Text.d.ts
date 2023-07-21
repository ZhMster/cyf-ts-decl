/* @noSelfInFile */
// Make a interface for a object called Text

/**
 * Is a Text Object, you can create a text wherever you want, with or without a bubble, with a tail or without a tail.
 *
 * Plus, if you choose to make a bubble, the height of the bubble is automatically computed, but you can still choose the bubble's height if you want to.
 *
 * By default, a Text Object has a bubble with an automatically-set height, with no tail/speech thing. Plus, the object is hidden when you enter or come out of ENEMYDIALOGUE. If you want to change this, there are a lot of functions to do so. Look down to see them!
 *
 * See here for more information about **[Text Object](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/cyf-text.html)**.
 */
declare interface Text {
    /**
     * @alias Text.DestroyText
     */
    Remove(): void;
    /**
     * This function destroys a text object, similar to .Remove() for bullets and sprites.
     *
     * Trying to get, set or call almost anything besides Text.isactive on a destroyed text object will error.
     *
     * Note that this happens automatically if a text object closes itself, either by having the player close it or by closing automatically if progressmode is "auto".
     */
    DestroyText(): void;
    /**
     * Tells you if a text object is **active**.
     *
     * A text object will become inactive when it finishes its text and tries to continue, or if you call `Text.DestroyText()`.
     */
    readonly isactive: boolean;
    /**
     * This value is used to set the progression mode of the text to one of the following values.
     *
     * Valid values are: `"auto"`, `"manual"` and `"none"`.
     *
     * You can also use the enum  {@link TextProgressModes} for selecting valid modes.
     */
    progressmode: TextProgressModes | string;
    /**
     * This value is used to check whether the text object should be removed or not after the text is finished.
     * Its default value is `true`, meaning the text object will be automatically removed after the end of the text.
     * You can set it to `false` to automatically hide the text object once its text is complete, which allows you to reuse it later.
     */
    deleteWhenFinished: boolean;
    /**
     * The local x position of the text object, relative to its parent. This value depends on the object's pivot.
     */
    x: number;

    /**
     * The local y position of the text object, relative to its parent. This value depends on the object's pivot.
     */
    y: number;

    /**
     * The absolute x position of the text object, measured from the bottom left corner of the screen. This value depends on the object's pivot.
     */
    absx: number;

    /**
     * The absolute y position of the text object, measured from the bottom left corner of the screen. This value depends on the object's pivot.
     */
    absy: number;
    /**
     * Get or set the maximum width of the text. If the value is lower than 16, it'll be set back to 16.
     */
    textMaxWidth: number;
    /**
     * Get or set the height of the bubble. If the value is lower than 40, it'll be set back to 40.
     */
    bubbleHeight: number;
    /**
     * The sprite layer of the Text Object. If it doesn't exist, it returns an error. This is "BelowPlayer" by default.
     */
    layer: DefaultLayers | string;
    /**
     * Get or set the color of the text, as a table of 3 or 4 values from 0 to 1.
     * Black areas are not affected by coloration.
     * The 4th value is the alpha (transparency) value of the text.
     */
    color: ColorType;
    /**
     * Get or set the color of the text, as a table of 3 or 4 values from 0 to 255.
     * Black areas are not affected by coloration.
     * The 4th value is the alpha (transparency) value of the text.
     */
    color32: ColorType32;
    /**
     * Resets any previous set of the variable Text.color or Text.color32, resetting the text's default color to the font's default color.
     * @param resetAlpha If true, the text's color `alpha`will be reset.
     */
    ResetColor(resetAlpha: boolean): void;
    /**
     * Get or set the text's transparency, as a value between 0 and 1.
     */
    alpha: number;

    /**
     * Get or set the text's transparency, as an integer between 0 and 255.
     */
    alpha32: number;

    /**
     * Resets the text object's `alpha` value, whether it was set through `Text.alpha`, `Text.color` or `Text.color32`, resetting the text's default alpha to the font's default alpha.
     */
    ResetAlpha(): void;
    /**
     * Returns the number of the line (page) that the text is currently on, starting from 0.
     *
     * So, if your text object's text table is ["Text 1", "Text 2"], then "Text 1" is line 0, and "Text 2" is line 1.
     */
    currentLine: number;

    /**
     * Returns a table containing sprite objects representing every letter to be displayed in the text object's current line of text. Note that even if a text object has not finished typing yet, all characters it will type are still accessible this way.
     *
     * #### Letter sprite objects can not have their layer changed, can not run `sprite.Mask`, and can only be parented to other letter sprites. They cannot be deleted or dusted (using `sprite.Dust()`) as well.
     *
     * [**Note**]: Accessing this table generates the table anew every time. To save on resources, store this table to a local variable before doing any operations on it. Even code such as for i = 1, #text.GetLetters() do is a bad idea.
     *
     * It is recommended to use this property in coordination with the [Game Event](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/api-events.html) OnTextAdvance . You may also have some difficulty if you use this on the same frame as creating the text - read the note under CreateText for more information.
     *
     * @example
     * ```
     * const t = CreateText(["Some example text for testing!"], [40, 400], 560, "Top");
     * t.HideBubble();
     * t.progressmode = "none";
     *
     * function OnTextAdvance(text: Text, final: boolean) {
     *     if (text === t && final === false) {
     *         const letters = t.GetLetters();
     *
     *         for (let i = 0; i < letters.length; i++) {
     *             letters[i].y = Math.sin(i) * 3;
     *             letters[i].rotation = Math.sin(i * 1.5) * 6;
     *         }
     *     }
     * }
     * ```
     */
    GetLetters(): Sprite[];

    /**
     * Returns true if the current line (page) of text is fully displayed, false otherwise.
     */
    readonly lineComplete: boolean;
    /**
     * Returns true if the current line of text is fully displayed and if this is the last line the test object will show, false otherwise.
     */
    readonly allLinesComplete: boolean;

    /**
     * This function skips to the end of the text object's current text, as if using the text command `[instant]`.
     *
     * If `playerskipdocommand` is true, this function will behave the same as a player skip. See [Special Variables](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/variables.html) for an explanation on `playerskipdocommand`.
     */
    SkipLine(): void;

    /**
     * This function returns the total number of lines/pages of text set to the text object, regardless of whether they've been shown yet.
     *
     * **[NOTE]** If you run this function while this is this text object's last line, it will delete the text object if its `Text.deleteWhenFinished` variable is set to true, othrwise it will deactive it until further use.
     */
    lineCount(): number;

    /**
     * Shows the next line (dialogue) of the text instantly, regardless of if the current one is finished or what progress mode the object has.
     */
    NextLine(): void;

    /**
     * @alias Text.SetAutoWaitTimeBetweenTexts
     */
    SetWaitTime(time: number): void;

    /**
     * Sets the number of frames to wait before automatically going to the next line of text.
     *
     * ***Only applies to the `"auto"` progress mode.***
     * @param time Frames to wait before.
     */
    SetAutoWaitTimeBetweenTexts(time: number): void;

    /**
     * Sets the text object's parent.
     * **[NOTE]**: If you are in the Overworld, you can NOT use this to parent text objects to Event objects' sprites.
     * @param parent The parent object of the text object.
     */
    SetParent(parent: Sprite): void;

    /**
     * If this text object has a parent set via Text.SetParent, this will control its anchor point (the relative point on the parent sprite that the text object will follow if the parent sprite gets scaled).
     *
     * x and y should usually both be between 0 and 1. However, you are free to use numbers outside of this range as well.
     *
     * Works exactly the same as sprite.SetAnchor (see Sprites & Animation).
     */
    SetAnchor(x: number, y: number): void;

    /**
     * Same as setting Text.xscale and Text.yscale at the same time.
     */
    Scale(xscale: number, yscale: number): void;
    /**
     * Moves a text object below another text object.
     * They must both be on the same layer.
     * @param otherTextObject The text object to move below.
     */
    MoveBelow(otherTextObject: Text): void;
    /**
     * Moves a text object above another text object.
     * They must both be on the same layer.
     * @param otherTextObject The text object to move above.
     */
    MoveAbove(otherTextObject: Text): void;
    /**
     * Sends this text object to the top of its layer's hierarchy. If a sprite has 5 children, for instance, you can use this to rearrange this text object's position internally.  
     * However, child text objects will always appear on top of their parents, regardless of this function being called.
     */
    SendToTop(): void;
    /**
     * Sends this text objct to the bottom of its layer's hierarchy. Similar rules apply as with `SendToTop()`.
     */
    SendToBottom(): void;
    /**
     * Adds the given text to the object's text table.
     * 
     * Acts like Text.SetText() if all the text is already done.
     */
    AddText(text: string[] | string): void;
    /**
     * Sets the text in the Text Object.
     * 
     * If the text object is inactive when this is called, the object will reactive itself.
     */
    SetText(text: string[] | string): void;
    /**
     * Pauses the text object's typing, in the same way as `[waitfor:key]`, except that it doesn't resume until you use this function again.
     * 
     * However, while paused, text can still be skipped, unless `[noskip]` is applied to the text first.
     */
    SetPause(pause: boolean): void

    /**
     * This function will return a boolean, telling you whether text has been paused with `SetPaused`.
     * 
     * It does not count if the text object was paused by other means, such as `[waitfor:key]`.
     */
    isPaused(): boolean;
    /**
     * Sets the voice of the text object. It's the same as the text command [voice], but whatever.
     */
    SetVoice(voiceName: string): void;
    
    /**
     * Sets the font of the text. It's the same as the text command [font], but whatever.
     * Returns an error if the font doesn't exist.
     */
    SetFont(font: string): void | unknown;

    /**
     * Sets the effect of the text. Can be easily replaced with the text command [effect], but whatever.
     * 
     * @param effect Can only take none, twitch, shake or rotate as the effect.
     * @param intensity Intensity of effect, set the value to -1 for default intensity value of effect.
     */
    SetEffect(effect: string, intensity: number): void

    /**
     * Use this function to add a bubble to the text. You can also set the side and the position of the tail (a.k.a. speech thing) if you want to.
     * 
     * Look at {@link Text.SetSpeechThingPositionAndSide} to see how to use this.
     * @param side 
     * @param position Can be either number in px or string (percentage, 100%, 50%, etc.)
     */
    ShowBubble(side?: "left" | "right" | "up" | "down" | "none", position?: number | string): void;

    /**
     * Shortcut to {@link Text.SetSpeechThingPositionAndSide}.
     */
    SetTail(side?: "left" | "right" | "up" | "down" | "none", position?: number | string): void;
    /**
     * Sets the size and position of the dialogue bubble's tail (a.k.a speech thing).
     * The side can only take "left", "right", "up", "down" or "none".
     * "none" is used to hide the speech thing, while the other directions control the side of the bubble where the speech thing is.
     * 
     * @param side The side of the bubble where the speech thing is. Can be "left", "right", "up", "down", or "none".
     * @param position The position of the speech thing relative to the bubble. Can be a number or a string.
     *                 If a number and the side is "left" or "right", it determines the distance from the bottom of the bubble.
     *                 If a number and the side is "up" or "down", it determines the distance from the right side of the bubble.
     *                 If a string and the side is "left" or "right", it must be formatted like "0%" to "100%".
     *                 If a string and the side is "up" or "down", it must be formatted like "0%" to "100%".
     */

    SetSpeechThingPositionAndSide(side?: "left" | "right" | "up" | "down" | "none", position?: number | string): void;
    /**
     * [SCALE HORIZONTALLY]
     * Allows you to stretch and squish text objects, similarly to sprite objects.
     *
     * This works at any point: while the text has not yet started to type, is in the middle of typing, is paused, between lines, even if it's done typing.
     */
    xscale: number;
    /**
     * [SCALE VERTICALLY]
     * Allows you to stretch and squish text objects, similarly to sprite objects.
     *
     * This works at any point: while the text has not yet started to type, is in the middle of typing, is paused, between lines, even if it's done typing.
     */
    yscale: number;
    /**
     * Returns a number representing the total number of visible characters currently shown in the text object's text.
     * It also works the same if your text is slowed down or sped up.
     *
     * Any text commands that you have in your active line of text will be ignored by this number, as it only counts the visible characters, and not the length of the string you put into the text object.
     */
    currentReferenceCharacter: number;
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
    HideBubble(): void;

    /**
     * Moves the text to a new position, relative to the text object's **parent's position**.
     * @param {number} x The X position to move the text to.
     * @param {number} y The Y position to move the text to.
     */
    MoveTo(x: number, y: number): void;

    /**
     * Moves the text to a new position, relative to the **bottom-left** corner of the window.
     * @param {number} x The X position to move the text to.
     * @param {number} y The Y position to move the text to.
     */
    MoveToAbs(x: number, y: number): void;

    /**
     * Sets a variable in a text object that you can retrieve with Text.GetVar.
     * 
     * Identical to SetVar in projectiles.
     */
    SetVar(name: string, value: any): void;
    /**
     * Gets a variable in a text object that you previously set with Text.SetVar.
     *
     * Identical to GetVar in projectiles.
     */
    GetVar(name: string): any;
}

/**
 * This function creates a Text Object and returns it.
 *
 * [**NOTE**]: To allow for using properties such as `Text.SetFont` and `Text.color` on the same frame as creating the text object, a one-frame delay is implemented by default: The text object will not create its letters or start typing until one frame after you call `CreateText`. As a consequence, expect a few properties such as `Text.color` and `Text.Getletters` to run into issues if you run them on the same frame you use `CreateText`.
 *
 * If you need to disable the one-frame delay, start your first line of text with the [Text Command](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/api-text.html) `[instant]`. And if you need to disable that too, follow it up with `[instant:stop]`.
 *
 * ---
 *
 * @param text The text to display, used the same way as in `BattleDialog`: `["Text 1", "Text 2"]`
 * @param position Position of the text, X and Y respectivelly.
 * @param textMaxWidth You'll always need this! The bubble's width will be `20px` larger than the text's width. Also, bubbles have a minimum width of `40`.
 * @param layer The sprite layer of the *Text Object*. If it doesn't exist, it returns an error. This argument is **optional**. If it's not provided, the Text Object will be in the layer `BelowPlayer` (or `Default` in the Overworld).
 * @param bubbleHeight You can enter a static bubble height here if you want to. By default, this will be `-1`, which will auto compute the height of the bubble. However, bubbles have a minimum height of `40`.
 */
declare function CreateText(
    text: string[] | string,
    position: [number, number],
    textMaxWidth: number,
    layer: DefaultLayers,
    bubbleHeight: number
): Text;
