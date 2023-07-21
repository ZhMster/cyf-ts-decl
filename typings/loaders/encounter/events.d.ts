
/* <-- EVENTS THAT SHOULD BE OVERRIDED. --> */

/**
 * Happens once when everything's done initializing but before any encounter actions start.
 * You should do things like stopping the music here, or using {@link State()} if you want to start the fight off with some dialogue.
 * @virtual **This function is a root event/callback that should be overrided, and not called directly, since it's handled by game.**
 */
declare function EncounterStarting(): void

/**
 * Happens when you go to the monster dialogue state. You're still free to modify monster dialogue here.
 */
declare function EnemyDialogueStarting(): void

/**
 * Happens when you go from the monster dialogue state to the defending state.
 */
declare function EnemyDialogueEnding(): void

/**
 * Happens when you go from the defending state of the game to any other state. If you read up on the {@link RandomEncounterText()} function, you'll want to use it here.
 */
declare function DefenseEnding(): void;

/**
 * Happens when you select the Spare option from the Mercy menu, regardless of whether a monster is spareable or not. This event fires after the sparing of monsters is completed. If you spare the last enemy in the encounter, this function will not happen - the encounter is over at that point.
 */
declare function HandleSpare(): void;

/**
 * Happens when you select the Flee option from the Mercy menu. If you implement {@link HandleFlee()}, the fleeing sequence will not run automatically, and you will have to do it manually with the Flee() function.
 * 
 * `success`: Whether the fleeing condition is true.
 */
declare function HandleFlee(success: boolean): void;

/**
 * Happens when you select an item from the item menu.
 * 
 * In CYF, you can use the Inventory object to edit the player's inventory. The items' names will be in caps, like with HandleCustomCommand().
 * 
 * @param item_ID The name of the item used, <ins>**IN ALL CAPS.**</ins> Similar to {@link HandleCustomCommand} in monster scripts.
 * @param position The position of the item used in the player's inventory. The first item is number 1.
 */
declare function HandleItem(item_ID: string,  position: number): void

/**
 * This function runs for every frame (usually at 60FPS, depends on the player's framerate) for all of the encounter, even during waves. 
 * 
 * This is an extremely powerful function, as it can run any code at any time, no matter what.  
 * The only exception is the game over state - if the player dies, no code from within this function will be run.  
 */
declare function Update(): void;

/**
 * A new, more flexible way of handling state changes. When you enter a new state, this function will fire with newstate containing the new state's name, and oldstate containing the previous state's name. Both are in all caps. One of the most powerful things about it is that you can use State() here to interrupt state changes initiated by the engine itself.
 */
declare function EnteringState(newstate: string,  oldstate: string): void

/**
 * This function runs the moment the Player takes mortal damage (by any means, including bullet damage, scripted damage, setting `Player.hp` to `0`, and even text commands), just before activating the Game Over sequence. This is the perfect place to set **Real** and **AlMighty Globals** you want set when the player dies.
 * 
 * If you use `Player.hp` or `Player.Heal` here to bring the Player's hp back to greater than `0`, they will live and the Game Over sequence will be cancelled.
 */
declare function BeforeDeath(): void