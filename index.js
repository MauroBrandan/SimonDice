const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar(){
        btnEmpezar.classList.add('hide')
        this.nivel = 5
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia(){
        this.secuncia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuncia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    transformarNumeroAColor(numero){
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.colores[color].classList.remove('light'), 350)
    }
}


//Start
btnEmpezar.addEventListener('click', empezarJuego)

function empezarJuego() {
    window.juego = new Juego()

}