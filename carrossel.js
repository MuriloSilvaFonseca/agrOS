document.addEventListener('DOMContentLoaded', () => {
let botoes = document.querySelectorAll('.btn-carrossel');

botoes.forEach(botao => {
    botao.addEventListener('click',() => {

        botoes.forEach(b => b.classList.remove('ativo'));

        botao.classList.add('ativo');
    })
})
})
function propriedade(){
            document.getElementById("imagem").src="dash.jpeg";
}
 function clientes(){
            document.getElementById("imagem").src="1.jpg";
}
 function servicos(){
            document.getElementById("imagem").src="dash.jpeg";
}
function equipamento(){
            document.getElementById("imagem").src="1.jpg";
}