

namespace dmf {

//%block
export function move1010 (mySprite: Sprite) {
	mySprite.setPosition(0, 0)
}

//%block
export function me(): Sprite {
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 2 2 2 . . . 
    . . . . . . . . . 2 2 . 2 . . . 
    . . . . . . . . 2 2 . . 2 . . . 
    . . . . . . 2 2 2 . . . 2 . . . 
    . . . . . 2 2 . . . . 2 . . . . 
    . . . . 2 2 . . . . . 2 . . . . 
    . . 2 2 2 . . . . 3 2 . . . . . 
    . 2 . 2 . . . . 2 2 . . . . . . 
    2 2 . 2 2 . . 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 . 2 2 . 2 . . . . . . . 
    . . 2 2 . . . . 2 . . . . . . . 
    . 2 2 . . . . . 2 . . . . . . . 
    . 2 . . . . . 2 2 . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    `, SpriteKind.Player);
    return mySprite;

}
}
