input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    millivolt = pins.analogReadPin(AnalogPin.P0) * (1000 / 340)
    if (millivolt < 1200) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
    }
    basic.showNumber(millivolt)
})
let millivolt = 0
basic.showString("Volts")
basic.forever(function () {
	
})
