
/**
 * Every time a Text Object automatically advances to the next line of text (that's by any means except Text.NextLine()), this function gets called in the script that created the text object. 
 * This function is the best place to manipulate the letters from Text.GetLetters.
 * 
 * Text objects have a one-frame delay by default - see CreateText in The Text Object. If the text object is using this delay, then this function will additionally be called on the first frame it starts to type (so one frame after it gets created). But if you disable the one-frame delay, this function will not be called for the first line of text, since you would already be able to access Text.GetLetters and similar properties right after calling CreateText.
 * @virtual **This function is a root event/callback that should be overrided, and not called directly, since it's handled by game.**
 * @param text is the text object in question.
 * @param final final is true only if the text object just advanced past its last line and deleted itself now that it's finished.
 */
declare function OnTextAdvance(text: Text, final: boolean): void

/**
 * Every time a bullet collides with a player, this function gets called from the script that created the projectile. 
 * The bullet object in this function can be modified if you feel like it. 
 *  
 * If you implement this function in your script, you have to manually define what should happen after bullet collision. This is what allows you to create orange, cyan and green projectiles, and much much more. If you don't implement this function in your script, it'll stick to the default of dealing 3 damage on hit.
 * 
 * For more information on the bullet object, see the section [Projectile Management](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/api-events.html).
 * 
 * @virtual **This function is a root event/callback that should be overrided, and not called directly, since it's handled by game.**
 * @param {Bullet} [bullet] - The bullet object that collided with the player. 
 */
declare function OnHit(bullet: Bullet): void