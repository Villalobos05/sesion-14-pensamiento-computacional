let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature() * 1.8 + 32
    if (temperatura >= -22 && temperatura <= 14) {
        basic.showString("permanece en casa hay fuertes nevadas.")
        basic.showString("R")
    } else if (temperatura >= 15 && temperatura <= 23) {
        basic.showString("¡toma tus mejores esquis y diviertete!")
        basic.showString("V")
    } else if (temperatura >= 24 && temperatura <= 32) {
        basic.showString("solo podrás esquiar en las partes mas altas de la montaña.")
        basic.showString("A")
    } else if (temperatura >= 33) {
        basic.showString("lo siento, no es temporada de esquiar.")
        basic.showString("-")
    } else {
    	
    }
})
