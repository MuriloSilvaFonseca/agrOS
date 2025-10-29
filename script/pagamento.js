// Máscara de CPF
new Cleave('#cpf', {
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2],
    numericOnly: true
});

// Máscara de telefone
var element = document.getElementById('telefone');
var maskOptions = {
    mask: '(00) 00000-0000'
};
var mask = IMask(element, maskOptions);


// Máscara para cartão
var cleave = new Cleave('#numero-cartao', {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
        console.log('Tipo:', type);
    }
});

$(document).ready(function () {
    $("#finalizar-btn").click(function () {
        Swal.fire({
            title: "Continuar?",
            text: "Ao clicar continuar você finalizará a compra.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "rgba(221, 51, 51, 0.53)",
            confirmButtonText: "Continuar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra Finalizada",
                    text: "Um email com o recibo foi direcionado para você",
                    icon: "success"
                }).then(() => {
                    window.location.href = "index.html";
                });
            }
        });
    });

    $("#cancelar-btn").click(function () {
        Swal.fire({
            title: "Tem certeza?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgba(221, 51, 51, 0.53)",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Cancelar",
            cancelButtonText: "Continuar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra Cancelada",
                    text: "Você cancelou está compra.",
                    icon: "success"
                }).then(() => {
                    window.location.href = "index.html";
                });
            }
        });
    });
});

    
