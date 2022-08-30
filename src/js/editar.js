import Api from "./api.js"


let atualizarDados = document.getElementById("atualizarDados");

class Editar {

    // Pega clientes pela requisicao de Renderizar  await Api.listarClientes()
    // Seleciona um select e passa foreach nele para renderizar nome cadastro
    static async renderizarClientesSelect() {
        let clientesAtuais = await Api.listarClientes();
        let selecEditar = document.querySelector('.selectEditar');

        console.log(selecEditar.value);
        clientesAtuais.forEach(element => {
            // CRIAR UM OPTION POR CADASTRO A SER CRIADO
            let clientesListados = document.createElement('option');

            clientesListados.innerText = element.nome;
            clientesListados.value = element.id;
            clientesListados.id = element.id;


            selecEditar.append(clientesListados);

        });

    }

    static async carregarEditar() {
        let selecEditar = document.querySelector('.selectEditar');
        let btnBuscar = document.getElementById('buscar');

        let clientesAtuais = await Api.listarClientes();
        btnBuscar.addEventListener('click', (event) => {

            event.preventDefault();



            let nome = document.getElementById("nome");
            let email = document.getElementById("email");
            let idade = document.getElementById("idade");
            let cpf = document.getElementById("cpf");
            let sexo = document.getElementById("sexo");
            let cep = document.getElementById("cep");
            let rua = document.getElementById("rua");
            let numero = document.getElementById('numero');
            let bairro = document.getElementById('bairro');
            let cidade = document.getElementById('cidade');
            let estado = document.getElementById('estado');

            let id
            clientesAtuais.forEach(element => {

                if (element.id == selecEditar.value) {
                    nome.values = element.value;
                    nome.value = element.nome;
                    email.value = element.email;
                    idade.value = element.idade
                    cpf.value = element.cpf;
                    sexo.value = element.sexo;
                    cep.value = element.endereco.cep;
                    rua.value = element.endereco.rua;
                    numero.value = element.endereco.numero;
                    bairro.value = element.endereco.bairro;
                    cidade.value = element.endereco.cidade;
                    estado.value = element.endereco.estado;
                };

            });

        });

    };


    static editarCadastro() {

        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let idade = document.getElementById("idade");
        let cpf = document.getElementById("cpf");
        let sexo = document.getElementById("sexo");
        let cep = document.getElementById("cep");
        let rua = document.getElementById("rua");
        let numero = document.getElementById('numero');
        let bairro = document.getElementById('bairro');
        let cidade = document.getElementById('cidade');
        let estado = document.getElementById('estado');


        let data = {
            nome: nome.value,
            email: email.value,
            sexo: sexo.value,
            idade: idade.value,
            cpf: cpf.value,
            estado: estado.value,
            cidade: cidade.value,
            bairro: bairro.value,
            numero: numero.value,
            rua: rua.value,
            cep: cep.value,
        }

        return data;
    }


    static async listenSubmit() {

        let selecEditar = document.querySelector('.selectEditar');
        atualizarDados.addEventListener('click', async (event) => {
            event.preventDefault();
            let data = Editar.editarCadastro();

            await Api.editarCliente(selecEditar.value, data);


        });
    };

};

Editar.listenSubmit()
Editar.renderizarClientesSelect();
Editar.carregarEditar();

export default Editar;