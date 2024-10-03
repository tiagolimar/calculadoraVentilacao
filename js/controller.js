const {valoresAlpha} = window.constantes;

function calcularVazaoAR(e) {
    e.preventDefault();
    try {
        const diametroTQ = Number(document.getElementById("diametroTQ").value);
        const vazaoTQ = Number(document.getElementById("vazaoTQ").value);
        const vazaoAR = document.getElementById("vazaoAR");
    
        const alpha = valoresAlpha[`${diametroTQ}`];
        const vazaoARCalculada = alpha * vazaoTQ ** (2/5) - 1.5 * vazaoTQ;
        vazaoAR.value = vazaoARCalculada;//.toFixed(2);
    } catch (error) {
        console.error(error); 
    }
}

document.getElementById("formVazaoAR").addEventListener("submit", calcularVazaoAR);

window.funcoes = {
    calcularVazaoAR,
}