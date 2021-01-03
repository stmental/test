function doSomething (mySprite: Sprite) {
    mySprite.setPosition(10, 10)
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 . . . . . . 5 . . . . . 
    . . 5 5 . . . . . 5 5 . . . . . 
    . . 5 . . 8 . . 8 5 5 . . . . . 
    . . . 5 . . . . . . 5 5 . . . . 
    . . . 5 . 8 . 8 8 . . 5 . . . . 
    . . . 5 5 8 8 8 . . 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
doSomething(mySprite)
