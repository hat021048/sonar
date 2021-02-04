function Sonar () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P16, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(100)
    distance = pins.pulseIn(DigitalPin.P15, PulseValue.High) / 55
}
let Speed = 0
let distance = 0
basic.showIcon(IconNames.Yes)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P7, 1)
distance = 5
basic.forever(function () {
    Sonar()
    if (distance > 20) {
        Speed = 1023
    } else if (distance > 15) {
        Speed = 800
    } else if (distance > 10) {
        Speed = 500
    } else if (distance > 5) {
        Speed = 200
    } else {
        Speed = 0
    }
    pins.analogWritePin(AnalogPin.P1, Speed)
})
