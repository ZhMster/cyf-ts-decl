/**
 * Creates a layer that sprites can be placed in. To create your new sprite
 * layer, you'll need to choose a pre-existing layer.
 * @param {string} name - Name of layer
 * @param {string} position - The layer to be positioned preceding to... Should be one of DefaultLayers or the one created, if there's any.
 * @param {boolean} below - Whether if the layer should be placed below the layer or above. If true, layer will be placed below.
 * @returns {boolean} - Returns true if the layer was successfully created, false otherwise. 
 */
declare function CreateLayer(name: string, position: ValidLayerType, below: boolean): boolean

/**
 * The Sprite object has many controls intended for animation. There is a working intermediate example included in the Examples folder.
 */
declare interface Sprite {
    /**
     * Returns the path of the image used by this sprite, starting from the Sprites/ folder.
     */
    readonly spritename: string;
    /**
     * Horizontal position of sprite relative to the bottom left corner of the screen, measured from its pivot/anchor point (center by default).
     * If parented, x position is relative to the parent.
     */
    x: number;
    /**
     * Vertical position of sprite relative to the bottom left corner of the screen, measured from its pivot/anchor point (center by default).
     * 
     * If parented, y position is relative to the parent.
     */
    y: number;
    /**
     * (OVERWORLD ONLY!)
     * Layering position of sprite in the Overworld only. A negative number brings it forward (closer to the camera), a positive number sends it backwards (farther into the background).
     * Note that the only thing this will affect is how your sprite and its children appear in front of the Player and Event objects.
     * This variable can NOT be used to circumvent the layering system for regular sprites.
     * 
     * If parented, z position is relative to the parent.
     */
    z: number;
    /**
     * Horizontal position of sprite relative to the bottom left corner of the screen, ignoring its pivot/anchor point and all parents.
     */
    absx: number;
    /**
     * Vertical position of sprite relative to the bottom left corner of the screen, ignoring its pivot/anchor point and all parents.
     */
    absy: number;
    /**
     * (OVERWORLD ONLY!)
     * Layering position of sprite in the Overworld only. A negative number brings it forward (closer to the camera), a positive number sends it backwards (farther into the background).
     * Same as sprite.z, except that if this sprite has a parent, sprite.absz will not be relative to the z value of the parent.
     */
    absz: number;
    /**
     * Horizontal scaling of sprite (1.0 by default). 2.0 is twice as large, 0.5 is half as large.
     * Scaling applies based on the sprite's pivot point - see SetPivot, xpivot and ypivot.
     * 
     * However, in the Overworld, Event object sprites ignore pivot when scaling.
     */
    xscale: number;
    /**
     * Vertical scaling of sprite (1.0 by default). 2.0 is twice as large, 0.5 is half as large.
     * Scaling applies based on the sprite's pivot point - see SetPivot, xpivot and ypivot.
     * 
     * However, in the Overworld, Event object sprites ignore pivot when scaling.
     */
    yscale: number;
    /**
     * In retromode (0.2.1a), Returns true if the sprite has been removed and false otherwise.
     * If not in retromode, this is false if the sprite has been removed and true otherwise.
     */
    readonly isactive: boolean; 
    /**
     * Gives the width of the sprite object's active image in pixels.
     * This never changes until the sprite itself is swapped.
     * NOTE: Does not take sprite.xscale into account.
     */
    readonly width: number;
    /**
     * Gives the height of the sprite object's active image in pixels.
     * This never changes until the sprite itself is swapped.
     * NOTE: Does not take sprite.yscale into account.
     */
    readonly height: number;

    /**
     * Horizontal pivot point of the sprite. 0 is the left side, and 1 is the right side.
     * Can be any number inside or outside of this range.
     * 0.5 by default.
     * @default 0.5
     */
    xpivot: number;
    /**
     * Vertical pivot point of the sprite. 0 is the bottom side, and 1 is the top side.
     * Can be any number inside or outside of this range.
     * 0.5 by default.
     * 
     * See sprite.SetPivot.
     * @default 0.5
     */
    ypivot: number;
   
    
    
    
    

