
/**
 * A list of random comments attached to this monster. You can retrieve one at random using the `RandomEncounterText()` function in your Encounter script.
 */
declare var comments: string[]
/**
 * A list of ACT commands you can do. Listed in the ACT menu and used in `HandleCustomCommand()`. 
 * 
 * Note that the behaviour for Check is built-in, and shows you the monster's name followed by the `ATK` and `DEF`, and then the check variable you'll see all the way down.
 * 
 * See [API - Game events](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/api-events.html) for details. 
*/
declare var commands: string[]

/**
 * A list of random dialogue the monster can have. One of these is selected at random if `currentdialogue` is `undefined` (i.e. has no value).
 * 
 * **[NOTE]**: The dialogue bubble will not be shown so long as it has no displayable letters. Set `randomdialogue` to a line with only text commands, such as `"[noskip][next]"`, to use this to your advantage.
 */
declare var randomdialogue: string[]

/**
 * The next dialogue for this monster. This overrides the random dialogue and is meant for special actions (e.g. you hit Vegetoid's green carrots after selecting Dinner from the ACT menu). This variable gets cleared every time after it's read out in the monster dialogue phase. This is done so you don't have to take care of managing it manually.
 * 
 * **[NOTE]**: The dialogue bubble will not be shown so long as it has no displayable letters. Set `currentdialogue` to a line with only text commands, such as `"[noskip][next]"`, to use this to your advantage.
 */
declare var currentdialogue: string[]

/**
 * The text which will be displayed if the Player's attack is successful but deals 0 damage. "MISS" by default.
 */
declare var defensemisstext: string

/**
 * The text which will be displayed if the Player doesn't press Z when attacking. "MISS" by default.
 */
declare var noattackmisstext: string

/**
 * Either true or false. You can leave this line out; it will be true by default. If set to false, it will disable the default Check action that shows up in your ACT menu. If you want a custom Check action, you can add it back into your `commands` table, and handle it like any other custom command. 
 */
declare var cancheck: boolean;

/**
 * Either true or false. If you leave this line out, it'll be set to false by default. If you change this to true, your monster's name will turn yellow and it will be spareable.
 */
declare var canspare: boolean;

/**
 * Tells you whether this enemy is active.
 * 
 * Will be false if they have been manually de-activated, killed or spared.  
 * Setting this will do nothing! You must call `SetActive`.
 */
declare var isactive: boolean;

/**
 * Name of the sprite in your Sprites folder, without the .PNG extension. This is the initial sprite for your monster. It can be changed using `SetSprite(name)`; 
 */
declare var sprite: string;

/**
 * Sprite handler of the monster
 */
declare const monstersprite: Sprite;

/**
 * DialogBubbles are used for the monster's dialogue, they show how will be displayed.
 * 
 * See {@link dialogbubble} for more information.
 * 
 * ---
 * 
 * ![No image preview in BASE64, you should check in browser.](https://i.imgur.com/dvXPpVJ.png) 
 * 
 * [Click here to view in your browser](https://rhenaudthelukark.github.io/CreateYourFrisk/media/dialogoptions.png)
 */
declare const enum DialogBubbles {
	Bottom = "bottom",
	Left = "left",
	LeftShort = "leftshort",
	LeftWide = "leftwide",
	Right = "right",
	RightLarge = "rightlarge",
	RightLong = "rightlong",
	RightShort = "rightshort",
	RightWide = "rightwide",
	Top = "top",
	TopTiny = "toptiny"
} 


/**
 * What dialogue bubble will be used for the monster's dialogue. You can change this at any time, but this must be initially set to something. For a list of all possible options, check the dialog bubble names chart; it's also in the sidebar. Positioning of the bubbles is done automatically.
 */
declare var dialogbubble: DialogBubbles;

/**
 * A string, appended to the beginning of every monster's dialogue. The default is `"[effect:rotate]"`
 */
declare var dialogueprefix: string;

/**
 * Monster name. Fairly self-explanatory; shows up in the FIGHT/ACT menus. Can also be changed at any time.
 */
declare var name: string;

/**
 * Your monster's health, initially. After the fight has started, this value will always accurately reflect your monster's current HP. You can then modify this value to change your monster's current HP.
 */
declare var hp: number;

/**
 * Your monster's maximum health. After the fight has started this value will be always the same, unless you change it. It is mainly used for lifebars and such. You better not set it as 0 or as a negative number, though.
 */
declare var maxhp: number;

/**
 * Your monster's Attack. Only used in the default Check handler; bullet damage is set through wave scripts. If you're not using the default Check you can leave this out.
 */
declare var atk: number;

/**
 * Your monster's Defense.
 */
declare var def: number;

/**
 * Your monster's health, initially. After the fight has started, this value will always accurately reflect your monster's current HP. You can then modify this value to change your monster's current HP.
 * 
 * This doesn't have a major effect on encounter-only gameplay, except with Overworld.
 */
declare var xp: number;

/**
 * Gold you get from either killing or sparing this monster. Since the gold can change based on whether you kill or spare the monster, you can modify this at any time up until the fight ends.
 */
declare var gold: number;

/**
 * When checking with the default Check option, this is what's listed under the monster's name, ATK and DEF.
 */
declare var check: string;

/**
 * Set it to true and the monster will not be killed if it has less than 1 HP. However, it can still be killed with `Kill()`.
 */
declare var unkillable: boolean;
/**
 * **Deprecated, always returns true.**
 * 
 * Old behavior: Returns true if you are able to move or unbind monstersprite, false otherwise.
 * 
 * @deprecated
 */
declare const canmove: true;

/**
 * The x position of the enemy's sprite.
 */
declare var posx: number;

/**
 * The y position of the enemy's sprite.
 */
declare var posy: number;

/**
 * The default font used by the monster. Set it to nil if you want to use the normal monster font.
 */
declare var font: string;

/**
 * The default voice used by the monster. Set it to nil if you want to use the default voice.
 */
declare var voice: string;
