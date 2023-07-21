
/**
 * To be used with {@link Text.progressmode}
 */
declare enum TextProgressModes {
	/**
	 * Makes the text start a new line after a given number of frames set in `Text.SetAutoWaitTimeBetweenTexts()`.
	 */
	Auto = "auto",
	/**
	 * Makes the text require the player to press the Confirm button at the end of each line.
	 */
	Manual = "manual",
	/**
	 * With this option, you will need to manually display the next line in-code using `Text.NextLine()`.
	 */
	None = "none"
}