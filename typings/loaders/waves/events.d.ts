
/**
 * This function is called every frame (usually at 60FPS) while monsters are attacking (the defense step).
 * 
 * That's pretty much it. Update your bullets here - more on bullet creation and control is on the API - [Projectile Management](https://rhenaudthelukark.github.io/CreateYourFrisk/pages/api-projectile.html) page.
 */
declare function Update(): void

/**
 * This function is called just before the wave ends. 
 * It allows you to easily reset some variables and other such things.
 */
declare function EndingWave(): void