    /** 
     * If a sprite has started an animation, this tells you if the animation is complete.
     * 
     * If a sprite does not have an active animation, if the animation's loop mode is LOOP, or if the animation isn't finished yet, this will be false. Otherwise, it will be true.
    */
    readonly animcomplete: boolean;




    /**
     * If a sprite has an active animation running, this represents the index of the active frame in the animation.
     * Otherwise, this will return 0.
     * 
     * @example
     * ```
     * SPRITE.SetAnimation(["sans_head1", "sans_head2", "sans_head3", "sans_head2"])
     * ```
     * Then this variable will be 1 when the first image is shown, 2 for the second, and so on, up to 4 for the last one.
     * Likewise, setting sprite.currentframe = 3 with the above example will jump the animation to the first frame where "sans_head3" would be the currently shown image.
     */
    currentframe: number;
    /**
     *     If a sprite has an active animation running, this represents its current play time, in seconds.
     * Can both be read and set.
     * 
     * If an animation is not running, this will be 0.
     * Similar in function to NewAudio.GetPlayTime / NewAudio.GetCurrentTime.
     */
    currenttime: number;

    /**
     * If a sprite has an active animation running, this represents the total amount of time its animation will last for.
     * Note that this is based on the speed the animation runs at, and will always be equal to (sprite.animationspeed * the number of frames in a sprite's animation).
     * If an animation is not running, this will be 0.
     * Similar in function to NewAudio.GetTotalTime.
     */
    readonly totaltime: number;
    /**
     * If a sprite has an active animation running, this represents the amount of seconds each frame will be displayed for.
     * 
     * Can both be read and set. Must be > 0.    
     */
    animationspeed: number;
    /**
     * If a sprite has an active animation running, you can set this to true to pause it, or false to resume it.
     */
    animationpaused: boolean;
    
    /**
     * Gets the loop mode of a sprite's current animation, or sets the loop mode of a sprite's next animation.
     * 
     * Can be:
     * LOOP - The default mode: when the animation is finished, it plays again. animcomplete is always false with this mode.
     * ONESHOT - Plays the animation once. The sprite object will remain on the last frame of the animation.
     * ONESHOTEMPTY - Same as ONESHOT, except that when the animation is finished, the sprite object will use an empty sprite.
     */
    loopmode: "LOOP" | "ONESHOT" | "ONESHOTEMPTY"

    /**
     * Gets or sets the coloration of a sprite, as a table of 3 or 4 values from 0 to 1. 
     * 
     * You can provide a 4th value, which sets the alpha (transparency) of the sprite.
     * 
     * @example 
     * ```
     * sprite.color = {1.0, 0.0, 0.0} 
     * ```
     * Colors the sprite red. This actually overlays the sprite's original color, so if you want full control over the color, make sure your sprite is white. Black areas are not affected by coloration.
     */
    color: [number, number, number, number?];
    /**
     * Gets or sets the coloration of a sprite, as a table of 3 or 4 values from 0 to 255.
     * 
     * You can provide a 4th value, which sets the alpha (transparency) of the sprite.
     * @example 
     * ```
     * sprite.color32 = {255, 0, 0}
     * ``` 
     * Colors the sprite red. This actually overlays the sprite's original color, so if you want full control over the color, make sure your sprite is white. Black areas are not affected by coloration.
     */
    color32: [number, number, number, number?];
    /** 
     * Gets or sets a sprite's transparency, as a value from 0 to 1.
     */
    alpha: number;
    /** Gets or sets a sprite's transparency, as a value from 0 to 255. */
    alpha32: number;
    /**
     * Gets or sets a sprite's rotation, in degrees.
     * 
     * It's clamped between 0 and 360, so if you set it to 365, it will become 5.
     */
    rotation: number;

