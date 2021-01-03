def doSomething(mySprite: Sprite):
    mySprite.set_position(10, 10)
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
doSomething(mySprite)