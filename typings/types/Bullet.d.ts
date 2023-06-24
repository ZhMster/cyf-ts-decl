/** @noSelfInFile */

/**
 * Projectile Class, shouldn't be called directly from typescript.
 * 
 * This is what you use to move around the arena and store values in.  
 * You can store a bunch of bullets in a table and modify them.   
 * The functions and variables you can use on a Bullet are as follows.  
 */

/** @noSelf */
declare interface Bullet {
    /**
     * Bullet.sprite
     * The bullet's sprite component. See the Sprites & Animation section for usage details.
     * NOTE: In 0.2.1a, modifying the sprite does not change the bullet's hitbox yet. it's always the original square of the bullet when it was created.
     *
     * But, in CYF, changing the bullet's sprite does modify the bullet's hitbox!
     */
    sprite: Sprite


    /**
     * The X position of this bullet, relative to the arena's center.
     * A bullet at x=0 and y=0 will be at the center of the arena.
     */
    x: number;
    /**
     * The Y position of this bullet, relative to the arena's center.
     */
    y: number;
    /**
     * The X position of this bullet, relative to the bottom-left corner of the screen.
     */
    absx: number;
    /**
     * The Y position of this bullet, relative to the bottom-left corner of the screen.
     */
    absy: number;

    /**
     * If this is true, the bullet will use the Pixel-Perfect Collision system.
     * By default, this is the encounter's default collision system.
     * Manually setting this will set Bullet.ppchanged to true.
     * @see SetPPCollision in The Pixel-Perfect Collision System for more information.
     */
    ppcollision: boolean;
    /**
     * Tells you if the bullet's collision system has been changed by manually changing Bullet.ppcollision.
     * Bullets with Bullet.ppchanged set to true will NOT be affected by future calls of SetPPCollision (see The Pixel-Perfect Collision System).
     * Will be false after you call Bullet.ResetCollisionSystem(), or if you manually set Bullet.ppcollision to false.
     */
    readonly ppchanged: boolean;
    /**
     * Resets the collision system of the bullet to the encounter's default collision system.
     * The default collision system is set by SetPPCollision.
     * @see The Pixel-Perfect Collision System for more information.
     */
    ResetCollisionSystem(): void;

    /**
     * The bullet layer that the bullet is on.
     * Note: It is common practice to use Bullet.layer to deparent a bullet if you need to do so.
     * Setting it back to "" will parent the bullet to its default layer, removing its previous parenting altogether.
     */
    layer: string;
    /**
     * Used to check if the bullet is still active.
     * If the bullet has been removed, this will be false; otherwise true.
     */
    readonly isactive: boolean;
    /**
     * Move this bullet x pixels to the right and y pixels up.
     * A negative x will move it to the left, and a negative y will move it downwards.
     * @param {number} x The number of pixels to move the bullet to the right. A negative value moves the bullet to the left.
     * @param {number} y The number of pixels to move the bullet up. A negative value moves the bullet downwards.
     */
    Move(x: number, y: number): void;
    /**
     * Move this bullet to this position immediately, relative to the arena's center.
     * @param {number} x The X position to move the bullet to.
     * @param {number} y The Y position to move the bullet to.
     */
    MoveTo(x: number, y: number): void;
    /**
     * Move this bullet to this position immediately, relative to the bottom-left corner of the screen.
     * @param {number} x The X position to move the bullet to.
     * @param {number} y The Y position to move the bullet to.
     */
    MoveToAbs(x: number, y: number): void;
    /**
     * Destroys this bullet.
     * You can continue retrieving its `x`, `y`, `absx` and `absy` properties. 
     * Trying to move a removed bullet will give you a Lua error. 
     * If you're not sure if your bullet still exists, check `Bullet.isactive` first.
     */
    Remove(): void;
    /**
     * Sets a variable on this bullet that you can retrieve with Bullet.GetVar.
     * Similar in use to SetGlobal - but you can use this to store specific variables on a per-bullet basis.
     * @param {string} varName The name of the variable to set.
     * @param {any} value The value to set for the variable.
     */
    SetVar(varName: string, value: any): void;
    [your_variable_name: string]: any; /** Make it work by indexing, just like in code. */
    
    /**
     * Gets a variable that you previously set using Bullet.SetVar.
     * @param {string} varName The name of the variable to retrieve.
     * @returns {any} The value of the variable.
     */
    GetVar(varName: string): any;

    /**
     * Moves this bullet on top of all currently existing projectiles.
     * Note that newly spawned projectiles are always on top by default; this function is mostly to move existing bullets to the top.
     * Moves the bullet to the top of its current layer.
     */
    SendToTop(): void;
    /**
     * Moves this bullet below all currently existing projectiles.
     * Moves the bullet to the bottom of its current layer.
     */
    SendToBottom(): void;
    /**
     * Returns true if the player is colliding with the bullet.
     * Will use PPCollision (pixel-perfect collisions) if the bullet has PP enabled. See Bullet.ppcollision.
     * @returns {boolean} Returns true if the player is colliding with the bullet; otherwise, false.
     */
    isColliding(): boolean;

    /**
     * This variable is a handler (or hook) that is called everytime the bullet hit on another bullet.
     * If it has been assigned, this function will be run instead of the script's OnHit function when the bullet collides with the Player.
     * The bullet and its OnHit function must both be created in the same script.
     * @param bullet The bullet that was hit.
     */
    OnHit: (bullet: Bullet) => void;

    /**
     * Make the bullet stay loaded even after the wave ends.  
     * [**NOTE**] Only works if you're not in retrocompatibility mode
     */
    isPersistent: boolean;
}

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