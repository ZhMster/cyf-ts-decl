
/**
 * Write text to the debug console (toggleable with F9).
 * It will appear automatically the first time you write text to it.
 * You can use this to check values in your code, or make sure some pieces of code are actually running.
 *
 * @param {string} text - The text to be written to the debug console.
 */
declare function DEBUG(text: string): void;

/**
 * Forcefully allows or disallows the showing of the debugger. If you enter false,
 * the debugger will be immediately hidden if it is open, and will no longer show itself for any reason.
 * If you then enter true, the debugger will not appear again immediately, but can be re-opened if the user presses F9.
 *
 * The debugger is enabled by default.
 * [**Note**]: The state of the debugger also applies to the state of the FPS display.
 *
 * @param {boolean} bool - A boolean value indicating whether to enable or disable the debugger.
 */
declare function EnableDebugger(bool: boolean): void;

/**
 * Sets a global variable. 
 * After setting, you can retrieve it from all your scripts at any time with `GetGlobal(variable_name)`.
 *
 * @param {string} varName - The name of the variable to set.
 * @param {any} value - The value to assign to the variable.
 */
declare function SetGlobal(varName: string, value: any): void;

/**
 * Gets a global variable that you previously set using SetGlobal().
 * 
 * @param {string} varName - The name of the variable to retrieve.
 * @returns {any} The value of the global variable.
 */
declare function GetGlobal(varName: string): any;

/**
 * Sets a global variable that is accessible even in the overworld. After setting it,
 * you can retrieve it from all of your scripts at any time with `GetRealGlobal(variable_name)`.
 * Persists through battles, but not between sessions. These variables can be saved using the overworld save system.
 *
 * Note: "Complex" variables (such as tables, functions and userdata) can not be saved as Real or AlMighty globals.
 * Also note: as Real and AlMighty Globals persist across mods, it is possible for mods to read each others' globals.
 * Be careful when choosing global names.
 *
 * @param {string} varName - The name of the variable to set.
 * @param {any} value - The value to assign to the variable.
 */
declare function SetRealGlobal(varName: string, value: any): void;

/**
 * Gets a global variable that you previously set using SetRealGlobal().
 * Can be used in the overworld.
 *
 * @example
 * ```
 * declare EncounterStarting() {
 *		if (GetRealGlobal("EncounterStarting") == false) {
 * 			BattleDialog("I see[waitall:0.25]...[waitall:1]\nYou're [color:ff0000]determined[color]")
 * 		}
 * }
 * ```
 * @param {string} varName - The name of the variable to retrieve.
 * @returns {any} The value of the global variable.
 */
declare function GetRealGlobal(varName: string): any;

/**
 * Sets an AlMighty Global variable that is instantly saved into a file when set: these globals persist through sessions.
 * However, you can use the Remove AlMighty Globals button in modDev to remove them.
 *
 * Note: "Complex" variables (such as tables, functions and userdata) can not be saved as Real or AlMighty globals.
 * Also note: as Real and AlMighty Globals persist across mods, it is possible for mods to read each others' globals.
 * Be careful when choosing global names.
 * 
 * **Can be used in the overworld.**
 *
 * @param variable_name - The name of the variable to set.
 * @param value - The value to assign to the variable.
 */
declare function SetAlMightyGlobal(varName: string, value: any): void;

/**
 * Gets an AlMighty Global variable that you previously set using SetAlMightyGlobal().  
 * **Can be used in the overworld.**
 *
 * @param {string} varName - The name of the variable to retrieve.
 * @returns {any} The value of the global variable.
 */
declare function GetAlMightyGlobal(varName: string): any;

/**
 * Set to true if you want frame-based player movement (2px/frame) instead of time based player movement (120px/s).
 * Set it to false if you already are in frame-based movement and you want to go back to the time based movement.
 * By default, time-based movement is used (same as if SetFrameBasedMovement(false) were called).
 *
 * Note that this function only controls the player's movement with the default control scheme (see Player.SetControlOverride in The Player Object).
 *
 * @param {boolean} enable - A boolean value indicating whether to enable or disable frame-based player movement.
 */
declare function SetFrameBasedMovement(enable: boolean): void;

