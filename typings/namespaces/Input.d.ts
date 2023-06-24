/**
 * The Input object allows you to retrieve input status. 
 * All keys will return a number; 
 * * `0` when not pressed. 
 * * `1` on the first frame the key is pressed.
 * * `2` while it's being held.
 * * `-1` on the first frame it's released.
 * 
 *  You can check if a key's value is greater than `0` to see if it's pressed, 
 * or if it's exactly `1/-1` to only have an action if it was just pressed/released.
 */
declare module Input {
	/**
	 * Z or Enter keys.
	 */
	const Confirm: number;

	/**
	 * X or Left Shift keys.
	 */
	const Cancel: number;

	/**
	 * C or Left Control keys.
	 */
	const Menu: number;

	/**
	 * Up arrow or W key.
	 */
	const Up: number;

	/**
	 * Down arrow or S key.
	 */
	const Down: number;

	/**
	 * Left arrow or A key.
	 */
	const Left: number;

	/**
	 * Right arrow or D key.
	 */
	const Right: number;

	/**
	 * Get the state of the given key.
	 * 
	 * @param keyname - The name of the key to check.
	 * @returns The state of the given key.
	 */
	function GetKey(keyname: string): number;

	/**
	 * Returns the X position of the mouse relative to the bottom-left corner of the screen. (from 0 to 639)
	 */
	const MousePosX: number;

	/**
	 * Returns the Y position of the mouse relative to the bottom-left corner of the screen. (from 0 to 479)
	 */
	const MousePosY: number;

	/**
	 * Returns true if the mouse is in the window, false otherwise.
	 */
	const IsMouseInWindow: boolean;

	/**
	 * Returns a number representing the change in the user's scroll wheel position (or movement supplied by the trackpad when using a Mac).
	 * 0 represents no movement, while a positive number means the user is scrolling up, and a negative number means the user is scrolling down.
	 */
	const MouseScroll: number;
}
