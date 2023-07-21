
/// <reference path="../types/Bullet.d.ts" />

/**
 * Creates a layer named name that projectiles can be placed in. To create your new projectile layer, you'll need to choose a pre-existing layer.
 * @param {string} name The name of the new layer to create.
 * @param {string} position The name of an existing projectile layer to place the new layer above or below. The only default layer is "", so you must use it first.
 * @param {boolean} below If true, the new layer will be created below the layer given in position. Otherwise, it will be created above it. Defaults to false.
 */
declare function CreateProjectileLayer(name: string, position?: string, below?: boolean): void;

/**
 * Creates a bullet that you can store and modify, with its spawn position relative to the center of the arena.
 * The hitbox of the bullet is a rectangle around the sprite, unless you use CYF's PP mode.
 * You can specify a layer if you want - otherwise, the bullet will be in the normal bullet layer.
 * @param {string} spritename The name of the sprite to use for the bullet.
 * @param {number} initial_x The X position to spawn the bullet at, relative to the arena's center.
 * @param {number} initial_y The Y position to spawn the bullet at, relative to the arena's center.
 * @param {string} layer The name of the projectile layer to place the bullet in. Defaults to "".
 * @returns {Bullet} The created bullet.
 */
declare function CreateProjectile(spritename: string, initial_x: number, initial_y: number, layer?: string): Bullet;

/**
 * Same as CreateProjectile, but the bullet's spawn position is relative to the bottom left of the screen instead of the arena's center.
 * The hitbox of the bullet is a rectangle around the sprite, unless you use CYF's PP mode.
 * You can specify a layer if you want - otherwise, the bullet will be in the normal bullet layer.
 * @param {string} spritename The name of the sprite to use for the bullet.
 * @param {number} initial_x The X position to spawn the bullet at, relative to the bottom left of the screen.
 * @param {number} initial_y The Y position to spawn the bullet at, relative to the bottom left of the screen.
 * @param {string} layer The name of the projectile layer to place the bullet in. Defaults to "".
 * @returns {Bullet} The created bullet.
 */
declare function CreateProjectileAbs(spritename: string, initial_x: number, initial_y: number, layer?: string): Bullet;