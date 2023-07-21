const AnnoyingBullet: Bullet = CreateProjectile('bullet', Arena.width / 2, Arena.height / 2)
AnnoyingBullet.SetVar('xspeed', 0)
AnnoyingBullet.SetVar('yspeed', 0)

let shouldMove: boolean = true
let livetime: number = 0
let _speedmod: number = 1
let multiplerPerSecond: number = 1.005

let destroyBulletTime: number = (6 * 60)
function Update() {
	livetime += 1
	_speedmod = (livetime / 60) * multiplerPerSecond
	if (shouldMove) {
		let xdifference = Player.x - AnnoyingBullet.x
		let ydifference = Player.y - AnnoyingBullet.y
		let xspeed = (AnnoyingBullet.GetVar('xspeed') / 2 + xdifference / 100) * _speedmod
		let yspeed = (AnnoyingBullet.GetVar('yspeed') / 2 + ydifference / 100) * _speedmod
		AnnoyingBullet.Move(xspeed, yspeed)
		AnnoyingBullet.SetVar('xspeed', xspeed)
		AnnoyingBullet.SetVar('yspeed', yspeed)
	}
	if (livetime >= destroyBulletTime) {
		// In others words:
		// First, fading animation.
		// Second, destroying the bullet.
		if (livetime >= destroyBulletTime && livetime < destroyBulletTime + (60)) {
			shouldMove = false
			AnnoyingBullet.sprite.alpha = 0.5
		} else if (livetime >= destroyBulletTime + (60)) {
			// AnnoyingBullet.Destroy() 
			// Instead of destroying and recreating the bullet, just reset the stats.
			shouldMove = true
			_speedmod = 1
			livetime = 0
			AnnoyingBullet.SetVar('xspeed', 0)
			AnnoyingBullet.SetVar('yspeed', 0)
			AnnoyingBullet.sprite.alpha = 1
			AnnoyingBullet.MoveTo(Arena.width / 2, Arena.height / 2)
		}

	}
}

function OnHit(bullet: Bullet) {
	DEBUG("HIT!")
	AnnoyingBullet.SetVar('xspeed', 0)
	AnnoyingBullet.SetVar('yspeed', 0)
	Player.Hurt(Player.maxhp / 10)
	AnnoyingBullet.MoveTo(Arena.width / 2, Arena.height / 2)
}