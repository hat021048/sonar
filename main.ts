function Sonar () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P12, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P12, 0)
    control.waitMicros(100)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 35
}
let Speed = 0
let distance = 0
basic.showIcon(IconNames.Yes)
distance = 5
basic.forever(function () {
    Sonar()
    if (distance > 20) {
        Speed = 255
    } else if (distance > 15) {
        Speed = 120
    } else if (distance > 10) {
        Speed = 80
    } else if (distance > 5) {
        Speed = 50
    } else {
        Speed = 0
    }
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    Speed,
    robotbit.Motors.M2A,
    Speed
    )
})
