namespace dmf {

//%block
export function move1010 (mySprite: Sprite) {
	
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
