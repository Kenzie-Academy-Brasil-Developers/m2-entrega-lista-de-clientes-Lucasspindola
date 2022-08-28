
import Api from "./api.js"



class Cliente {

     static criarCardCliente(objeto) {

          let liCliente = document.createElement('li');
          liCliente.classList.add('card');

          // Primeira Coluna

          let nameClient = document.createElement('h2');

          let containerInformations = document.createElement('div');

          let dataPersonalInformation = document.createElement('h3');

          let emailClient = document.createElement('p');

          let idadeClient = document.createElement('p');

          let cpfClient = document.createElement('p');

          let sexoClient = document.createElement('p');

          nameClient.innerText = objeto.nome;
          dataPersonalInformation.innerText = "Dados Pessoais";
          emailClient.innerText = objeto.email;
          idadeClient.innerText = objeto.idade;
          cpfClient.innerText = objeto.cpf;
          sexoClient.innerText = objeto.sexo;

          containerInformations.append(dataPersonalInformation, emailClient, idadeClient,
               cpfClient, sexoClient);

          // Segunda Coluna
          let containerEndereco = document.createElement('div');

          let enderecoClient = document.createElement('h3');

          let cepClient = document.createElement('p');

          let estadoClient = document.createElement('p');

          let cidadeClient = document.createElement('p');

          let bairroClient = document.createElement('p');

          let ruaClient = document.createElement('p');

          let numeroClient = document.createElement('p');

          enderecoClient.innerText = "Endereco";
          cepClient.innerText = objeto.endereco.cep;
          estadoClient.innerText = objeto.endereco.estado;
          cidadeClient.innerText = objeto.endereco.cidade;
          bairroClient.innerText = objeto.endereco.bairro;
          ruaClient.innerText = objeto.endereco.rua;
          numeroClient.innerText = objeto.endereco.numero;

          let id = objeto.id;

          containerEndereco.append(enderecoClient, cepClient, estadoClient,
               cepClient, estadoClient, cidadeClient,
               bairroClient, ruaClient, numeroClient);

          liCliente.append(nameClient, containerInformations, containerEndereco);
          return liCliente;
     }


     static async renderizarClientes() {
          // window.location
          let clientesAtuais = await Api.listarClientes();
          let ulCliente = document.querySelector('.container');


          clientesAtuais.forEach((element) => {

               let clientes = this.criarCardCliente(element);
               ulCliente.append(clientes);
          });
     }


}

Cliente.renderizarClientes();
// Cliente.cadastrarCliente(await Api.listarClientes());
