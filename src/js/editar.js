import Api from "./api.js"



class Editar {



    // Pega clientes pela requisicao de Renderizar  await Api.listarClientes()
    // Seleciona um select e passa foreach nele para renderizar nome
    static async renderizarClientesSelect() {
        let clientesAtuais = await Api.listarClientes();
        let selecEditar = document.querySelector('.selectEditar');
        let clientesListados = document.createElement('span');

        clientesAtuais.forEach(element => {
            let clientes = clientesListados.innerText = element.nome;
            selecEditar.append(clientes);
        });

    }


    static editar() {

        let objetoEditar = {
            nome: nomeAEditar
        }
    }


}
Editar.renderizarClientesSelect();

// let selecEditar=document.querySelector('.selectEditar');
// console.log(selecEditar)
// console.log('oi')

selecEditar.options[select.options.length] = new Option('My option', 'My value');


export default Editar