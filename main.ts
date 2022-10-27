input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    millivolt = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    3000
    )
    basic.showNumber(millivolt)
    if (millivolt < 1200) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
let millivolt = 0
basic.showString("Volts")
basic.forever(function () {
	
})
