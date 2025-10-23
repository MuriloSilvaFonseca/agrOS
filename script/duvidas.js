$(".card-duvida").click(function() {

            let p = $(this).children("p");
            let cardDuvida = $(this);

            if ($(this).hasClass("ativo")) {
                $(p).slideUp(400, function() {
                    $(cardDuvida).removeClass("clickMais");
                    $(p).css({ marginTop: "0px" });
                    $(p).text("");

                });

                $(this).removeClass("ativo");

            } else {
                if ($(cardDuvida).hasClass("card-duvida-1")) {
                    $(p).text("Na dashboard, cada drone aparece com indicadores de voo (altitude, velocidade, bateria e área coberta). O mapa exibe a rota em tempo real, e o painel lateral mostra alertas caso algum drone precise retornar à base.");

                } else if ($(cardDuvida).hasClass("card-duvida-2")) {
                    $(p).text("Sim. A seção de relatórios permite acessar o histórico completo de missões, com data, área pulverizada, tipo de produto aplicado, volume usado e condições climáticas registradas durante o voo.");

                } else if ($(cardDuvida).hasClass("card-duvida-3")) {
                    $(p).text("O sistema utiliza dados de GPS coletados durante o voo para delimitar os polígonos de aplicação e calcular automaticamente a área coberta em hectares.");

                } else if ($(cardDuvida).hasClass("card-duvida-4")) {
                    $(p).text("Caso a comunicação seja interrompida, o sistema exibe um alerta imediato na dashboard e o drone executa automaticamente o protocolo de segurança, geralmente o retorno à base mais próxima ou ponto inicial.");

                } else if ($(cardDuvida).hasClass("card-duvida-5")) {
                    $(p).text("Sim. A plataforma permite configurar a altura de voo, velocidade e taxa de aplicação antes da missão, além de ajustar dinamicamente alguns parâmetros durante a operação, dependendo do modelo do drone.");

                } else if ($(cardDuvida).hasClass("card-duvida-6")) {
                    $(p).text("Sim. Ao final da missão, o sistema gera relatórios automáticos com estatísticas de desempenho, consumo de produto, tempo total de voo e mapas de calor mostrando áreas de maior ou menor cobertura.");
                }
            
                $(cardDuvida).addClass("clickMais");
                $(this).addClass("ativo");
                $(p).css({ marginTop: "10px" }).hide().slideDown(400);


            }
        });