/**
 * Used alongside State("ENEMYSELECT") (or EnteringState when entering the same state) to force the player to choose FIGHT or ACT.
 * This controls whether you'll see the enemy's health bar in the menu and whether the next state upon pressing Z is ATTACKING or ACTMENU.
 * If used in the state ACTIONSELECT, this function will move the player over the specified button.
 *
 * @param action - A string value indicating which action to set. Valid values are "FIGHT", "ACT", "ITEM", or "MERCY".
 */
declare function SetAction(action: "FIGHT" | "ACT" | "ITEM" | "MERCY"): void;

/**
 * If the given value is true, all damage that the player will take will be reduced - like in Undertale -
 * by 1 point for each 5 defense, with the player's defense at LV1 not affecting the damage.
 * Damage taken can not be fully blocked and will always be at least 1.
 * False by default.
 *
 * In other words, calling `AllowPlayerDef(true)` will make the defense cosmetic, non-functional.
 * @param enable - A boolean value indicating whether to enable or disable player defense.
 */
declare function AllowPlayerDef(enable: boolean): void;

/**
 * This makes the list of strings you give to the function appear in the UI dialog box.  
 * After skipping through them, you will automatically go to the monster dialogue step by default.  
 * 
 * [**Note**]: As of CYF v0.6.4, if you end up with 4 or more lines of battle dialog displayed at once, the text will move up (9 pixels, one time) to compensate and try to fit your text inside the box.
 * Below is a working example of how you could use it for a Vegetoid encounter. 
 * @example
 * ```
 * declare HandleCustomCommand(command: string) {
 *   if (command == "DINNER") {
 * 		if (ate_greens) {
 *         currentdialogue = ["Ate\nYour\nGreens"];
 *      } else {
 *         currentdialogue = ["Eat\nYour\nGreens"];
 *      }
 *      BattleDialog(["You pat your stomach.\nVegetoid offers a healthy meal."])
 *   }
 * }
 * ```
 *
 * @param list_of_strings - An array of strings representing the lines of dialogue to show.
 */
declare function BattleDialog(list_of_strings: string[]): void;

/**
 * Creates a custom state with the given name, which will function like the NONE state.
 * You cannot have two states with the same name.
 *
 * The State is registered in the game internals, not as return value.
 * @param name - The name of the custom state to create.
 */
declare function CreateState(name: string): void;


/**
 * Removes the sprite loaded through the given path from CYF's internal cache, allowing you to load it from your folder again.
 * Usually, CYF keeps all sprites it loads in an encounter in memory so the engine does not have to load it again, which may create a lag spike.
 * However, if the sprite is changed during the mod, the file will not be reloaded, and only its first version will be kept until the encounter is over, or the mod is unloaded in the overworld.
 *
 * @param path - The path of the sprite to unload.
 * @returns void
 */
declare function UnloadSprite(path: string): void;

/**
 * Returns the name of the current state.
 *
 * @returns The name of the current state as a string.
 */
declare function GetCurrentState(): string;

/**
 * A powerful function that immediately skips the battle to the specified state, rather than following the default conventions.
 *
 * Arguably the best part about State is that it can be used in conjunction with the text command [func] to change the state from within your dialogue. An example is below - this will have a monster say that he will not fight you, then return to the action select screen, instead of starting a wave.
 * 
 * See {@link DefaultStates} for more information about States.
 * 
 * @param {string} state_to_go_to - A string value indicating which state to go to. **Valid values** are: "**ACTIONSELECT**", "**ENEMYDIALOGUE**", "**DEFENDING**", "**ATTACKING**", "**ENEMYSELECT**", "**ACTMENU**", "**ITEMMENU**", "**MERCYMENU**", "**DIALOGRESULT**", "**DONE**", "**NONE**".
 */
declare function State(state_to_go_to: DefaultStates | string): void;


/**
 * Sets the encounter's default collision system.
 * 
 * [**Note**]: Calling this will force all bullets with Bullet.ppchanged as false to use the collision system you enter here (see above).
 * You can also view hitboxes in game when pressing `H` with the debugger open.
 * @param {boolean} usePPCollision - If true, sets the collision system to PPCollision. If false, sets it to the regular "Unitale" system.
 */
declare function SetPPCollision(usePPCollision: boolean): void;
