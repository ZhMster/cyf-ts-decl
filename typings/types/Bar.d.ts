/**
 *
 * This separate section lists the various functions and variables are usable when dealing with a bar object, which can be used for life bars, for example.
 *
 * These objects are used in CYF as life bars, whether it's the Player's, the life bars appearing next to the enemy's names after selecting the FIGHT button and the life bar appearing after attacking an enemy.
 *
 * Bar objects are composed of three sprites (four of them if it has an outline) which are all children of one another: fill is the child of mask which is itself the child of background. If the bar's outline exists, then background will be its child.
 */
interface Bar {
  /**
   * Background sprite of the bar object, which is also the parent of all other standard bar elements.
   */
  background: sprite;

  /**
   * Mask sprite of the bar object, used to hide part of the `fill` sprite. A mask is used in order to cut the `fill` sprite if it's a sprite other than a single pixel scaled up, allowing for the bar's `fill` to be cut instead of squished.
   */
  mask: sprite;

  /**
   * Fill sprite of the bar object, which is used to represent the amount of the bar which is still full.
   */
  fill: sprite;

  /**
   * Outline sprite of the bar object, which adds a black outline to the bar object. It needs to be created first using the function AddOutline().
   *
   * If it exists, it will be the parent of the background sprite.
   */
  outline: sprite;

  /**
   * Value usually between ``0`` and ``1`` that gives the percentage of the bar which is currently full. ``0`` means the bar is empty, while ``1`` means it is full.
   *
   * Can be outside of these bounds if ``SetInstant()`` or ``SetLerp()`` are used without clamping.
   */
  readonly currentFill: number;

  /**
   * Returns true if the bar object has an outline sprite, false otherwise.
   */
  readonly hasOutline: boolean;

  /**
   * Returns the thickness in pixels of the outline sprite. Returns 0 if the outline doesn't exist.
   *
   * Can be set to resize the outline's thickness.
   */
  outlineThickness: boolean;

  /**
   * Sets the fill percentage of the bar object between 0 and 1. 0 means the bar is empty, while 1 means it is full.
   *
   * If allowNonClamped is set to true, you can use values lower than 0 and higher than 1.
   *
   * Note that the bar will be updated properly when fillValue is beyond its usual bounds only if the bar-px sprite is used for all of the bar's sprites.
   */
  SetInstant(fillValue: number, allowNonClamped: boolean): void;

  /**
   * Gradually sets the fill percentage of the bar object between 0 and 1 to fillValue over time frames, with 60 frames being equal to one second. 0 means the bar is empty, while 1 means it is full.
   *
   * If allowNonClamped is set to true, you can use values lower than 0 and higher than 1.
   *
   * Note that the bar will be updated properly when fillValue is beyond its usual bounds only if the bar-px sprite is used for all of the bar's sprites.
   *
   * If there's 4th param, the first will be considered ``originalValue``` that allows you to set the initial fill percentage of the bar.
   */
  SetLerp(fillValue: number, time?: number, allowNonClamped?: boolean): void;

  /**
   * Gradually sets the fill percentage of the bar object between 0 and 1 to fillValue over time frames, with 60 frames being equal to one second. 0 means the bar is empty, while 1 means it is full.
   *
   * If allowNonClamped is set to true, you can use values lower than 0 and higher than 1.
   *
   * Note that the bar will be updated properly when fillValue is beyond its usual bounds only if the bar-px sprite is used for all of the bar's sprites.
   *
   * You can set the initial fill percentage of the bar object using ``originalValue``.
   */
  SetLerp(
    originalValue: number,
    fillValue: number,
    time?: number,
    allowNonClamped?: boolean
  ): void;

  /**
   * Creates a rectangle outline sprite which has a thickness of thickness pixels on all sides. This new sprite will be the parent of the background sprite, which means it needs to be moved if you want to move the entire bar object if it exists.
   *
   * The standard color of the outline is black, but you can change the color of the outline sprite by setting the values r, g and b between 0 and 1.
   */
  AddOutline(thickness: number, r?: number, g?: number, b?: number): void;

  /**
   * Removes the outline sprite if it exists without removing the bar object.
   */
  RemoveOutline(): void;

  /**
   * Sets the scale of the various elements of the bar object. If the outline sprite shouldnt be updated, set updateOutline to false.
   *
   * If used on a bar object using the bar-px sprite for both its background and its fill sprite, then the bar object will be width pixels wide and height pixels tall.
   */
  Resize(width: string, height: string, updateOutline?: boolean): void;

  /**
   * Sets the sprites of the various elements of the bar object. ``bgSprite`` will replace the image of the ``background`` sprite, ``fSprite`` will replace the image of the ``fill`` sprite, ``mSprite`` will replace the image of the ``mask`` sprite and ``oSprite`` will replace the image of the ``outline`` sprite, if it exists.
   * 
   * The size of the ``background`` and ``fill`` sprites must always be the same, hence why if ``fSprite`` is not given, it will use the same spite as ``bgSprite``.
   */
  SetSprites(
    bgSprite: string,
    fSprite?: string,
    mSprite?: string,
    oSprite?: string
  ): void;

  /**
   * Hides the bar object completely if visible is set to false, shows it otherwise.
   */
  SetVisible(visible: boolean): void;

  /**
   * Destroys this bar object, removing all of its sprites. The Player's lifebar cannot be destroyed.
   */
  Destroy(): void;
}
