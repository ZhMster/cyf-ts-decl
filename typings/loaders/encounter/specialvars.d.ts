
/**
 * Name of your encounter's starting music, without the file extension. If this variable isn't present, it'll play Undertale's default battle theme. If you don't want any music, call `Audio.Stop()` in the `EncounterStarting()` function.
 */
declare var music: string;

/**
 * Set the initial text of your encounter here. After that, you can modify it at any time in preparation for the next turn. encountertext gets read out at the start of every new turn (i.e. you going back to the FIGHT/ACT/ITEM/MERCY selection).
 * 
 * * You can use `\n` to create a new line with a star (*), and `\r` to create a new line without a star.
 * 
 * *As of CYF v0.6.4, if you end up with 4 or more lines of encounter text displayed at once, the text will move up (9 pixels, one time) to compensate and try to fit your text inside the box.*
 */
declare var encountertext: string;

/**
 * A list of all simultaneous attack waves you want when the monsters start their attacks. You can modify this at any time, and it'll get read out before the enemies start their attack. For most boss-type encounters, you'll likely only want one wave simultaneously - but you can get creative here.
 * 
 * @example
 * ```
 * nextwaves = ["bullettest_touhou", "bullettest_chaser"]
 * ```
 */
declare var nextwaves: string[];

/**
 * How long it takes for the defending step to end. If this isn't set anywhere, it'll be the default *4.0* seconds.
 */
declare var wavetimer: number;

/**
 * The inner size of the box the player's constrained to. {155, 130} is the default size for a lot of basic Undertale encounters. Papyrus' battle, for instance, has this at {245, 130} most of the time. You may modify this at any time - it'll only get read out before the enemies start their attack.
 * 
 * Note: lowest possible setting is {16, 16} - this is the size of the player's soul. Anything lower will be set to 16 anyway
 */
declare var arenasize: [number, number];

/**
 * Defines the names of your enemy scripts that will be used in your encounter. 
 */
declare var enemies: string[];

/** 
 * Defines where the enemies are on the screen. {0, 0} means they're centered just above the arena, with 1 pixel of space inbetween. {-30, 0} means above the arena to the left; {50, 80} means 50 pixels to the right and 80 pixels above that center.
 * 
 * You will always need at least as many enemy positions as enemies in your encounter.
 */
declare var enemypositions: [number, number][];

/**
 * False by default. If this value is set to true, the auto linebreak system will automatically add line breaks (`\r`) to the text. No need to use `\r` or `\n` anymore!
 */
declare var autolinebreak: boolean;

/**
 * False by default. If this value is set to true, text commands will be called even if the player skips the text - except for `[w]` and `[letters]` commands, and commands with the tag "`skipover`".
 */
declare var playerskipdocommand: boolean;

/**
 * False by default. If this value is set to true, you can't exit the battle with the ESC key anymore.
*/
/// @ts-expect-error
declare var unescape: boolean;

/**
 * True by default. If this value is set to false, the Flee option will not appear in the Mercy menu.
 */
declare var flee: boolean;

/**
 * `undefined` by default. 
 * 
 * Set this to `true` or `false` to force the Flee option to succeed or fail, respectively. Otherwise, if `undefined` Undertale's formula is used, which starts at a 50% chance to flee on the first turn, and increases by 10% every turn after that (regardless of if those turns were spent trying to flee as well).
 */
declare var fleesuccess: boolean | undefined;

/**
 * If you set this to a table filled with strings, a random one of your strings will be displayed whenever the player flees the battle (if that's enabled).
 */
declare var fleetexts: string[];

/**
 * If this variable is set to true, the player will be revived when they hit 0 HP.
 * 
 * By default, there will be no special text for the player being revived; however, if you set `deathtext`, that will be used.
 */
declare var revive: boolean;

/**
 * Text displayed when the player dies, in the Game Over screen. By default, it'll use the normal death text.
 * 
 * This text is also used if the player gets revived while revive is true. Otherwise, there is no revive text.
 */
declare var deathtext: string[];

/**
 * Sets the death music. The music is played if `revive` is not set.
 */
declare var deathmusic: string;

declare type Script = unknown; // I really don't know what type assign to it.
/**
 * A table returning the current wave scripts used. Returns a table with a length of 0 if not in the state DEFENDING.
 */
declare var Wave: Script[];

/**
 * If this variable is set to `true`, the rotation of any child sprite with a rotated parent will no longer be reset after either changing its sprite in any way or scaling it.
 */
declare var noscalerotationbug: boolean;
