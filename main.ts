

namespace dmf {

//%block
export function move2020 (mySprite: Sprite) {
	mySprite.setPosition(20, 20);
    
}

//%block
export function talk(mySprite: Sprite){
    mySprite.say('Hi Ben!');
}

//%block
export function halo (mySprite: Sprite) {
    mySprite.startEffect(effects.halo);
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
