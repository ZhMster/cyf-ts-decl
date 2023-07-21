

/**
 * This namespace **DOESN'T EXISTS IN CYF**, it was made to make your life easier.
 * 
 * Contains enums that should be used with Text.
 * 
 * @example
 * ```
 * BattleDialog(`${_H_Text.ColorSets.Determination}Stay determined...`)
 * ```
 */
declare namespace TextCommandsEx {
	/**
	 * Equivalent to `[color:rrggbb]`
	 * This sets the text color for all text after
	 */
	enum ColorSets {
		Determination = "[color:ff0000]",
		Integrity = "[color:003cff]",
		Kindness = "[color:00c000]",
		Justice = "[color:ffff00]",
		Perseverance = "[color:d535d9]",
		Bravery = "[color:fca600]",
		Patience = "[color:42fcff]",
		/**
		 * The default color of UI Text.
		 */
		White = "[color:ffffff]",
		/**
		 * The default color of enemy dialogue text.
		 */
		Black = "[color:000000]",
		/**
		 * This command resets any previous usage of the [color:rrggbb] command, displaying any following text in the font's default color.
		 */
		RESET = "[color]",
	}
	enum AlphaSets {
		Full = "[alpha:ff]",
		Partial = "[alpha:aa]",
		Semi = "[alpha:55]",
		Clear = "[alpha:00]",
		RESET = "[alpha]",
	}
}