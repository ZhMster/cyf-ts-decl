
/* @noSelfInFile */

/**
 * The Player namespace represents the player's character in the game.
 * @noSelf
 */
declare namespace Player {
	/**
	 * Gets the X position of the player's center relative to the arena's center.
	 * @readonly
	 */
	const x: number;
	/**
	 * Gets the Y position of the player's center relative to the arena's center.
	 * @readonly
	 */
	const y: number;
	/**
	 * Gets the X position of the player's center relative to the bottom left corner of the screen.
	 * @readonly
	 */
	const absx: number;
	/**
	 * Gets the Y position of the player's center relative to the bottom left corner of the screen.
	 * @readonly
	 */
	const absy: number;
	/**
	 * The Player's soul sprite component.
	 * See the Sprites & Animation section for usage details.
	 */
	const sprite: Sprite;
	/**
   * The current HP of the player.
   * Can't exceed max HP. If set to 0, game over triggers.
   * The HP value is a float, but there may be issues with float value accuracy.
   */
	let hp: number;

	/**
	 * The maximum HP of the player.
	 * As of CYF v0.6.4, this value is settable.
	 * Setting this is the same as calling Player.SetMaxHPShift(<value>, 0, true, false, false).
	 * Max HP is not a float, but regular HP is.
	 */
	let maxhp: number;

	/**
	 * The difference between the player's current Max HP and their normal, unmodified Max HP.
	 */
	const maxhpshift: number;

	/**
	 * The base attack of the player.
	 * Depends on the player's level.
	 * Changing Player.lv or ending the battle will reset this to its intended value.
	 */
	const atk: number;

	/**
	 * The name of the player's current weapon.
	 */
	const weapon: string;

	/**
	 * The attack value of the player's current weapon.
	 */
	const weaponatk: number;

	/**
	 * The base defense of the player.
	 * Depends on the player's level.
	 * Changing `Player.lv` or ending the battle will reset this to its intended value.
	 */
	const def: number;

	/**
	 * The name of the player's current armor.
	 */
	const armor: string;

	/**
	 * The defense value of the player's current armor.
	 */
	const armordef: number;

	/**
	 * The player's speed in pixels per second.
	 * Default is 120.
	 */
	let speed: number;
	/**
	 * The name of the player.
	 * The name can be up to 9 characters long.
	 * By default, the player's name is "Rhenao".
	 */
	let name: string;

	/**
	 * The current level of the player.
	 * The player's level can be between 1 and 20 (99 in <CYF>).
	 * The player's level is 1 by default.
	 * The player starts with 20HP / 10 ATK and gets 4 HP / 2 ATK per level.
	 * Leveling up the player through code doesn't automatically heal them; you'll have to do this manually.
	 */
	let lv: number;

	/**
	 * The ID of the last chosen enemy in the ACT/FIGHT menus.
	 * -1 at the beginning of a fight.
	 * NOTE: This is NOT the same as the enemy's position in the enemies table. This is the position of the enemies in the menu in-game.
	 */
	const lastenemychosen: number;
	/**
	 * The accuracy value from the last time the player was in ATTACKING.
	 * Normally, it will be between 0 and 2.
	 * It will be -1 if the player missed the attack (and at the beginning of the battle) and 2.2 if the attack was perfectly precise.
	 */
	const lasthitmultiplier: number;

	/**
	 * True if the player's currently blinking due to being hurt, false otherwise.
	 */
	const ishurting: boolean;

	/**
	 * True if the player is currently moving in battle, false otherwise.
	 * Will always be false while not in a wave script.
	 * NOTE: This only will change with the default control scheme (see Player.SetControlOverride below).
	 */
	const ismoving: boolean;
	/**
	 * Deals damage to the player, and makes them invincible for invul_time seconds.
	 * Can not hurt the player again if they are already hurting (flashing).
	 * Set ignoreDef to true, and if the encounter variable allowPlayerDef is true, the damage dealt here will ignore the player's defense.
	 * 
	 * Call `Player.Hurt(0, 0)` to stop the player's invincibility frames without making a sound.
	 * Set playSound to false, and no sound will be played whatsoever.
	 */
	function Hurt(damage: number, invul_time?: number, ignoreDef?: boolean, playSound?: boolean): void;

