
const piedraBtn = document.getElementById('piedra');
const papelBtn = document.getElementById('papel');
const tijerasBtn = document.getElementById('tijeras');
const tablero = document.getElementById('tablero');
const tableroUsuario = document.getElementById('usuario');
const tableroMaquina = document.getElementById('maquina');

const piedra = 0;
const papel = 1;
const tijeras = 2;

const empate = 0;
const ganador = 1;
const perdedor = 2;

piedraBtn.addEventListener('click',()=>{
    juego(piedra);
    tableroUsuario.innerHTML = piedraBtn.innerHTML;
});
papelBtn.addEventListener('click',()=>{
    juego(papel);
    tableroUsuario.innerHTML = papelBtn.innerHTML;
});
tijerasBtn.addEventListener('click',()=>{
    juego(tijeras);
    tableroUsuario.innerHTML = tijerasBtn.innerHTML;
});


function juego(opcionUsuario){
    const maquina = Math.floor(Math.random()*3);
    if (maquina === 0) {
        tableroMaquina.innerHTML = piedraBtn.innerHTML;
    }if (maquina === 1) {
        tableroMaquina.innerHTML = papelBtn.innerHTML;
    }if (maquina === 2) {
        tableroMaquina.innerHTML = tijerasBtn.innerHTML;
    }

    const resultado = calcResultado(opcionUsuario, maquina);

    if (resultado === empate) {
        tablero.innerHTML = "¡¡ EMPATE !!";
    }
    else if(resultado === ganador){
        tablero.innerHTML = "¡¡ GANASTE !!";
        
    }
    else if(resultado === perdedor){
        tablero.innerHTML = "¡¡ PERDISTE !!";
    }

}



function calcResultado(opcionUsuario, maquina){
    if (opcionUsuario === maquina) {
        return empate;
    } else if (opcionUsuario === piedra && maquina === papel ) {
        return perdedor;
    } else if (opcionUsuario === piedra && maquina === tijeras){
        return ganador; 
    } else if (opcionUsuario === papel && maquina === piedra){
        return ganador;
    } else if (opcionUsuario === papel && maquina === tijeras){
        return perdedor;
    } else if (opcionUsuario === tijeras && maquina === piedra){
        return perdedor;
    } else if (opcionUsuario === tijeras && maquina === papel){
        return ganador;
    }
}


