
/**
 * The NewAudio object allows you to create sound channels and has overall better music management than the Audio object.
 * 
 * Audio Channels can play up to one sound at a time, and will stop any currently playing sounds if you add a new sound to the channel.
 * 
 * #### NOTE! The default audio channel used by the Audio object (not this one) is called "src".
 * 
 * It exists at the start of the encounter, and, by default, all music and sounds will be played there.
 */
declare module NewAudio {
	/**
	 * Creates the audio channel name.
	 * @param name - The name of the channel
	 */
	function CreateChannel(name: string): void
	/**
	 * Destroys the audio channel name.
	 * @param name - The name of the channel
	 */
	function DestroyChannel(name: string): void
	/**
	 * Checks if the audio channel name exists.
	 * @param name - The name of the channel
	 */
	function Exists(name: string): boolean
	/**
	 * Gets the name and type of the audio clip currently playing in the channel `name` as a string.
	 * 
	 * If no audio is playing in a channel, this function returns `"empty"`.
	 * @param name - The name of the channel
	 * @param withPrefix  the string returned by this function will begin with `music:` for music clips, `sound:` for sound clips and `voice:` for voice clips.
	 * 
	 * For example, playing the sound `dogsecret` in an audio channel and using this function on that channel would return the string `"sound:dogsecret"` (or `"dogsecret"`).
	 * 
	 * @returns - The name and type of audio clip currently playing.
	 */
	function GetAudioName(name: string, withPrefix: boolean): string

	/**
	 * Gets the length of time in seconds that an audio channel name's most recently played audio lasts for.
	 * @param name - The name of the channel
	 */
	function GetTotalTime(name: string): number;

	/**
	 * Get the current play position of the current audio of this channel in seconds.
	 * The same as {@link GetPlayTime}.
	 * @param name - The name of the channel
	 */
	function GetCurrentTime(name: string): number 
	/**
	 * Get the current play position of the current audio of this channel in seconds.
	 * The same as {@link GetCurrentTime}.
	 * @param name - The name of the channel
	 */
	function GetPlayTime(name: string): number 

	/**
	 * Plays the music `music` on the channel name.
	 * Songs played are loaded from your mod's `Audio` folder, as `.ogg` or `.wav` files. Don't include the file extension.
	 * @param name - The name of the channel
	 * @param music - The path of the music
	 * @param loop - Whether the music should loop
	 * @param volume - The volume of the music
	 */
	function PlayMusic(name: string, music: string,  loop?: boolean,  volume?: number): void

	/**
	 * Plays the sound `sound` on the channel name.
	 * Songs played are loaded from your mod's `Sounds` folder, as `.ogg` or `.wav` files. Don't include the file extension.
	 * @param name - The name of the channel
	 * @param sound - The path of the sound
	 * @param loop - Whether the sound should loop
	 * @param volume - The volume of the sound
	 */
	function PlaySound( name: string,  sound: string,  loop?: boolean,  volume?: number): void

	/**
	 * Plays the voice `voice` on the channel name.
	 * Songs played are loaded from your mod's `Sounds/Voices` folder, as `.ogg` or `.wav` files. Don't include the file extension.
	 * @param name - The name of the channel
	 * @param voice - The path of the voice
	 * @param loop - Whether the voice should loop
	 * @param volume - The volume of the voice
	 */
	function PlayVoice(name: string, voice: string, loop?: boolean, volume?: number): void
	/**
	 * Sets the pitch/speed of the audio channel name.
	 * 1.0 is normal pitch/speed.
	 * @param name - The name of the channel
	 * @param value - The pitch to set
	 */
	function SetPitch(name: string, value: number): void
	
	/**
	 * Gets the pitch/speed of the audio channel name.
	 * @param name - The name of the channel
	 */
	function GetPitch(name: string): number

	/**
	 * Sets the volume of the audio channel `name`.  
	 * **0.75** is the default value.
	 * 
	 * @param name - The name of the channel
	 * @param value - The volume to set
	 */
	function SetVolume(name: string, value: number): void

	/**
	 * Gets the volume of the audio channel `name`.
	 * @param name - The name of the channel
	 */
	function GetVolume(name: string): number

	/**
	 * Plays the last sound played in the audio channel `name`.
	 * @param name - The name of the channel
	 */
	function Play(name: string): void

	/**
	 * Stops the audio in the channel `name`.
	 * @param name - The name of the channel
	 */
	function Stop(name: string): void

	/**
	 * Pauses the audio in the channel `name`.
	 * @param name - The name of the channel
	 */
	function Pause(name: string): void

	/**
	 * Unpauses the audio in the channel `name`.
	 * @param name - The name of the channel
	 */
	function Unpause(name: string): void

	/**
	 * Sets the track position of the audio channel name's audio, in seconds.
	 * @param name - The name of the channel
	 * @param value - The volume to set
	 */
	function SetPlayTime(name: string, value: number): void

	/**
	 * Checks if the audio channel name is stopped (or paused).
	 * @param name - The name of the channel
	 */
	function IsStopped(name: string): boolean

	/**
	 * Stops all audio channels' audio.
	 */
	function StopAll(): void

	/**
	 * Pauses all audio channels
	 */
	function PauseAll(): void

	/**
	 * Unpauses all the audio channels' audio.
	 */
	function UnpauseAll(): void



} 