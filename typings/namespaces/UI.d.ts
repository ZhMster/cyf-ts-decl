
/// <reference path="../types/Bar.d.ts" />

declare module UI {
    hpbar: Bar;
}

/**
 * Creates a bar object which bottom left corner is at the absolute position x and y, with a size of width pixels horizontally and height pixels vertically.
 */
function CreateBar(x: number,  y: number,  width: number,  height: number): Bar


/**
 * Creates a bar object which bottom left corner is at the absolute position x and y, and which uses the sprites backgroundSprite and fillSprite to create the life bar.
 * 
 * Both sprites must have the same size, and if no value is given for fillSprite, then it uses the same sprite as backgroundSprite.
 */
function CreateBarWithSprites( x: number,  y: number,  backgroundSprite: string,  fillSprite?: string): Bar;
