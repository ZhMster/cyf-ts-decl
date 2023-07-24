
/**
 * Contains all default states available in the game.
 */
declare enum DefaultStates {
	/**
	 * While in this state, you can select FIGHT/ACT/ITEM/MERCY.
	 */
	ActionSelect = "ACTIONSELECT",

	/**
	 * When starting this state, `currentdialogue` gets read from the Encounter script for every monster and their dialogue is displayed. 
	 * 
	 * If that doesn't exist, it'll return something at random from the `randomdialogue` list.
	 */
	EnemyDialogue = "ENEMYDIALOGUE",

	/**
	 * When starting this state, `nextwaves` is read out from the Encounter script and all scripts in the Waves folder with matching names will be part of this defense step. `wavetimer` is also read from the Encounter script at this time.
	 */
	Defending = "DEFENDING",

	/**
	 * Starting this state will put you in the screen where you either deal damage to an enemy by pressing "Z" at the right time, or you wait and miss entirely. 
	 * The enemy this affects is the same as the last enemy selected in the states ENEMYSELECT or ACTMENU. After this state ends, the encounter moves on to the ENEMYDIALOGUE state by default.
	 */
	Atacking = "ATTACKING",

	/**
	 * This state displays a list of all active enemies in the encounter. 
	 * 
	 * This state gets entered automatically after choosing **FIGHT** or **ACT**. If the Player got here from choosing FIGHT, the state loaded from pressing "Z" is ATTACKING, if they got here from choosing ACT, that state will be ACTMENU, but if they got here from calling State and press "Z", *nothing will happen*.
	 */
	EnemySelect = "ENEMYSELECT",

	/** This state displays all of the options from the enemy's commands in order. If the enemy has `cancheck` set to `true`, then a "Check" option will be displayed here - which will follow the syntax seen in the description for commands as seen in Basic Setup. Having more than 6 ACT commands may cause glitchiness, though, so watch out! (Additional note: the enemy chosen will always be the same as the last enemy chosen in ENEMYSELECT.)
	 */
	ActMenu = "ACTMENU",

	/**
	 * This state shows all of the player's available items. It's tied with the {@link HandleItem} function.
	 */
	ItemMenu = "ITEMMENU",

	/**
	 * MERCYMENU - This state lets you choose from either "Spare" or "Flee". If at least one active enemy has `canspare` set to `true`, then "Spare" will be yellow - and selecting it will spare that enemy. Otherwise, if the option is not yellow, then choosing "Spare" will activate the encounter function `HandleSpare`. Also, choosing "Flee" prompts some silly messages :P
	 * 
	 * If the encounter was entered from the overworld, choosing "Flee" allows the player to flee the battle and return to the overworld.
	 */
	MercyMenu = "MERCYMENU",

	/**
	 * This is the state that is entered whenever `BattleDialog` is called, when the victory message displays, when the player fails to flee, or when an item is used. When all text is done and the player presses "Z", the state `ENEMYDIALOGUE` is entered next. The soul is forcibly invisible during this state.
	 */
	DialogResult = "DIALOGRESULT",

	/**
	 * Changing state to DONE will instantly **end the current battle**. Normally, this will force the player to the mod selection screen.
	 * 
	 * If the encounter was entered from the overworld, the battle will end and the player will return to the overworld, in the same way as if the player had ended the battle normally, such as by sparing all the enemies or running away.
	 */
	Done = "DONE",

	/**
	 * This state does nothing. It is entered for the first frame of the encounter, but entering it manually will completely freeze your encounter. 
	 * 
	 * It might be useful if you want to disable all of Unitale/CYF's basic functionality.
	 * 
	 * **[TIP]: IF YOU WANT TO MAKE CUSTOM STATES FOR IT, USE {@link CreateState} FOR BETTER MANAGING!**
	 */
	None = "NONE",

	/**
	 * As of CYF **v0.6.2.1**, calling `State("PAUSE")` will perfectly "pause" an encounter. The last active state will remain active, but in a frozen state, until you call State again.
	 * 
	 * * ####  Only the {@link Update} function of the Encounter script will remain active here.
	 * 
	 * * #### To unfreeze a state, you must use {@link State} to switch to another state, preferably the last active state. {@link GetCurrentState()} will tell you the name of the frozen state.
	 */
	PauseCurState = "PAUSE",
}
