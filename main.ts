let distance = 0
basic.showIcon(IconNames.Yes)
makerbit.connectLcd(39)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(20)
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(50)
    distance = pins.pulseIn(DigitalPin.P0, PulseValue.High) / 3.7
    makerbit.showStringOnLcd1602("Avstand i mm:", makerbit.position1602(LcdPosition1602.Pos1), 13)
    makerbit.showStringOnLcd1602("" + (Math.round(distance)), makerbit.position1602(LcdPosition1602.Pos14), 3, TextOption.AlignRight)
    basic.pause(1000)
})