	/**
	 * Heals the player for this amount. 
	 * This is exactly the same as `Player.Hurt(-value, 0)`.
	 * It also plays the healing sound. 
	 * 
	 * If you want to heal the Player without making a sound, just call `Player.Hurt(-value, 1.7, false, false)`.
	 */
	function Heal(value: number): void;

	// Either true or false. Only useable in waves.
	// If true, this will prevent the player soul from doing its regular movement/keyboard control for the rest of the wave (in other words, it disables the red soul functionality).
	// Use this if you want to implement your own controls in a wave (i.e. a custom soul mode, like the blue or purple soul).
	function SetControlOverride(override: boolean): void;
	// Moves the player soul based on its last position.
	// If ignoreWalls is false, it will make sure the player doesn't go outside of the arena; otherwise, it ignores the arena's boundaries.
	// If you want to move the player out of bounds in a wave, you'll have to call Player.SetControlOverride(true), as the player's default movement keeps the soul inside the arena otherwise.
	function Move(x: number, y: number, ignoreWalls?: boolean): void;

	/**
	 * Set the player's soul position **relative** to the arena's center. If `ignoreWalls` is false, it will make sure the player doesn't go outside of the arena; otherwise, it ignores the arena's boundaries. If you want to move the player out of bounds in a wave, you'll have to call Player.SetControlOverride(true) as the player's default movement keeps the soul inside the arena.
	 * @param {number} x 
	 * @param {number} y 
	 * @param {boolean} ignoreWalls 
	 */
	function MoveTo(x: number, y: number, ignoreWalls?: boolean): void;
	
	function MoveToAbs(x: number, y: number, ignoreWalls?: boolean): void;

	function ForceHP(amount: number): void;

	function SetMaxHPShift(shift: number, invulnerabilitySeconds: number, set: boolean, canHeal: boolean, playSound: boolean): void;

	/**
	 * Resets the player's Max HP, ATK and/or DEF to their original values based on the player's LV.
	 * 
	 * The values set through this function are chosen according to [this chart](https://undertale.fandom.com/wiki/Stats#Stat_Chart).
	 * @param {boolean} resetMHP - If true, the player's Max HP will be set back to what it should be based on the player's LV.
	 * @param {boolean} resetATK - If true, the player's ATK will be set back to what it should be based on the player's LV.
	 * @param {boolean} resetDEF - If true, the player's DEF will be set back to what it should be based on the player's LV.
	 */
	function ResetStats(resetMHP: boolean, resetATK: boolean, resetDEF: boolean): void;

	function SetAttackAnim(anim: string[], frequency: number, prefix: string): void;

	function ResetAttackAnim(): void;
	
	function ChangeTarget(targetNumber: number): void;

	function ForceAttack(enemyID: number, damage: number): void;

	/**
	 * Executes a multi-target attack.
	 * The next attack the player executes will attack the enemies contained in `targetIDs`
	 * and deal damage `damage`. If no parameters are provided, all enemies will be attacked
	 * with normal damage calculations.
	 * Each target can have an individual damage value if `damage` is an array of numbers,
	 * or all targets will share the same damage value if `damage` is a single number.
	 *
	 * @param targetIDs - An array of target IDs representing the enemies to be attacked.
	 *                   If not provided, all enemies will be attacked.
	 * @param damage - An array of damage values or a single damage value to be dealt to the targets.
	 *                If not provided, normal damage calculations will be used.
	 */
	function MultiTarget(targetIDs?: number[] | null, damage?: number[] | number): void;

	/**
	 * Executes a multi-target attack with a single damage value.
	 * The next attack the player executes will attack all enemies and deal damage `damage`.
	 *
	 * @param damage - The damage value to be dealt to all enemies.
	 */
	function MultiTarget(damage: number): void;

	function ForceMultiAttack(targetIDs: number[], damage: number | number[]): void;

	function ForceMultiAttack(damage: number): void;

	function CheckDeath(): unknown;


}
