input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    millivolt = pins.analogReadPin(AnalogPin.P0) * (1000 / 340)
    if (millivolt < 1200) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
    basic.showNumber(millivolt)
})
let millivolt = 0
basic.showString("Volts")
basic.forever(function () {
	
})