    /**
     * Gets or sets the current layer a sprite is on. Does nothing if you set it to a layer that doesn't exist.
     * Default value: "BelowArena" (or "Default" in the Overworld)
     * 
     * Overworld Event sprites and Text Objects letter sprites can not have their layers set.
     * 
     * Note: It is common practice to use sprite.layer to deparent a sprite if you need to do so. Setting it again will parent the sprite to the given layer, removing its previous parenting altogether.
     */
    layer: DefaultLayers | string;
    
    /**
     * Change a sprite's current image. It retains its scaling and rotation.
     * 
     * If you have an animation running with SetAnimation, the animation will override your sprite change.
     * 
     * Note: Using this function with a sprite which has a parent with a different rotation will reset the sprite's rotation to its usual value. Setting the variable noscalerotationbug to true in the Encounter script prevents that effect!
     * @param {string} newSprite - Path of sprite.
     */
    Set(newSprite: string): void;

    /**
     * Parents sprite to otherSpriteObject.
     * This will make the original sprite move along with the object it's parented to.
     * NOTE: If you are in the Overworld, you can NOT use this to parent sprites to Event objects' sprites, or vice versa.
     * 
     * Text Object letter sprites can only be parented to other Text Object letter sprites.   
     * @param {Sprite} targetParentObj sprite object to parent to.
     */
    SetParent(targetParentObj: Sprite): void;

    /**
     * Sets the masking mode of this sprite object.
     * Does not function for Overworld Event sprites or Text Object letter sprites!
     *
     * Available modes are:
     *
     * - "off": The default mode. Has no special properties.
     * - "box": Any objects parented to this sprite are restricted to the bounding box of the sprite.
     *            Recommended for masking bullets to the Arena and such things. Unfortunately doesn't seem to work well with rotated sprites,
     *            but this is still the recommended mode for performance.
     * - "sprite": Any objects parented to this sprite will be "cookie cuttered" to the current image of the sprite.
     * - "stencil": Same as sprite, except that the parent sprite itself is not visible.
     * - "invertedsprite": The reverse of sprite; while the sprite itself is visible, any of its children will only display when not inside the bounds of the sprite.
     * - "invertedstencil": Identical to invertedsprite except that the parent sprite is not shown.
     *
     * Anything parented to this sprite object through the use of SetParent - including Other Sprite Objects,
     * Projectiles, and even Text Objects - will all be masked according to the mask mode entered here.
     *
     * If using invertedsprite or invertedstencil, you may be unable to change the mask mode back to a normal mode afterwards (other than "off").
     * We fear this issue is unavoidable and unfixable - as these inverted mask modes work by directly altering Unity's image display code.
     *
     * NOTE: If you want to have a child that's not masked, you'll need to create a new invisible sprite (using the default sprite "empty" is recommended),
     *       parent both the intended parent and child sprite to the invisible sprite, and apply motion to the invisible sprite rather than the parent sprite.
     *
     * @param {SpriteMaskMode} mode - The masking mode to set.
     */
    Mask(mode: SpriteMaskMode): void;
    
    /**
     * The shader object linked to this sprite object.
     *
     * Be aware that due to the nature of shaders, it is possible for some shaders to break certain Create Your Frisk properties,
     * such as sprite layering and sprite masking.
     * It is recommended that shaders used be based on the template shader provided in Coding a Shader.
     *
     * @see [The Shader Object](link-to-shader-object-docs)
     */
    shader: Shader;

