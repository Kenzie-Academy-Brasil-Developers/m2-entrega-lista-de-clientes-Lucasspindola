import Api from "./api.js"

class DeletarCadastro {

    static async renderizarClientesParaDeletar() {
        let clientesAtuais = await Api.listarClientes();
        let selecDeletar = document.getElementById('selectDeletar');


        clientesAtuais.forEach(element => {
            // CRIAR UM OPTION POR CADASTRO A SER CRIADO
            let clientesListados = document.createElement('option');

            clientesListados.innerText = element.nome;
            clientesListados.value = element.id;
            clientesListados.id = element.id;


            selecDeletar.append(clientesListados);

        });
    }


    static async Deletar() {
        let selecDeletar = document.getElementById('selectDeletar');
        let btnDeletar = document.getElementById('btndeletar');
        btnDeletar.addEventListener('click', (event) => {
            event.preventDefault();


            // Pega o ID

            let id = selecDeletar.value;
            console.log(`Deletado cliente de ID número ${id}`);
            Api.deletarCliente(id);


        })

    }

}


DeletarCadastro.renderizarClientesParaDeletar();
DeletarCadastro.Deletar();