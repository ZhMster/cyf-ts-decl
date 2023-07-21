
/**
 * Returns the name of the wave file, without the extension, from the Waves folder.
 * 
 * Other than the above, wave scripts don't have any variables that are read out from the start, but you can define your own. An instance of a wave script is made when you start defending, and is destroyed when the defending step ends. As such, you can't store variables in a wave script for reusing later. Use the Encounter script to keep track of things.
 */
declare var wavename: string;
