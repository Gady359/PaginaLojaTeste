function validarFormulario() {
    var telefone = document.getElementById("telefone").value;
    var regex = /^(?:\+55)?\s?(?:\(?[1-9][0-9]\)?\s?|[1-9][0-9])\s?[9][0-9]{4}-?[0-9]{4}$/;
    
    if (!regex.test(telefone)) {
        alert("Por favor, insira um número de telefone celular válido do Brasil (DDD + 9 dígitos).");
        return false;
    }
    
    
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    function obterParametrosURL() {
        var parametros = {};
        var url = window.location.search.substring(1);
        var pares = url.split("&");
        for (var i = 0; i < pares.length; i++) {
            var par = pares[i].split("=");
            parametros[par[0]] = decodeURIComponent(par[1].replace(/\+/g, " "));
        }
        return parametros;
    }
    

    var dadosFormulario = obterParametrosURL();
    document.getElementById("nome").textContent = dadosFormulario.nome || '';
    document.getElementById("email").textContent = dadosFormulario.email || '';
    document.getElementById("telefone").textContent = dadosFormulario.telefone || '';
    document.getElementById("idade").textContent = dadosFormulario.idade || '';
    document.getElementById("genero").textContent = dadosFormulario.genero || '';
    document.getElementById("saude").textContent = dadosFormulario.saude || '';
    document.getElementById("servicos").textContent = dadosFormulario.servicos || '';
});

