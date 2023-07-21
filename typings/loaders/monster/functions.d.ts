
/**
 * Sets the monster's sprite from the Sprites folder to filename.png. Can be used with [func] to change sprites mid-dialogue.
 */
declare function SetSprite(filename: string): void;

/**
 * Either true or false. If false, this monster will stay on screen but will not show up in menus, do its dialogue or run any of its events.  
 * You can use this to introduce monsters to an encounter at a later point.
 * The battle will end when a monster is killed or spared and there are no active monsters left.  
 * 
 * Having no active monsters at all will likely cause a bunch of errors right now.
 * @
 */
declare function SetActive(active: boolean): void;

/**
 * Set the amount of damage the monster will take the next time it is attacked. Can be negative.
 * 
 * This function can only be used within the Game Event BeforeDamageCalculation, or just before using the function Player.ChangeTarget.
 * 
 * You also don't want to use it with a monster who's been disabled with `SetActive(false)`.
 * @param amount - the number of damage the monster will take, or 0 to make the attack miss.
 */
declare function SetDamage(amount: number): void;

/**
 * Kills the monster immediately. If this was the last monster, the battle ends.
 * 
 * Does NOT call the Game Event OnDeath.
 * @param playSound - If playSound is set to false, the dusting sound will not be played.
 */
declare function Kill(playSound: boolean): void;

/**
 * Spares the monster immediately. Similar to Kill(), if this was the last monster, the battle ends.
 * 
 * Does NOT call the Game Event OnSpare.
 * @param playSound - If playSound is set to false, the sparing sound will not be played.
 */
declare function Spare(playSound: boolean): void

/**
 * Moves the enemy's sprite relative to its current position.
 */
declare function Move(x: number, y: number): void;
/**
 * Set's the enemy's sprite relative position to the bottom left corner of the screen.
 * This is effectively the same as setting enemypositions again, except x is 320px left and y is 231px down.
 */
declare function MoveTo(x: number, y: number): void;

/**
 * Controls whether the enemy's sprite will follow the Arena's movements.
 * 
 * @param bind - If bind is true, the enemy will be parented to the Arena and follow all of its movements.
 * @param isUnderArena - It will be either behind or in front of the arena
 */
declare function BindToArena(bind: boolean,isUnderArena?: boolean): void;

/**
 * Makes the enemy's dialogue bubble appear x pixels horizontally and y pixels vertically relative to its original position.
 */
declare function SetBubbleOffset(x: number, y: number): void;

/**
 * Changes the offset of the enemy's damage UI (the enemy's health bar and the red numbers). Note that the damage UI is on a layer above that of the arena.
 */
declare function SetDamageUIOffset(x: number, y: number): void;

/**
 * Changes the offset of the attack animation (the red slice by default) for when the player attacks this monster.
 */
declare function SetSliceAnimOffset(x: number, y: number): void;

/**
 * This function immediately removes this enemy from the encounter, including the script it's been called from.
 * 
 * Be aware that removing an enemy this way will **NOT** remove it from the Encounter script's enemies table, so you have to manage the table yourself by removing this enemy script from it before running this function, because any reference to it will be invalid.
 */
declare function Remove(): void;