    /**
     * Changes the point a sprite rotates and scales around.
     *
     * @param {number} x - The X-coordinate of the pivot point. (0, 0) is the bottom-left corner of the sprite, (1, 1) is the top-right corner.
     *                     You can also have values outside the 0-1 range.
     * @param {number} y - The Y-coordinate of the pivot point. (0, 0) is the bottom-left corner of the sprite, (1, 1) is the top-right corner.
     *                     You can also have values outside the 0-1 range.
     *
     * @remarks
     * The origin point of the sprite will change after the usage of this function, meaning moving the sprite to a given relative position
     * (through sprite.Move(), sprite.x or sprite.y) will move the sprite to a different position, centering the sprite's pivot on the new position.
     */
    SetPivot(x: number, y: number): void ;
        
    /**
     * Changes the point a sprite anchors to when moving. Works much like `sprite.SetPivot()`, except it takes the sprite's parent into account.
     *
     * @param {number} x - The X-coordinate of the anchor point. Should be between 0 and 1.
     * @param {number} y - The Y-coordinate of the anchor point. Should be between 0 and 1.
     *
     * @remarks
     * The origin point of the sprite will change after the usage of this function, meaning moving the sprite to a given relative position
     * (through `sprite.Move()`, `sprite.x`, or `sprite.y`) will move the sprite to a different position, relative to its parent.
     * An anchor of (0, 0) means the sprite's pivot point will be on the bottom-left corner of its parent's own sprite.
     * If a sprite has no parent, then all layers span across the entire screen.
     */
    SetAnchor(x: number, y: number): void;

    /**
     * Moves the sprite x pixels right and y pixels up.
     *
     * @param {number} x - The number of pixels to move the sprite to the right.
     * @param {number} y - The number of pixels to move the sprite up.
     *
     * @see sprite.x and sprite.y
     */
    Move(x: number, y: number): void;
    
    
    /**
     * Moves the sprite to the specified position.
     *
     * @param {number} x - The X-coordinate to move the sprite to.
     * @param {number} y - The Y-coordinate to move the sprite to.
     *
     * @see sprite.x and sprite.y
     */
    MoveTo(x: number, y: number): void;
    /**
     * Moves the sprite to the specified absolute screen position, regardless of its parent settings.
     *
     * @param {number} x - The absolute X-coordinate to move the sprite to.
     * @param {number} y - The absolute Y-coordinate to move the sprite to.
     *
     * @see sprite.absx and sprite.absy
     */
    MoveToAbs(x: number, y: number): void;

    /**
     * Sets the scale of the sprite along the X and Y axes.
     *
     * @param {number} xscale - The scale factor along the X-axis.
     * @param {number} yscale - The scale factor along the Y-axis.
     *
     * @remarks
     * Using this function with a sprite that has a parent with a different rotation will reset the sprite's rotation to its usual value.
     * Setting the variable `noscalerotationbug` to `true` in the Encounter script prevents that effect!
     *
     * @see sprite.xscale and sprite.yscale
     */
    Scale(xscale: number, yscale: number): void;

    /**
     * Performs frame-by-frame animation with custom time between frames, in seconds.
     * It's the same as changing the sprite object's image with `sprite.Set` on a set timer.
     * If `timePerFrame` is 1, it takes 1 second to move to the next sprite.
     *
     * @param {string[]} spriteTable - An array of sprite names representing the animation frames.
     * @param {number} [timePerFrame=1/30] - The time duration per frame in seconds. Defaults to 1/30 seconds.
     * @param {string} [prefix=""] - An optional string providing the path to a folder contained within your Sprites folder.
     *                               This path will be automatically added to the beginning of every sprite's name.
     *
     * @remarks
     * This function can use sprites with different sizes.
     * Using this function with a sprite that has a parent with a different rotation will reset the sprite's rotation to its usual value.
     * Setting the variable `noscalerotationbug` to `true` in the Encounter script prevents that effect!
     *
     * @example
     * sprite.SetAnimation(["sans_head1", "sans_head2", "sans_head3"]);
     *
     * @example
     * An example using prefix, so you can load a collection of 6 sprites in "Sprites/Character".
     * ```
     * sprite.SetAnimation(["spr1", "spr2", "spr3", "spr4", "spr5", "spr6"], 1/30, "character");
     * ```
     */
    SetAnimation(spriteTable: string[], timePerFrame?: number, prefix?: string): void;

        
    /**
     * Stops a frame-by-frame animation if it was running.
     * Does NOT reset your sprite's image back to its previous one! Instead, use `Set()` just after this function.
     */
    StopAnimation(): void;

