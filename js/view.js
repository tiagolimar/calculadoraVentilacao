"strict mode";

function renderSelect(id, options) {
    const select = document.getElementById(id);
    options.forEach(op => {
        const option = document.createElement("option");
        option.value = op;
        option.textContent = op;
        select.appendChild(option);
    });
}

window.onload = function() {
    const {diametros} = window.constantes;
    renderSelect("diametroTQ", diametros);
}

