class Api {

    static async listarClientes() {
        let clientesAtuais = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
        return clientesAtuais

    }


    //     const options = {method: 'POST'};

    // fetch('https://atividade-api-clientes.herokuapp.com/clientes', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err)); 

    static async cadastrarCliente(data) {

        let myInit = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)


        };
        let metPost = await fetch("https://atividade-api-clientes.herokuapp.com/clientes", myInit)
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        return metPost
    }

    static async editarCliente(id, data) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer https://atividade-api-clientes.herokuapp.com/clientes/${id}`
            },
            body: '{"nome":"Renato"}'// arrumar esse body
        };

        fetch('https://atividade-api-clientes.herokuapp.com/clientes/1', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }

    static async deletarCliente(id) {

    }

}

export default Api 