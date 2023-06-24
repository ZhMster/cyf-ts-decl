/// <reference path="./AbstractTypes.d.ts" />
import "../enums/Shaders"

/** @noSelf */
/**
 * Shaders are kinda complicated to use, they're created by Unity and setup in AssetBundles.
 * You can access the shader objects by using `sprite.shader` or `Misc.ScreenShader`
 * @link See in [Shaders](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/shaders-object.html).  
 * The shader object is a Lua side object that can force a sprite object to display using a certain shader, and manipulate said shader.
 * A new shader object is created whenever a sprite object is created - this also includes bullets.
 * In addition, there is a shader object created for the camera itself, to apply a shader to the whole screen!
 */	
declare interface Shader {
	/**
     * Loads a shader from an AssetBundle.
     * The shader named `shaderName` is loaded from the AssetBundle named `bundleName` in the Shaders folder.
     * The bundle can be CYF's default shaders bundle, a bundle obtained from another source, or a bundle built using Unity.
     * Note that `shaderName` refers to the name of the .shader file within the bundle, not the name defined within the shader itself.
     * The file extension should not be provided.
	 * 
	 * [**NOTE**]: NOTE: If the shader is unsupported on the user's graphics card (or the shader compiled with an error), you will see an error message when loading your shader in game.
It is your responsibility as a modder to account for this. You should use the Lua function pcall to safely load your shader:
     *
     * @param {string} bundleName - The name of the AssetBundle containing the shader.
     * @param {string} shaderName - The name of the .shader file to be loaded from the bundle.
     */
	Set(bundleName: string, shaderName: string): void;
	/**
	 * ***[Unity Editor only]*** 
	 * 
	 * Loads the shader with the name `shaderName` and applies it to the sprite or screen.
	 * 
	 * **Highly recommended to use while testing shaders before packaging them into AssetBundles.**
	 * 
	 * This function will work the same as `shader.Set` otherwise, including the potential use of `pcall` if you see fit. Just remember to replace this function with `shader.Set` when you're done creating your mod.
	 * 
	 * You don't need to involve yourself with AssetBundles or directories this time - the name you enter here is just the name of a shader, as defined in its first line, such as `Shader "UI/Default"` becoming `"UI/Default"` for the argument `shaderName`.
	 * @param {string} shaderName - Shader Name to apply to the sprite or the screen.
	 */
	Test(shaderName: string): void;

	/**
	 * Returns true if a shader was successfully loaded through shader.Set or shader.Test, and false if no shader has been applied yet, or the shader was reverted using shader.Revert.
	 */
	readonly isactive: boolean;
	/**
	 * Reverts the sprite's shader to what it was originally. If no shader has been applied yet, this function simply does nothing.
	 */
	Revert(): void;

	/**
	 * Sets the wrap mode of this sprite's texture, or the screen. Only usable if a shader has been applied.
	 * 
	 * This affects what happens when a shader manipulates the position of pixels, such as with "wavey" effects. It has to do with what should be drawn in the holes outside the boundaries of the original image.
	 * You can have a different wrap mode for both the vertical and horizontal edges of the image this way.
	 * 
	 * **[NOTE]**: You may find all three wrap modes, especially the default "clamp" mode unappealing, and wish for something else. This is indeed possible, but it is handled on the shader side. Some of the example shaders in Shaders - Introduction use keywords to show transparency instead of clamping the texture to the last pixels.
	 * 
	 * @param {string} wrapMode - can be "clamp", "repeat", "mirror", "mirrorOnce". See [`shader.SetWrapMode`](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/shaders-object.html) for more info.
	 * @param {number} sides - can be `0` for vertical and horizontal, `1` for horizontal, `2` for vertical.
	*/
	SetWrapMode(wrapMode: ShaderWrapMode | "string", sides: ShaderWrapSides | number): void;
	
	/* <!--------- SHADER PROPERTY FUNCTIONS/VARIABLES ---------> */

	// FIXED MISPLL AT https://rhenaudthelukark.github.io/CreateYourFrisk/pages/shaders-object.html LOL
	/**
	 * Returns true if the active shader has a property with the name `name`, `false` otherwise. Properties must be defined within the shader's Properties block to be persistent.
	 * 
	 * For all "Get" functions listed below, the function will either return the data it found, or throw an error if the property does not exist on the shader side. Check if the property exists first using this function.
	 * **[NOTE]**: The non-persistent data types (see the section below) can not be defined in the Properties block at the top of a shader file. They can be defined in the shader's `CPROGRAM` code, but their data is likely to be lost whenever the window refreshes. Before that happens, `HasProperty` will return `true`, and after that happens, `HasProperty` will return `false`. 
	 * 
	 * @param {string} name - The name of the property.
	 */
	HasProperty(name: string): boolean;

	/**
	 * Enables a keyword named `name` within the shader script.
	 * @param {string} name - The name of the property.
	 * @link See the `keywords` in section [Coding a Shader](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/shaders-coding.html).
	 */
	EnableKeyword(name: string): void;
	/**
	 * Disables a keyword named `name` within the shader script.
	 * @param {string} name - The name of the property.
	 * @link See the `keywords` in section [Coding a Shader](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/shaders-coding.html).
	 */
	DisableKeyword(name: string): void;

