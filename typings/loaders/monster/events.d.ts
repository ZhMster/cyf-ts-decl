
/**
 * Happens the moment the player's attack has applied damage - this is when you hear the hitting sound after the slash animation.  
 * The monster's `hp` variable will have updated at this time, too.
 * 
 * **Don't call BattleDialog() here, it's a bit buggy right now.**
 * @param damage will be -1 if the player pressed **Fight**, but didn't press any buttons and let it end by itself.
 */
declare function HandleAttack(damage: number): void;

/**
 * Happens after your attack's shaking animation has completed and the monster's HP is 0. If you implement `OnDeath()`, your monster will not die automatically, and you will have to do it manually with the `Kill()` function.
 * 
 * `OnDeath()` will only happen through monster kills that happened with the FIGHT command; scripted `Kill()` calls will not trigger it.
 * 
 * Calling `BattleDialog()` here will probably screw up the battle UI.
 */
declare function OnDeath(): void;

/**
 * Happens after you successfully spared a monster. If you implement `OnSpare()`, your monster will not be spared automatically, and you will have to do it manually with the `Spare()` function.
 * 
 * `OnSpare()` will only happen through a monster spare that happened with the SPARE command; scripted `Spare()` calls will not trigger it.
 */
declare function OnSpace(): void;

/**
 * Happens before the damage calculation the moment you press Z when attacking. You can easily use SetDamage() in this function. This is also the best place to initiate a dodge animation, if you want such a thing.
 */
declare function BeforeDamageCalculation(): void;

/**
 * Happens before the damage UI is displayed on the monster (the life bar and the damage number) and before the hp changing. You can still change the target with Player.ChangeTarget(targetNumber) in this function, but you can not use SetDamage here.
 * 
 * The argument damage is equal to the incoming damage the enemy is about to take.
 * Note that this damage has ***NOT*** been applied yet, unlike in HandleAttack.
 * 
 * @param damage - Damage the enemy is about to take.
 */
declare function BeforeDamageValues(damage: number): void;

/**
 * Happens when you select an Act command on this monster. `command` will be the same as how you defined it in the `commands` list, except it will be **IN ALL CAPS**. Intermediate example below, showing how you can use it and spice it up a little.
 * 
 * @param command - The name of the command **uppercased**.
 */
declare function HandleCustomCommand(command: string): void;
