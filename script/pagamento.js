let cnpjCpf = document.getElementById('cnpjCpf');
let cleaveCnpjCpf;

cnpjCpf.addEventListener('input', () => {
    const contNumeros = cnpjCpf.value.replaceAll('.', '').replace('-','').replace('/', '');

    if (contNumeros.length > 11) {
        determinaMask('cnpj');
    } else{
        determinaMask('cpf');
    }
})

function determinaMask (testeCnpjCpf) {
    if (cleaveCnpjCpf) {
        cleaveCnpjCpf.destroy();
    }

    if (testeCnpjCpf === 'cnpj') {

        cleaveCnpjCpf = new Cleave(cnpjCpf, {
            delimiters: ['.', '.', '/', '-'],
            blocks: [2, 3, 3, 4, 2],
            numericOnly: true
        });

    } else if (testeCnpjCpf === 'cpf') {

        cleaveCnpjCpf = new Cleave(cnpjCpf, {
            delimiters: ['.', '.', '-'],
            blocks: [3, 3, 3, 2],
            numericOnly: true
        });
    }
}

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

$("#data-vencimento").mask("00/0000")

$(document).ready(function () {
    $("#finalizar-btn").click(function () {
        
        var id_plano = parseInt($("#id_plano").val());
        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var cpfCnpj = $("#cnpjCpf").val();
        var cep = $("#cep").val();
        var numero = $("#numero").val();

        var titular_cartao = $("#titular-cartao").val();
        var numero_cartao = $("#numero-cartao").val();
        var data_vencimento = $("#data-vencimento").val();
        var cvv_cartao = $("#codigo-seguranca").val();

        //Verificação de data
        var separaVenc = data_vencimento.split("/");
        
        let mm = separaVenc[0];
        let yy = separaVenc[1];

        let ano = new Date().getFullYear();

        if (mm >= 1 && mm <= 12 && yy >= ano) {
            var mes_vencimento_cartao = mm;
            var ano_vencimento_cartao = yy;
        } 

        if (!validarDados(nome, email, telefone, cpfCnpj, cep, numero, titular_cartao, numero_cartao, data_vencimento, cvv_cartao)){
            return false;
        }

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
                    $.ajax({
                        url: "https://9aa4df9c11de.ngrok-free.app/api/checkout",
                        type: "POST",
                        data: {
                            id_plano: id_plano,
                            nome: nome,
                            email: email,
                            telefone: telefone,
                            cpfCnpj: cpfCnpj,
                            cep: cep,
                            numero: numero,
                            titular_cartao: titular_cartao,
                            numero_cartao: numero_cartao,
                            mes_vencimento_cartao: mes_vencimento_cartao,
                            ano_vencimento_cartao: ano_vencimento_cartao,
                            cvv_cartao: cvv_cartao
                        },

                        dataType: "json",

                        beforeSend: function() {
                            Swal.fire({
                                title: 'Processando...',
                                html: 'Aguarde enquanto processamos seus dados.',
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading(); // Mostra o spinner
                                }
                            });
                        },

                        success: function (response) {
                            Swal.close();

                            Swal.fire({
                                title: "Compra Finalizada",
                                text: "Um email com o recibo foi direcionado para você",
                                icon: "success"
                            });
                            console.log(response);
                            locale.href="index.html";
                        },

                        error: function (response) {
                             Swal.fire({
                                icon: 'error',
                                title: 'Erro',
                                text: 'Ocorreu um problema ao processar seus dados.'
                            });
                            console.log(response.error);
                        }
                    });
                }
            });
        
    });

    // verificar se o cnpj esta corretamente formatado
    const validarCNPJ = (cnpj) => {
        cnpj = cnpj.replaceAll('.', '').replace('-','').replace('/', '')
        if (cnpj.length !== 14) {
            return false;
        }
    
        const proximoDigitoVerificador = (cnpjIncompleto) => {
            let soma = 0
            const pesos = (cnpjIncompleto.length === 12) ? [5,4,3,2,9,8,7,6,5,4,3,2] : [6,5,4,3,2,9,8,7,6,5,4,3,2];
    
            for (let i = 0; i < cnpjIncompleto.length; i++) {
                soma += Number(cnpjIncompleto.charAt(i)) * pesos[i];
            }
    
            const resto = soma % 11;
            return resto < 2 ? '0' : (11 - resto).toString();
        };
    
        let primeiroDigitoVerificador = proximoDigitoVerificador(cnpj.substr(0, 12));
        let segundoDigitoVerificador = proximoDigitoVerificador(cnpj.substr(0, 12) + primeiroDigitoVerificador);
    
        let cnpjCorreto = cnpj.substr(0, 12) + primeiroDigitoVerificador + segundoDigitoVerificador;
    
        return cnpj === cnpjCorreto;
    };

    // verificar se o cpf esta corretamente formatado
    function validarCPF(cpf) {
        var Soma = 0
        var Resto
      
        var strCPF = String(cpf).replace(/[^\d]/g, '')
        
        if (strCPF.length !== 11)
           return false
        
        if ([
          '00000000000',
          '11111111111',
          '22222222222',
          '33333333333',
          '44444444444',
          '55555555555',
          '66666666666',
          '77777777777',
          '88888888888',
          '99999999999',
          ].indexOf(strCPF) !== -1)
          return false
      
        for (i=1; i<=9; i++)
          Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      
        Resto = (Soma * 10) % 11
      
        if ((Resto == 10) || (Resto == 11)) 
          Resto = 0
      
        if (Resto != parseInt(strCPF.substring(9, 10)) )
          return false
      
        Soma = 0
      
        for (i = 1; i <= 10; i++)
          Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
      
        Resto = (Soma * 10) % 11
      
        if ((Resto == 10) || (Resto == 11)) 
          Resto = 0
      
        if (Resto != parseInt(strCPF.substring(10, 11) ) )
          return false
      
        return true
      }

    


    // func para verificar se os dados foram preenchidos corretamente
    function validarDados(
        nome, email, telefone, cnpjCpf, cep, numero,
        titular_cartao, numero_cartao, data_vencimento, cvv_cartao
      ) {
        let valid = true;
      
        // Nome
        if (nome.trim() === "") {
            $("#nome-error").html("Insira um nome válido");
            $("#nome").addClass("input-error");
            valid = false;
          } else {
            $("#nome-error").html("");
            $("#nome").removeClass("input-error");
          }
      
        // Email
        
        if (email.trim() === "") {
          $("#email-error").html("Insira um e-mail válido");
          $("#email").addClass("input-error");

          valid = false;
        } else {
          $("#email-error").html("");
          $("#nome").removeClass("input-error");
        }
      
        // Telefone
        if (telefone.trim() === "") {
          $("#telefone-error").html("Insira um telefone válido");
          $("#telefone").addClass("input-error");
          valid = false;

        } else {
          $("#telefone-error").html("");
          $("#telefone").removeClass("input-error");

        }
      
        // CPF ou CNPJ
        if (cnpjCpf.trim() === "") {
          $("#cnpjCpf-error").html("Preencha esse campo");
          $("#cnpjCpf").addClass("input-error");
          valid = false;

        } else if (!validarCPF(cnpjCpf) && !validarCNPJ(cnpjCpf)) {
          $("#cnpjCpf-error").html("Insira um CPF/CNPJ válido");
          $("#cnpjCpf").addClass("input-error");
          valid = false;

        } else {
          $("#cnpjCpf-error").html("");
          $("#cnpjCpf").removeClass("input-error");
        }
      
        // CEP
        if (cep.trim() === "") {
          $("#cep-error").html("Insira um CEP válido");
          $("#cep").addClass("input-error");
          valid = false;
        } else {
          $("#cep-error").html("");
          $("#cep").removeClass("input-error");

        }
      
        // Número
        if (numero.trim() === "") {
          $("#numero-error").html("Insira um número válido");
          $("#numero").addClass("input-error");
          valid = false;
        } else {
          $("#numero-error").html("");
          $("#numero").removeClass("input-error");
        }
      
        // Titular do cartão
        if (titular_cartao.trim() === "") {
          $("#titular_cartao-error").html("Insira um nome válido");
          $("#titular-cartao").addClass("input-error");
          valid = false;
        } else {
          $("#titular_cartao-error").html("");
          $("#titular-cartao").removeClass("input-error");
        }
      
        // Número do cartão
        if (numero_cartao.trim() === "") {
          $("#numero_cartao-error").html("Insira um número válido");
          $("#input-numero-cartao").addClass("input-error");
          valid = false;
        } else {
          $("#numero_cartao-error").html("");
          $("#input-numero-cartao").removeClass("input-error");
        }
      
        // Data de vencimento
        if (data_vencimento.trim() === "") {
          $("#data_vencimento-error").html("Insira uma data válida");
          $("#data-vencimento").addClass("input-error");
          valid = false;
        } else {
          $("#data_vencimento-error").html("");
          $("#data-vencimento").removeClass("input-error");

        }
      
        // CVV
        if (cvv_cartao.trim() === "") {
          $("#cvv_cartao-error").html("Insira um valor válido");
          $("#codigo-seguranca").addClass("input-error");
          valid = false;
        } else {
          $("#cvv_cartao-error").html("");
          $("#codigo-seguranca").removeClass("input-error");

        }
      
        return valid;
      }
      

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

    
