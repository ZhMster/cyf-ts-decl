
declare enum ShaderWrapMode {
	/**
	 * The default wrap mode. When a shader manipulates the positions of pixels, the texture will be clamped to the last row or column of pixels of the source image.
	 */
	CLAMP = "clamp",
	/**
	 * The source image is tiled infinitely.
	 */
	REPEAT = "repeat",
	/**
	 * Similar to `"repeat"`, except all the repeated images will alternatingly be flipped horizontally/vertically.
	 */
	MIRROR = "mirror",
	/**
	 *  Similar to `"mirror"`, except only one mirror image gets created, and then the behavior of `"clamp"` is followed for all other areas.
	 */
	MIRRORONCE = "mirroronce",
}

declare enum ShaderWrapSides {
	/**
	 * The new wrap mode is applied to both the horizontal and vertical edges of the image.
	 */
	Both,
	/**
	 * The new wrap mode is applied to the horizontal edges of the image.
	 */
	Horizontally,
	/**
	 * The new wrap mode is applied to the vertical edges of the image.
	 */
	Vertically
}