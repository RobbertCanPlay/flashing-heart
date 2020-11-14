input.onGesture(Gesture.Shake, function () {
    music.playMelody("G F - C E F G C ", 120)
})
music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # #
        . # . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . #
        . # . . #
        . # . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
basic.forever(function () {
	
})
