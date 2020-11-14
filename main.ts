function Sonar () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 5
    serial.writeValue("Dist: ", distance)
}
let distance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Sonar()
})
