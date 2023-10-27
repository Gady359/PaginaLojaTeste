function validarFormulario() {
    var telefone = document.getElementById("telefone").value;
    var regex = /^(?:\+55)?\s?(?:\(?[1-9][0-9]\)?\s?|[1-9][0-9])\s?[9][0-9]{4}-?[0-9]{4}$/;
    
    if (!regex.test(telefone)) {
        alert("Por favor, insira um número de telefone celular válido do Brasil (DDD + 9 dígitos).");
        return false;
    }

    var dataNascimento = new Date(document.getElementById("idade").value);
    var dataAtual = new Date();
    var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    
    if (dataAtual.getMonth() < dataNascimento.getMonth() || (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (dataNascimento.getFullYear() >= dataAtual.getFullYear()) {
        alert("Por favor, insira uma data de nascimento válida. Estamos em: "+dataAtual.getFullYear());
        return false;
    }

    if (idade < 15) {
        alert("Você deve ter pelo menos 15 anos para enviar este formulário.");
        return false;
    }
    if(idade>110){
        alert("Por favor insira uma idade valida, a pessoa mais velha no mundo viveu 122 anos!");
        return  false;
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
    document.getElementById("saude").textContent = dadosFormulario.saude || 'Nenhum Reportado';
    document.getElementById("servicos").textContent = dadosFormulario.servicos || '';
});
