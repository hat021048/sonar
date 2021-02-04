function Sonar () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P16, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(100)
    distance = pins.pulseIn(DigitalPin.P15, PulseValue.High) / 5.5
}
let Speed = 0
let distance = 0
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P7, 1)
distance = 5
basic.forever(function () {
    Sonar()
    if (distance > 300) {
        Speed = 1023
    } else if (distance > 200) {
        Speed = 800
    } else if (distance > 100) {
        Speed = 600
    } else if (distance > 50) {
        Speed = 300
    } else {
        Speed = 0
    }
    pins.analogWritePin(AnalogPin.P1, Speed)
})
