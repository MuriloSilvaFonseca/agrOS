        function propriedade(){
            document.getElementById("imagem").src="dash.jpeg";
            let adicionar1 = document.getElementById("propriedade");
            adicionar1.classList.add("ativo");

            let remover2 = document.getElementById("clientes");
            remover2.classList.remove("ativo");
            let remover3 = document.getElementById("servicos");
            remover3.classList.remove("ativo");
            let remover4 = document.getElementById("equipamento");
            remover4.classList.remove("ativo");
        }
        function clientes(){
            document.getElementById("imagem").src="1.jpg";
            let adicionar2 = document.getElementById("clientes");
            adicionar2.classList.add("ativo");

            let remover1 = document.getElementById("propriedade");
            remover1.classList.remove("ativo");
            let remover3 = document.getElementById("servicos");
            remover3.classList.remove("ativo");
            let remover4 = document.getElementById("equipamento");
            remover4.classList.remove("ativo");
        }
        function servicos(){
            document.getElementById("imagem").src="";
            let adicionar3 = document.getElementById("servicos");
            adicionar3.classList.add("ativo");
            
            let remover1 = document.getElementById("propriedade");
            remover1.classList.remove("ativo");
            let remover2 = document.getElementById("clientes");
            remover2.classList.remove("ativo");
            let remover4 = document.getElementById("equipamento");
            remover4.classList.remove("ativo");
        }
        function equipamento(){
            document.getElementById("imagem").src="";
            let adicionar4 = document.getElementById("equipamento");
            adicionar4.classList.add("ativo");
            
            let remover1 = document.getElementById("propriedade");
            remover1.classList.remove("ativo");
            let remover2 = document.getElementById("clientes");
            remover2.classList.remove("ativo");
            let remover3 = document.getElementById("servicos");
            remover3.classList.remove("ativo");
        }