    /**
     * Sends this sprite to the top of its layer's hierarchy.
     * If a sprite has children, this function can be used to rearrange their internal order.
     * However, child sprites will always appear on top of their parents, regardless of this function being called.
     */
    SendToTop(): void;

    /**
     * Sends this sprite to the bottom of its layer's hierarchy.
     * Similar rules apply as with `SendToTop()`.
     */
    SendToBottom(): void;

    /**
     * Moves the calling sprite just below the specified `otherSpriteObject` if they have the same parent.
     *
     * @param {Sprite} otherSpriteObject - The sprite object to move below.
     */
    MoveBelow(otherSpriteObject: Sprite): void;

    /**
     * Moves the calling sprite just above the specified `otherSpriteObject` if they have the same parent.
     *
     * @param {Sprite} otherSpriteObject - The sprite object to move above.
     */
    MoveAbove(otherSpriteObject: Sprite): void;

    /**
     * Removes the sprite object. Calling anything other than `isactive` after this will give you an error.
     * Removing a sprite object will also remove all its children.
     */
    Remove(): void;

    /**
     * Sets a variable in the sprite object that can be retrieved with `GetVar`.
     * Identical to `SetVar` in projectiles.
     *
     * @param {string} yourVariableName - The name of the variable to set.
     * @param {any} value - The value to assign to the variable.
     */
    SetVar(yourVariableName: string, value: any): void;

    /**
     * Gets the value of a variable in the sprite object that was previously set with `SetVar`.
     * Identical to `GetVar` in projectiles.
     *
     * @param {string} yourVariableName - The name of the variable to get.
     * @returns {any} The value of the variable.
     */
    GetVar(yourVariableName: string): any;

    /**
     * Turns the sprite into dust, similar to what happens in Undertale when an enemy is killed.
     *
     * @param {boolean} [playSound=true] - Specifies whether to play the dust sound. Default is `true`.
     * @param {boolean} [removeObject=false] - Specifies whether to remove the sprite object. Default is `false`.
     *
     * @remarks
     * Calling `bullet.sprite.Dust(..., true)` will instead call `bullet.Remove`, unless you are using retromode.
     */
    Dust(playSound?: boolean, removeObject?: boolean): void;
}

/**
 * Creates a sprite at the center of the screen (at 320, 240) that can be modified in many ways.
 * @param {string} spritename - The name of the sprite to create.
 * @param {string} [layer="BelowArena"] - The layer to place the sprite on. Defaults to "BelowArena", set "none" to spawn your sprite outside of any layers, in the same way that the player is by default (although this doesn't have much use).
 * @param {number} [childNumber=-1] - The index of the sprite within the layer. Leave it as -1 to have it move to the top of whatever layer it's placed on (default behavior), or choose a numbered index you want it to appear in, with 1 being the very bottom-most in the layer, and higher numbers moving it above other elements in sequence.
 * @returns {Sprite} The created sprite object.
 */
declare function CreateSprite(spritename: string, layer: string, childNumber: number): Sprite;

/**
 * Creates a sprite at the center of the screen (at 320, 240) that can be modified in many ways.
 * Uses the default layer "BelowArena" in battles or "Default" in the Overworld.
 *
 * @param {string} spritename - The name of the sprite.
 * @param {number} [childNumber=-1] - The index of the sprite within the layer. Default is -1, which moves the sprite to the top of the layer.
 * @returns {sprite} The created sprite object.
 */
declare function CreateSprite(spritename: string, childNumber: number): Sprite;