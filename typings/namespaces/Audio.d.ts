/**
 * The Audio object allows you to control music in the game and play sounds.
 * It's called AudioCYF due to having a conflict to some 
 */
declare module Audio {
    /**
     * Get or set the current play position of the current music in seconds.
     */
    const playtime: number;
  
    /**
     * Get the total length of the current music in seconds.
     */
    const totaltime: number;
  
    /**
     * Play the currently loaded music. Done automatically at the beginning of a fight.
     */
    function Play(): void;
  
    /**
     * Stops the music. If you want a battle not to have music, call this in EncounterStarting().
     */
    function Stop(): void;
  
    /**
     * Pause the music.
     */
    function Pause(): void;
  
    /**
     * Unpause the music if you previously paused it.
     */
    function Unpause(): void;
  
    /**
     * Set music to given volume. value should be between 0.0 (muted) and 1.0 (full volume). This is 0.75 by default.
     * @param value - The volume to set the music to.
     */
    function Volume(value: number): void;
  
    /**
     * Set music pitch to given value. 1.0 is default, 2.0 is twice the regular speed. Negative values play the music backwards. value may be between -3.0 and 3.0.
     * @param value - The pitch to set the music to.
     */
    function Pitch(value: number): void;
  
    /**
     * Load music from the Audio folder titled filename.ogg or filename.wav and play it immediately. If you don't want immediate playback, call Audio.Stop() after this. Don't include the file extension.
     * @param filename - The name of the file to load.
     */
    function LoadFile(filename: string): void;
  
    /**
     * Play the sound from the Sounds folder titled filename.ogg or filename.wav. Don't include the file extension.
     * @param filename - The name of the file to play.
     * @param volume - The volume to play the sound at. This is 0.65 by default.
     */
    function PlaySound(filename: string, volume?: number): void;
  
    /**
     * Returns true if the music is playing, or false if the music is stopped or paused.
     */
    const isPlaying: boolean;
  
    /**
     * Stops all playing audio.
     */
    function StopAll(): void;
  
    /**
     * Pauses all the audio sources.
     */
    function PauseAll(): void;
  
    /**
     * Unpauses all the audio sources.
     */
    function UnpauseAll(): void;
  
    /**
     * Adds a sound to the sound dictionary. Doing so allows you to change the name of the sounds played by the engine - like, for example, hurtsound or menumove.
     * @param key - The key to add the sound to.
     * @param value - The value to set the key to.
     * Setting key to "RESETDICTIONARY" will reset the entire sound dictionary to its original state.
     */
    function SetSoundDictionary(key: string, value: any): void;
  
    /**
     * Returns the index of the sound in the sound dictionary. Returns the key itself if the key isn't in the dictionary.
     * @param key - The key to search for in the sound dictionary.
     */
    function GetSoundDictionary(key: string): number | string;
  

    /* 
      [key: string]: any;
    */
}
  