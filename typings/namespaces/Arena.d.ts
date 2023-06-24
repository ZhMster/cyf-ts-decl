/**
 * The Arena object can be used to obtain information about the arena, resize it or move it.
 * Don't forget that the Arena's position is reset at the end of the wave!
 */
declare module Arena {
    /**
     * The width of the arena in pixels, after resizing. Since the reference for the player and bullets is the arena's center, you can get the left/right side of the arena with -Arena.width/2 and Arena.width/2 respectively.
     */
    const width: number;
    /**
     * The height of the arena in pixels, after resizing. Like with width, you can get the bottom/top with -Arena.height/2 and Arena.height/2 respectively.
     */
    const height: number;
    /**
     * The x position of the center of the Arena, after resizing.
     */
    const x: number;
    /**
     * The position of the bottom of the Arena, after resizing. To get that of the center, just do Arena.y + Arena.height/2.
     * [**Note**]: NOTE: Arena.y is the position of the bottom of the outside (white part) of the Arena. It will be 5 pixels (the arena's width) less than Arena.currenty.
     */
    const y: number;
    /**
     * The current width of the arena in pixels. Differs from width in that it will accurately reflect the arena size in the middle of resizing, too.
     */
    const currentwidth: number;
    /**
     * The current height of the arena in pixels. Differs from height in that it will accurately reflect the arena size in the middle of resizing, too.
     */
    const currentheight: number;
    /**
     * The current x of the arena in pixels. Differs from x in that it will accurately reflect the arena position in the middle of moving, too.
     */
    const currentx: number;
    /**
     * The current y of the arena in pixels. Differs from y in that it will accurately reflect the arena position in the middle of moving, too.
     * NOTE: Arena.currenty is the position of the bottom of the inside (black part) of the Arena. It will be 5 pixels (the arena's width) greater than Arena.y.
     */
    const currenty: number;
    /**
     * Tells you if the Arena is currently being resized.
     */
    const isResizing: boolean;
    /**
     * Tells you if the Arena is currently being moved.
     */
    const isMoving: boolean;
    /**
     * Returns true if the Arena is being moved or resized, false otherwise.
     */
    const isModifying: boolean;
     /**
     * Makes the Arena invisible, but it will stay active.
     */
    function Hide(): void;
     /**
      * Makes the Arena visible after using `Arena.Hide`.  
      * [**Note**]: This is not called automatically whenever a wave ends anymore, meaning the arena will be permanently hidden if Arena.Hide is used.
      */
    function Show(): void;
     /**
     * Resizes the arena to the new size. Currently, monsters stay on top of the arena. This was going to be changed around the animation update.
     * But, in CYF, you can use BindToArena to control that!
     * @param {number} width - The new width of the arena in pixels.
     * @param {number} height - The new height of the arena in pixels.
     */
     function Resize(width: number, height: number): void;
     /**
      * Resizes the arena instantly, without the animation.
      * @param {number} width - The new width of the arena in pixels.
      * @param {number} height - The new height of the arena in pixels.
      */
     function ResizeImmediate(width: number, height: number): void;
     /**
     * Moves the Arena based on its current position. Set movePlayer to true if you want the Player to move with the Arena and set immediate to true if you want to move the Arena immediately.
     * @param {number} x - The amount to move the Arena in the x direction in pixels.
     * @param {number} y - The amount to move the Arena in the y direction in pixels.
     * @param {boolean} movePlayer - Whether or not to move the player with the Arena. Defaults to true.
     * @param {boolean} immediate - Whether or not to move the Arena immediately. Defaults to false.
     */
    function Move(x: number, y: number, movePlayer?: boolean, immediate?: boolean): void;
    /**
     * Moves the Arena based on the bottom-left corner of the window. Set movePlayer to true if you want the Player to move with the Arena and set immediate to true if you want to move the Arena immediately.
     * @param {number} x - The new x position of the Arena in pixels, based on the bottom-left corner of the window.
     * @param {number} y - The new y position of the Arena in pixels, based on the bottom-left corner of the window.
     * @param {boolean} movePlayer - Whether or not to move the player with the Arena. Defaults to true.
     * @param {boolean} immediate - Whether or not to move the Arena immediately. Defaults to false.
     */
    function MoveTo(x: number, y: number, movePlayer?: boolean, immediate?: boolean): void;
    /**
     * Moves the Arena based on its current position and resizes it at the same time. Set movePlayer to true if you want the Player to move with the Arena and set immediate to true if you want to move the Arena immediately.
     * @param {number} x - The amount to move the Arena in the x direction in pixels.
     * @param {number} y - The amount to move the Arena in the y direction in pixels.
     * @param {number} width - The new width of the Arena in pixels.
     * @param {number} height - The new height of the Arena in pixels.
     * @param {boolean} movePlayer - Whether or not to move the player with the Arena. Defaults to true.
     * @param {boolean} immediate - Whether or not to move the Arena immediately. Defaults to false.
     */
    function MoveAndResize(x: number, y: number, width: number, height: number, movePlayer?: boolean, immediate?: boolean): void;
    /**
     * Move the Arena based on the bottom-left corner of the window and resizes it at the same time. Set movePlayer to true if you want the Player to move with the Arena and set immediate to true if you want to move the Arena immediately.
     * @param {number} x - The new x position of the Arena in pixels, based on the bottom-left corner of the window.
     * @param {number} y - The new y position of the Arena in pixels, based on the bottom-left corner of the window.
     * @param {number} width - The new width of the Arena in pixels.
     * @param {number} height - The new height of the Arena in pixels.
     * @param {boolean} movePlayer - Whether or not to move the player with the Arena. Defaults to true.
     * @param {boolean} immediate - Whether or not to move the Arena immediately. Defaults to false.
     */
    function MoveToAndResize(x: number, y: number, width: number, height: number, movePlayer?: boolean, immediate?: boolean): void;

    /**
     * Set RGBA color (0-1) of Arena's inner sprite.
     */
    const innerColor: [number, number, number, number];
    /**
     * Set RGBA color (0-255) of Arena's inner sprite.
     */
    const innerColor32: [number, number, number, number];
    /**
     * Set RGBA color (0-1) of Arena's outer sprite.
     */
    const outerColor: [number, number, number, number];
    /** 
     * Set RGBA color (0-255) of Arena's outer sprite. 
     * */
    const outerColor32: [number, number, number, number];
}