function Sonar () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(50)
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(100)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 4
    basic.showNumber(distance)
}
let distance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Sonar()
})
