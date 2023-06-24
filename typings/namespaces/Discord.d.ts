/**
 * This namespace is used to manipulate the data the **Discord Rich Presence Status** bar displays, if Discord is open and if this feature is enabled.
 * This feature can be customized in Create Your Frisk's options screen, accessible from the mod selection screen.
 *
 * This object cannot override the user's settings for Discord Rich Presence.
 */
declare namespace Discord {
  /**
   * Sets the top row of the **Discord Rich Presence Status** bar, if enabled in the user's options.
   *
   * By default, this line displays `Playing Mod: MODNAME` (with `MODNAME` being the name of your mod) in battle, or `In the Overworld` if in the Overworld.
   *
   * Setting `name` to `""` doesn't display the line at all.
   * @param {string} name - The name to show inn the line of the Rich Presence Status bar.
   */
  function SetName(name: string): void;
  /**
   * Resets the top row of the **Discord Rich Presence Status** bar, if enabled in the user's options.
   * @param {boolean} reset - If `reset` is true, the entire line will be hidden. Otherwise, it will be reset to its default value (see {@link Discord.SetName}).
   */
  function ClearName(reset: boolean): void;
  /**
   * Sets the second row of the **Discord Rich Presence Status** bar, if enabled in the user's options.
   * 
   * By default, this line displays the name of the currently running encounter file in battle, or the name of the current map if in the Overworld. If the current map has no name, the line will be hidden.
   *
   * Map names are set in `AddKeysToMapCorrespondanceList` in the file
   * [Assets/Scripts/Util/UnitaleUtil.cs.](https://github.com/RhenaudTheLukark/CreateYourFrisk/blob/5ac229f9f2f07c758975687f15ee6fb21cfa0d90/Assets/Scripts/Util/UnitaleUtil.cs#L592)
   *
   * Setting `details` to `""` doesn't display the line at all.
   * @param {string} details - The details to show in the line of the Rich Presence Status bar.
   */
  function SetDetails(details: string): void;

  /**
   * Resets the second row of the **Discord Rich Presence Status** bar, if enabled in the user's options.
   *
   * @param {boolean} reset - If reset is true, the entire line will be hidden. Otherwise, it will be reset to its default value (see {@link Discord.SetDetails}).
   */
  function ClearDetails(reset: boolean): void;
  /**
   * Sets the current `time` displayed in the **Discord Rich Presence Status** bar, if enabled in the user's options.
   * By default, this line will display the time elapsed since the encounter was started in battle, or it will be hidden if in the Overworld.
   * 
   * @param {number} time - The number of seconds. The displayed time is in the `minutes:seconds` format, so every multiple of 60 in `time` will display as one minute.
   * @param {boolean} countdown - If countdown is true, the given time will be displayed as a countdown timer, counting down to `0:00` from the value you entered (in the format `mm:ss` remaining).
   */
  function SetTime(time: number, countdown: boolean): void;
  /**
   * Resets the current time displayed in the **Discord Rich Presence Status** bar, if enabled in the user's options.
   * Since there is no timer in the Overworld, using reset may produce some erroneous values if used in the Overworld.
   * 
   * @param {boolean} reset - If reset is true, the entire line will be hidden. Otherwise, it will be reset to its default value (see Discord.SetTime above). 
   */
  function ClearTime(reset: boolean): void;
}
