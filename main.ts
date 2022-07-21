// music
function music1() {
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
// Handle events
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scenesController.currentScene == 0) {

    }
    else if (scenesController.currentScene == 1) {
        if (gameScene.snake.speedY == 0 && gameScene.snake.body[gameScene.snake.body.length - 1].x != gameScene.snake.body[gameScene.snake.body.length - 2].x) {
            gameScene.snake.speedX = 0
            gameScene.snake.speedY = -1
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scenesController.currentScene == 0) {

    }
    else if (scenesController.currentScene == 1) {
        if (gameScene.snake.speedY == 0 && gameScene.snake.body[gameScene.snake.body.length - 1].x != gameScene.snake.body[gameScene.snake.body.length - 2].x) {
            gameScene.snake.speedX = 0
            gameScene.snake.speedY = 1
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scenesController.currentScene == 0) {
        menuScene.modeType = !menuScene.modeType
        scenesController.reloadScene(0);
    }
    else if (scenesController.currentScene == 1) {
        if (gameScene.snake.speedX == 0 && gameScene.snake.body[gameScene.snake.body.length - 1].y != gameScene.snake.body[gameScene.snake.body.length - 2].y) {
            gameScene.snake.speedX = -1
            gameScene.snake.speedY = 0
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scenesController.currentScene == 0) {
        menuScene.modeType = !menuScene.modeType
        scenesController.reloadScene(0);
    }
    else if (scenesController.currentScene == 1) {
        if (gameScene.snake.speedX == 0 && gameScene.snake.body[gameScene.snake.body.length - 1].y != gameScene.snake.body[gameScene.snake.body.length - 2].y) {
            gameScene.snake.speedX = 1
            gameScene.snake.speedY = 0
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scenesController.currentScene == 0) {
        scenesController.loadScene(1)
    }
    else if (scenesController.currentScene == 1) {
        scenesController.pause()
    }
    else if (scenesController.currentScene == PauseScene) {
        scenesController.resume()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scenesController.currentScene == 0) {

    }
    else if (scenesController.currentScene == 1) {
        game.reset()
    }
    else if (scenesController.currentScene == PauseScene) {
        game.reset()
    }
})
// Overlap check
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    music.pewPew.play()
    gameScene.snake.growth = true
    gameScene.spawnFood()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
// Loops
forever(function () {
    if (scenesController.currentScene == 0) {

    }
    else if (scenesController.currentScene == 1) {
        let sprite: Sprite = null;
        if (gameScene.snake.growth == false) {
            sprite = gameScene.snake.body.shift()
        } else {
            gameScene.snake.growth = false
            sprite = sprites.create(assets.image`snake_body`, SpriteKind.Player)
        }
        let x = gameScene.snake.body[gameScene.snake.body.length - 1].x + 10 * gameScene.snake.speedX
        let y = gameScene.snake.body[gameScene.snake.body.length - 1].y + 10 * gameScene.snake.speedY
        if (menuScene.modeType) {
            if (x < 5 || x > 155 || y < 5 || y > 115) {
                game.over(false)
            }
        }
        else {
            if (x > 155) x = 5;
            if (x < 5) x = 155;
            if (y > 115) y = 5;
            if (y < 5) y = 115;
        }
        sprite.setPosition(x, y)
        gameScene.snake.body.push(sprite)
        if (gameScene.snake.body.length >= 100) {
            game.over(true)
        }
        pause(Math.map(info.score(), 0, 100, 300, 100))
    }
})
forever(function () {
    if (scenesController.currentScene == 0) {
    }
    if (scenesController.currentScene == 1) {
        music1()
    }
})
// Scenes
interface IScene {
    id: number
    init: () => void
    drop: () => void
}
class MenuScene implements IScene {
    id: number
    init: () => void
    drop: () => void
    title: TextSprite
    highScore: TextSprite
    mode: TextSprite
    start: TextSprite
    modeType: boolean
    constructor() {
        this.modeType = true;
    }
}
let menuScene = new MenuScene()
menuScene.id = 0;
menuScene.init = () => {
    menuScene.title = textsprite.create("Snake", 0, 7)
    menuScene.title.setMaxFontHeight(20)
    menuScene.title.setPosition(84, 25)
    menuScene.highScore = textsprite.create("No1: " + info.highScore(), 0, 7)
    menuScene.highScore.setMaxFontHeight(9)
    menuScene.highScore.setPosition(80, 45)
    if (menuScene.modeType) {
        menuScene.mode = textsprite.create("<  Border  >", 0, 7)
    } else {
        menuScene.mode = textsprite.create("< NoBorder >", 0, 7)
    }
    menuScene.mode.setMaxFontHeight(10)
    menuScene.mode.setPosition(80, 85)
    menuScene.start = textsprite.create("Press A to play", 0, 7)
    menuScene.start.setMaxFontHeight(9)
    menuScene.start.setPosition(80, 105)
}
menuScene.drop = () => {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
}
class Snake {
    body: Sprite[]
    speedX: number
    speedY: number
    growth: boolean
    constructor() {
        this.body = []
    }
    Init() {
        let sprite = sprites.create(assets.image`snake_body`, SpriteKind.Player)
        sprite.setPosition(5, 5)
        this.body.push(sprite)
        sprite = sprites.create(assets.image`snake_body`, SpriteKind.Player)
        sprite.setPosition(15, 5)
        this.body.push(sprite)
        this.speedX = 1
        this.speedY = 0
        this.growth = false
    }
}
class Food {
    sprite: Sprite
    types: Image[]
    constructor() {
        this.types = [assets.image`food_1`, assets.image`food_2`, assets.image`food_3`]
    }
}
class GameScene implements IScene {
    id: number
    init: () => void
    drop: () => void
    snake: Snake
    food: Food
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
    }
    // Spawn food
    spawnFood() {
        this.food.sprite = sprites.create(this.food.types[randint(0, 2)], SpriteKind.Food)
        let is_empty_pos = false
        let x = 0, y = 0
        while (!is_empty_pos) {
            x = 5 + 10 * randint(0, 14)
            y = 5 + 10 * randint(0, 11)
            is_empty_pos = true
            for (let body of this.snake.body) {
                if (x == body.x && y == body.y) {
                    is_empty_pos = false
                }
            }
        }
        this.food.sprite.setPosition(x, y)
    }
}
let gameScene = new GameScene()
gameScene.id = 1;
gameScene.init = () => {
    gameScene.snake.Init()
    gameScene.spawnFood()
    info.setScore(0)
}
gameScene.drop = () => {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
}
// Scenes Control
const PauseScene = 10000
class ScenesController {
    private _scenes: IScene[]
    private _keepScene: number

    currentScene: number
    constructor() {
        this._scenes = []
        this.currentScene = 0
    }
    add(scene: IScene) {
        this._scenes.push(scene)
    }
    remove(scene: IScene) {
        this._scenes.removeElement(scene)
    }
    reloadScene(id: number) {
        this._scenes[id].drop()
        this._scenes[id].init()
    }
    loadScene(id: number) {
        this._scenes.forEach((_scene) => {
            if (_scene.id == id) {
                this.currentScene = id
                _scene.init()
            }
            else {
                _scene.drop()
            }
        })
    }
    pause() {
        this._keepScene = this.currentScene
        this.currentScene = PauseScene
    }
    resume() {
        this.currentScene = this._keepScene
    }
}

let scenesController = new ScenesController()
scenesController.add(menuScene)
scenesController.add(gameScene)
scenesController.loadScene(0)
