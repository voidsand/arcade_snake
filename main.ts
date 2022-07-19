// Level Control
function level_control() {
    //settings.remove("high-score")
    if (level == 0) {
        menu_title = textsprite.create("Snake", 0, 7)
        menu_title.setMaxFontHeight(20)
        menu_title.setPosition(84, 25)
        menu_high_score = textsprite.create("No1: " + info.highScore(), 0, 7)
        menu_high_score.setMaxFontHeight(9)
        menu_high_score.setPosition(80, 45)
        if (menu_mode_toggler == false) {
            menu_mode = textsprite.create("<  Border  >", 0, 7)
        } else {
            menu_mode = textsprite.create("< NoBorder >", 0, 7)
        }
        menu_mode.setMaxFontHeight(10)
        menu_mode.setPosition(80, 85)
        menu_start = textsprite.create("Press A to play", 0, 7)
        menu_start.setMaxFontHeight(9)
        menu_start.setPosition(80, 105)
    }
    else if (level == 1) {
        sprite = sprites.create(assets.image`snake_body`, SpriteKind.Player)
        sprite.setPosition(5, 5)
        snake.push(sprite)
        sprite = sprites.create(assets.image`snake_body`, SpriteKind.Player)
        sprite.setPosition(15, 5)
        snake.push(sprite)
        speedX = 1
        speedY = 0
        growth = 0
        spawn_food()
        info.setScore(0)
    }
}
// Change Levels
function change_level(new_lvl: number, old_lvl: number) {
    drop_level(old_lvl)
    level = new_lvl
    level_control()
}
// Drop Levels
function drop_level(lvl: number) {
    if (lvl == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    }
    else if (lvl == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    }
}
// music
function music1() {
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Triplet))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Triplet))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Double))
}
function music2() {
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
}
// Spawn food
function spawn_food() {
    sprite = sprites.create(foods[randint(0, 2)], SpriteKind.Food)
    is_empty_pos = false
    while (!(is_empty_pos)) {
        x = 5 + 10 * randint(0, 14)
        y = 5 + 10 * randint(0, 11)
        is_empty_pos = true
        for (let value of snake) {
            if (x == value.x && y == value.y) {
                is_empty_pos = false
            }
        }
    }
    sprite.setPosition(x, y)
}
// Border check
function border_check(mode: boolean) {
    if (mode) {
        if (x > 155) {
            x = 5;
        }
        if (x < 5) {
            x = 155;
        }
        if (y > 115) {
            y = 5;
        }
        if (y < 5) {
            y = 115;
        }
    }
    else {
        if (x > 155) {
            game.over(false)
        }
        if (x < 5) {
            game.over(false)
        }
        if (y > 115) {
            game.over(false)
        }
        if (y < 5) {
            game.over(false)
        }
    }
}
// Handle events
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 0) {

    }
    else if (level == 1) {
        if (speedY == 0 && snake[snake.length - 1].x != snake[snake.length - 2].x) {
            speedX = 0
            speedY = -1
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 0) {

    }
    else if (level == 1) {
        if (speedY == 0 && snake[snake.length - 1].x != snake[snake.length - 2].x) {
            speedX = 0
            speedY = 1
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 0) {
        menu_mode_toggler = !menu_mode_toggler

        change_level(0, 0)
    }
    else if (level == 1) {
        if (speedX == 0 && snake[snake.length - 1].y != snake[snake.length - 2].y) {
            speedX = -1
            speedY = 0
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 0) {
        menu_mode_toggler = !menu_mode_toggler

        change_level(0, 0)
    }
    else if (level == 1) {
        if (speedX == 0 && snake[snake.length - 1].y != snake[snake.length - 2].y) {
            speedX = 1
            speedY = 0
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 0) {
        change_level(1, 0)
    }
    else if (level == 1) {
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 0) {

    }
    else if (level == 1) {
        change_level(0, 1)
    }
})
// Overlap check
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    music.pewPew.play()
    growth = 1
    spawn_food()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
// Initialize variables
let level = 0;
let menu_title: TextSprite = null
let menu_high_score: TextSprite = null
let menu_mode: TextSprite = null
let menu_start: TextSprite = null
let menu_mode_toggler = false
let speedX = 0
let speedY = 0
let growth = 0
let x = 0
let y = 0
let is_empty_pos = false
let sprite: Sprite = null
let snake: Sprite[] = []
let foods: Image[] = [assets.image`food_1`, assets.image`food_2`, assets.image`food_3`]
// Start
level_control()
// Loops
forever(function () {
    if (level == 0) {

    }
    else if (level == 1) {
        if (growth == 0) {
            sprite = snake.shift()
        } else {
            growth = 0
            sprite = sprites.create(assets.image`snake_body`, SpriteKind.Player)
        }
        x = snake[snake.length - 1].x + 10 * speedX
        y = snake[snake.length - 1].y + 10 * speedY
        border_check(menu_mode_toggler)
        sprite.setPosition(x, y)
        snake.push(sprite)
        if (snake.length >= 100) {
            game.over(true)
        }
        pause(Math.map(info.score(), 0, 100, 400, 100))
    }
})
forever(function () {
    if (level == 0) {
        music2()
    }
    if (level == 1) {
        music2()
    }
})
