
import Api from "./api.js"

let nome = document.getElementById("1");
let email = document.getElementById("2");
let idade = document.getElementById("3");
let cpf = document.getElementById("4");
let sexo = document.getElementById("5");
let cep = document.getElementById("6");
let rua = document.getElementById("7");
let numero = document.getElementById('8');
let bairro = document.getElementById('9');
let cidade = document.getElementById('10');
let estado = document.getElementById('11');

// Pegando botão de Cadastrar. Por ser dentro de um form, usasse o type submite e não o click.
let cadastroCliente = document.querySelector('#cadastroCliente')

class Cadastrar {
    static async cadastrarClienteNovo(data) {

        cadastroCliente.addEventListener("submit", async (event) => {

            event.preventDefault()

            let novoCadastro = {
                nome: nome.value,
                email: email.value,
                sexo: sexo.value,
                idade: idade.value,
                cpf: cpf.value,
                endereco: {
                    estado: estado.value,
                    cidade: cidade.value,
                    bairro: bairro.value,
                    numero: numero.value,
                    rua: rua.value,
                    cep: cep.value
                }

            }
            //    Chamando a API e passando o body(novoCadastro)
            return await Api.cadastrarCliente(novoCadastro);

        })
    }
}

let novoCliente = Cadastrar.cadastrarClienteNovo()
export default Cadastrar










