// Máscara de telefone
var element = document.getElementById('telefone');
var maskOptions = {
    mask: '(00) 00000-0000'
};
var mask = IMask(element, maskOptions);

$(document).ready(function(){
    $('#botao-envio').click(function(){
        var empresa = $("#empresa").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var texto = $("#texto").val();

        if(!validarDados(empresa,email,telefone,texto)){
            // console.log("Ta falso saporra");
             return false;
        }

        console.log(empresa);
        console.log(email);
        console.log(telefone);
        console.log(texto);
        
        Swal.fire({
            title: "Email Enviado",
            text: "A equipe de suporte da agros entrará em contato com voce",
            icon: "success"
        });
    });


    function validarDados(empresa, email, telefone, texto){
        let valid = true;
        if (empresa == ""){
            valid = false;
            $("#empresa-erro").html("Insira o nome da empresa.");
        }else{
            $("#empresa-erro").html("");
        } 
        if (!validarEmail(email)){
            valid = false;
            $("#email-erro").html("Insira um email válido.");
        }else{
            $("#email-erro").html("");
        }
        if (telefone == ""){
            valid = false;
            $("#telefone-erro").html("Insira um telefone válido.");
        }else{
            $("#telefone-erro").html("");
        }
        if (texto == ""){
            valid = false;
            $("#texto-erro").html("Insira a sua dúvida.");
        }else{
            $("#texto-erro").html("");
        } 
        return valid;
    }

    function validarEmail(email){
        const emailVerifica = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailVerifica.test(email);
    }

    
});