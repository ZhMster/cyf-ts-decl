/*
	AbstractTypes are not existant in game, but they're made for better consistence for specific types, example "Color" and "Color32", in which both has the same return.

	This doesn't include "Integer", "Float" and array of "Integer" and "Float".
 */
/**
 * @module AbstractTypes
 * @description Used to create a more consistent type system for very specific types. Such as Vector4. However, it's still an array or a existing type, just an alias for typechecking.
 */

/**
 * Color `[r,g,b]` withing range [0,1] float.
 */
declare type Color = [number, number, number];
/**
 * Color `[r,g,b]` withing range [0,255] integer.
 */
declare type Color32 = [number, number, number];

/**
 * Color `[r,g,b,a]` withing range [0,1] float.
 * This specific type should have the 4th property that is **Alpha**.
 */
declare type ColorA = [number, number, number, number];
/**
 * Color `[r,g,b,a]` withing range [0,255] integer.
 * This specific type should have the 4th property that is **Alpha**.
 */
declare type ColorA32 = [number, number, number, number];

/**
 * A valid color type for a color that has optionally **Alpha**. `[r,g,b,a]` or `[r,g,b]`.
 * This type has a range float between `[0, 1]`
 */
declare type ColorType = Color | ColorA
/**
 * A valid color type for a color that might have **Alpha** or not. `[r,g,b,a]` or `[r,g,b]`.
 * This type has a range float between `[0, 255]`
 */
declare type ColorType32 = Color32 | ColorA32

/**
 * ColorArray, is a array of {@link Color} objects [0,1].
 * 
 * This type is still an array of array of number[4].
 */
declare type ColorArray = ColorType[];

/* <---------------- Vector4 ----------------> */

/*
	There will be two types of Vector until Rhenaud fix that on later version.
 */

/**
 * Vector4, is equivalent to [Unity Vector4](https://docs.unity3d.com/2018.4/Documentation/ScriptReference/Vector4.html).
 * 
 * This is in this order of numbers: **[x, y, z, w]**.
 * 
 * This is a model to be used by `shader.SetVector()` and similar methods. 
 * This type is still an array of number[4].
 * 
 * [**NOTE**]: This type is different of {@link Vector4I}.
 */
declare type Vector4 = [number, number, number, number];

// I called "Vector4I" instead of "Vector4" to make more divergible, but it's the same.
// Vector 4 Inverse.
/**
 * Vector4, is equivalent to [Unity Vector4](https://docs.unity3d.com/2018.4/Documentation/ScriptReference/Vector4.html).

 * This is in this order of numbers: **[w, x, y, z]**.
 * 
 * This is returned by `shader.GetVector()` and similar methods.  
 * This type is still an array of number.
 * 
 * [**NOTE**]: This type is different of {@link Vector4}.
 */
declare type Vector4I = [number, number, number, number];

/* <---------------- Vector4 Array ----------------> */

/**
 * Vector4Array, is a array of {@link Vector4} objects.
 * 
 * Each array entry should be in this order: **[x, y, z, w]**.
 * This is a model to be used with `shader.SetVectorArray()`.
 * This type is still an array of array of number.
 */
declare type Vector4Array = Vector4[];


/**
 * Vector4IArray, is a array of {@link Vector4I} objects.
 * 
 * Each array entry should be in this order: **[w, x, y, z]**.
 * This model is returned by `shader.GetVectorArray()`
 * This type is still an array of array of number[.
 */
declare type Vector4IArray = Vector4[];

/* <---------------- Others... ----------------> */

/**
 * The Matrix object or [Matrix4x4](https://docs.unity3d.com/2018.4/Documentation/ScriptReference/Matrix4x4.html), is a 4x4 array of numbers.
 * 
 * A Matrix object represents a 4x4 matrix filled with numbers. You'll create it by supplying 4 rows of 4 numbers, and after that, you can modify each individual number one at a time.
 * 
 * **[NOTE]**: The Matrix object is also a non-persistent data type (can not be defined in the shader's Properties block).  
 * See in the non-persistent data section in [Shaders Object](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/shaders-object.html).
 */
declare type Matrix = [
	[number, number, number, number],
	[number, number, number, number],
	[number, number, number, number],
	[number, number, number, number]
];

declare type MatrixArray = Matrix[];
