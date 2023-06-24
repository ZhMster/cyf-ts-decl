/**
 * Existing layers in game.
 */
declare enum DefaultLayers {
    /** Under everything, even background. */
    Bottom = "Bottom",
    /** Above the background. */
    BelowUI = "BelowUI",
    /** Above the background and the UI. */
    BelowArena = "BelowArena",
    /** Same as BelowArena. */
    BasisNewest = "BelowArena",
    /** Above the background, the UI and the Arena. */
    BelowPlayer = "BelowPlayer",
    /** Above the background, the UI, the Arena and the Player. */
    BelowBullet = "BelowBullet",
    /** Above everything. */
    Top = "Top",
    /** Above everything else. Your new sprite layer will be created as high as possible. */
    VeryHighest = "VeryHighest",
    /** Below everything else. Your new sprite layer will be created as low as possible.  */
    VeryLowest = "VeryLowest",
}

declare type ValidLayerType = DefaultLayers | string
declare type SpriteMaskMode =
    | 'off'
    | 'box'
    | 'sprite'
    | 'stencil'
    | 'invertedsprite'
    | 'invertedstencil';
    