	/**
	 * Gets the color in the active shader, in the property named `name`.
	 * 
	 * Here, a color is a table of either 3 or 4 number values, each from 0.0 to 1.0, following the RGBA format. If no fourth argument is provided, 1.0 is given as the fourth argument instead.
	 * @param {string} name - The name of the property.
	 */
	GetColor(name: string): [number, number, number, number];
	/**
	 * Sets the color in the active shader, in the property named `name`.
	 * 
	 * Here, a color is a table of either 3 or 4 number values, each from 0.0 to 1.0, following the RGBA format. If no fourth argument is provided, 1.0 is given as the fourth argument instead.
	 * @param {string} name - The name of the property.
	 * @param {number[4]} color - The color to set.
	 */
	SetColor(name: string, color: [number, number, number, number]): void;

	/**
	 * Gets a float in the active shader, in the property named `name`.
	 * @param name - The name of the property to get.
	 * @returns - The float value of property.
	 */
	GetFloat(name: string): number;
	/**
	 * Sets a float in the active shader, in the property named `name`.
	 * @param name - The name of the property.
	 * @param float - The value to set.
	 */
	SetFloat(name: string, float: number): void;

	/**
	 * Gets an integer (a "whole number", i.e. no decimal point) in the active shader, in the property named `name`.
	 * @param name - The name of the property.
	 * @returns - The integer value of property.
	 */
	GetInt(name: string): number;
	/**
	 * Sets an integer (a "whole number", i.e. no decimal point) in the active shader, in the property named `name`.
	 * @param name - The name of the property.
	 * @param int - The value to set.
	 */
	SetInt(name: string, int: number): void;

	/**
	 * Sets a texture in the active shader, in the property named `name`.
	 * This function loads an image in the same way as CreateProjectile or CreateSprite.
	 * 
	 * **[NOTE]**: It searches for an image named texture in your mod's "Sprites" folder first, then the Default folder's "Sprites" folder last.
	 * 
	 * Also, notice that there is no shader.GetTexture.
	 * @param name - The name of the property to set texture.
	 * @param texture - The texture to set.
	 */
	SetTexture(name: string, texture: string): void;

	/**
	 * Gets a vector ([Vector4](https://docs.unity3d.com/2018.4/Documentation/ScriptReference/Vector4.html)) in the active shader, in the property named `name`.
	 * 
	 * @param name - The name of the property.
	 * @returns - A {@link Vector4I} that has an **[w, x, y, z]** order.
	 */
	GetVector(name: string): Vector4I;
	/**
	 * Gets a vector ([Vector4](https://docs.unity3d.com/2018.4/Documentation/ScriptReference/Vector4.html)) in the active shader, in the property named `name`.
	 * @param name - The name of the property.
	 * @param vector - A {@link Vector4} that has an **[x, y, z, w]** order.
	 */
	SetVector(name: string, vector: Vector4): void;

	/**
	 * Gets the vector in the active shader, in the property named `name`.
	 * 
	 * @param name - The name of the property.
	 * @returns - A {@link Vector4IArray} that has an **[w, x, y, z]** order.
	 */
	GetVectorArray(name: string): Vector4IArray;
	/**
	 * @param name
	 * @param {Vector4Array} vector - A {@link Vector4Array} that has an **[x, y, z, w]** order.
	 */
	SetVectorArray(name: string, vector: Vector4Array): void;


	/**
	 * Creates a new Matrix object with four rows of four numbers each.
	 *
	 * @param {Array<number>} row1 - An array of four numbers representing the first row.
	 * @param {Array<number>} row2 - An array of four numbers representing the second row.
	 * @param {Array<number>} row3 - An array of four numbers representing the third row.
	 * @param {Array<number>} row4 - An array of four numbers representing the fourth row.
	 * @returns {Matrix} A new Matrix object with the four given rows.
	 */
	Matrix(row1: [number, number, number, number], 
		   row2: [number, number, number, number],
		   row3: [number, number, number, number],
		   row4: [number, number, number, number]   
		): Matrix;
	
	/**
	 * Gets the Matrix in the active shader, in the property named `name`.
	 * @param {string} name - The name of the property.
	 * @returns {Matrix} The Matrix object.
	 */
	GetMatrix(name: string): Matrix;
	/**
	 * Sets the Matrix in the active shader, in the property named `name`.
	 * 
	 * **[NOTE]**: Manipulating a matrix this way does not create a "link" between it and the shader side. If you change values of the matrix object after retrieving it with shader.GetMatrix, you will need to call shader.SetMatrix to update its values on the shader side. Likewise, if you continue to change values of the matrix object passed to shader.SetMatrix after calling the function, you will need to call it once again to update its values on the shader side.
	 * @param name - The name of the property.
	 * @param matrix - The Matrix object to set.
	 */
	SetMatrix(name: string, matrix: Matrix): void;
	/**
	 * Gets the Matrix4x4 array in the active shader, in the property named `name`.
	 * @param {string} name - The name of the property.
	 * @returns {MatrixArray} The MatrixArray object.
	 */
	GetMatrixArray(name: string): MatrixArray;
	/**
	 * Sets the Matrix4x4 array in the active shader, in the property named `name`.
	 * @param {string} name - The name of the property.
	 * @param {MatrixArray} matrixArray - The MatrixArray to set.
	 */
	SetMatrixArray(name: string, matrixArray: MatrixArray): void;
}