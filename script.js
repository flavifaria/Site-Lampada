
function alterarNome(){
    var n = document.getElementById("nome");
    n.innerHTML = `Acenda, apague ou quebre a lâmpada!`;
}

function ligar(){
    document.getElementById("lamp").src = "on.jpg";
}

function desligar(){
    document.getElementById("lamp").src = "off.jpg";
}

function quebrar(){
    document.getElementById("lamp").src = "broken.jpg";
}

alterarNome();