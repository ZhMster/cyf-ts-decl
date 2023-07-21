
/**
 * A value - true by default - that indicates that if you're on CYF. nil if not on CYF. 
 */
declare const isCYF: boolean

/**
 * A value which is true whenever CYF's retrocompatibility mode is active and false when it isn't. 
 */
declare const isRetro: boolean

/**
 * True if CYF's safe mode is enabled, false otherwise.
 */
declare const safe: boolean

/**
 * If the user is running on Windows, it'll return true. False otherwise
 */
declare const windows: boolean

/**
 * Returns a different string based on the version of CYF you are using.
 * 
 * * **Versions before `v0.6`**: Previous version's number. For example, in CYF v0.5.5, this will be "0.5.4".
 * * **Versions between `v0.6` and `v0.6.1.2`**: always "1.0".
 * * **Versions after `v0.6.1.2`**: Current version's number. For example, in CYF `v0.6.2`, this will be "0.6.2".
 * 
 * #### TIP: Lua has a very useful built-in string comparing function.
 * 
 * You can very easily check for `(CYFversion < "0.6.2.2")`, `(CYFversion >= "0.6.1.2")` and other combinations.
 */
declare const CYFversion: string

/**
 * Returns a different number based on the LTS version of CYF you are using.
 * 
 * You can compare this number to your own values to make sure the right version of CYF is used to play your mod, if needed.
 * 
 * You may also want to check if this value exists at all in case older versions of CYF are used to play your mod.
 */
declare const LTSversion: number