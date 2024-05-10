function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}   

function Cancelar() {

    var nome = document.getElementById("nomeid");

    if(nome.value !=""){
        alert('Cancelado com sucesso')
    }

}