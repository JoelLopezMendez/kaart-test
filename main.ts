input.onButtonPressed(Button.A, function () {
    Filter += 1
    if (Filter > 4) {
        Filter = 0
    }
})
let Filter = 0
Filter = 0
basic.forever(function () {
    if (Filter == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (Filter == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    }
    if (Filter == 2) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
