let ip3020 = 0
basic.forever(function () {
    ip3020 = pins.analogReadPin(AnalogPin.P1)
    if (ip3020 > 800) {
        pins.analogWritePin(AnalogPin.P2, 45)
        basic.showIcon(IconNames.Happy)
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.showIcon(IconNames.Sad)
    }
})
