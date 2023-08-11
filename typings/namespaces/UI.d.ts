/// <reference path="../types/Bar.d.ts" />

declare module UI {
  /**
   * Sprite object allowing you to manipulate the background image set using the background variable.
   * @type {Sprite}
   */
  const background: Sprite;

  /**
   * Text object displaying the Player's name as well as its level.
   * Its contents is usually the Player's name followed by two spaces, the text LV, another space,
   * then finally the Player's level.
   * @type {Text}
   */
  const namelv: Text;

  /**
   * Sprite for the HP text next to the Player's life bar.
   * @type {Sprite}
   */
  const hplabel: Sprite;

  /**
   * Bar object used as the Player's life bar.
   * @type {Bar}
   */
  const hpbar: Bar;
  /**
   * Text object displaying the Player's HP.
   * Its contents display the Player's current HP, a space, a slash, another space, and finally the Player's max HP.
   * @type {Text}
   */
  const hptext: Text;

  /**
   * Sprite for the ``FIGHT`` button.
   * Do not use its ``Remove`` function, or it may cause unexpected errors.
   * If you want to remove it, set its alpha to 0 instead.
   * @type {Sprite}
   */
  const fightbtn: Sprite;

  /**
   * Sprite for the ``ACT`` button.
   * Do not use its ``Remove`` function, or it may cause unexpected errors.
   * If you want to remove it, set its alpha to 0 instead.
   * @type {Sprite}
   */
  const actbtn: Sprite;

  /**
   * Sprite for the ``ITEM`` button.
   * Do not use its ``Remove`` function, or it may cause unexpected errors.
   * If you want to remove it, set its alpha to 0 instead.
   * @type {Sprite}
   */
  const itembtn: Sprite;

  /**
   * Sprite for the ``MERCY`` button.
   * Do not ``remove`` it in any way, or it may cause unexpected errors.
   * If you want to remove it, set its alpha to 0 instead.
   * @type {Sprite}
   */
  const mercybtn: Sprite;

  /**
   * Stops updating the Player's UI (except the buttons) by the engine if toggle is true.
   * @param {boolean} toggle - If true, the Player's UI will not be updated; if false, the UI will be updated.
   */
  function StopUpdate(toggle: boolean): void;

  /**
   * Hides all of the Player's UI, including the buttons, if hide is true.
   * @param {boolean} hide - If true, all of the Player's UI will be hidden; if false, the UI will be visible.
   */
  function Hide(hide: boolean): void;

  /**
   * Updates the Player's life bar's position and the player's hp text's position depending on the sizes of the hp bar and the hp label.
   */
  function RepositionHPElements(): void;

  /**
   * Tries to reset all modifications to the Player's UI, making it look like it originally is at the beginning of the battle.
   * Resets most of the UI elements' parameters.
   */
  function Reset(): void;

  /**
   * Returns the name of the currently selected button.
   * @returns {string} - The name of the currently selected button (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   */
  function GetCurrentButton(): string;

  /**
   * Disables the given button, preventing its selection in the state ``ACTIONSELECT``.
   * @param {string} button - The button to disable (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   */
  function DisableButton(button: string): void;

  /**
    * Reenables the given button if it was previously disabled using UI.DisableButton.
    * @param {string} button - The button to enable (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
    */
  function EnableButton(button: string): void;

  /**
   * Resets the position of the given button.
   * @param {string} button - The button to reset (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   * @param {boolean} [resetX=true] - Whether to reset the horizontal position. Default is true.
   * @param {boolean} [resetY=true] - Whether to reset the vertical position. Default is true.
   */
  function ResetButtonPosition(button: string, resetX?: boolean, resetY?: boolean): void;

  /**
   * Returns the player's horizontal position offset when selecting the given button.
   * @param {string} button - The button to query (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   * @returns {number} - The player's horizontal position offset.
   */
  function GetPlayerXPosOnButton(button: string): number;

  /**
   * Returns the player's vertical position offset when selecting the given button.
   * @param {string} button - The button to query (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   * @returns {number} - The player's vertical position offset.
   */
  function GetPlayerYPosOnButton(button: string): number;

  /**
   * Sets the player's horizontal position offset when selecting the given button.
   * @param {string} button - The button to set (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   * @param {number} newX - The new horizontal position offset.
   */
  function SetPlayerXPosOnButton(button: string, newX: number): void;

  /**
   * Sets the player's vertical position offset when selecting the given button.
   * @param {string} button - The button to set (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   * @param {number} newY - The new vertical position offset.
   */
  function SetPlayerYPosOnButton(button: string, newY: number): void;

  /**
   * Resets the player's position offset when selecting the given button.
   * @param {string} button - The button to reset (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   * @param {boolean} [resetX=true] - Whether to reset the horizontal position offset. Default is true.
   * @param {boolean} [resetY=true] - Whether to reset the vertical position offset. Default is true.
   */
  function ResetPlayerPosOnButton(button: string, resetX?: boolean, resetY?: boolean): void;

  /**
   * Sets the sprite of the given button whenever it is selected.
   * @param {string} button - The button to set (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   * @param {string} sprite - The name of the sprite to set.
   */
  function SetButtonActiveSprite(button: string, sprite: string): void;

  /**
   * Resets the sprite of the given button whenever it is selected to the one that was used by the engine at the beginning of the encounter.
   * @param {string} button - The button to reset (``FIGHT``, ``ACT``, ``ITEM``, or ``MERCY``).
   */
  function ResetButtonActiveSprite(button: string): void;

  /**
   * Sets the active button's active sprite and moves the Player where it needs to be on its currently selected button.
   * This function is automatically called after most functions related to button manipulation.
   */
  function UpdateButtons(): void;
}

/**
 * Creates a bar object which bottom left corner is at the absolute position x and y, with a size of width pixels horizontally and height pixels vertically.
 */
function CreateBar(x: number, y: number, width: number, height: number): Bar;

/**
 * Creates a bar object which bottom left corner is at the absolute position x and y, and which uses the sprites backgroundSprite and fillSprite to create the life bar.
 *
 * Both sprites must have the same size, and if no value is given for fillSprite, then it uses the same sprite as backgroundSprite.
 */
function CreateBarWithSprites(
  x: number,
  y: number,
  backgroundSprite: string,
  fillSprite?: string
): Bar;
