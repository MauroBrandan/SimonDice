const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego{
    constructor(){
        this.inicializar()
    }

    inicializar(){
        btnEmpezar.classList.add('hide')
    }
}


//Start
btnEmpezar.addEventListener('click', empezarJuego)

function empezarJuego() {
    let juego = new Juego()

}