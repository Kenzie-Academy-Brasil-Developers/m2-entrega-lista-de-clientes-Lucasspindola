class Api {

    static async listarClientes() {
        let clientesAtuais = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
        return clientesAtuais

    }

    static async pesquisarCliete() {
        let clientesAtuais = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/ ${id}`)
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
        return clientesAtuais

    }


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
    };


    static async editarCliente(id, data) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        };

        fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, options)
            .then(response => response.json())
            .then(response => window.location.assign('/index.html'))

            .catch(err => console.error(err));

    };


    static async deletarCliente(id) {

        const options = { method: 'DELETE' };

        await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, options)
            .then(response => response.json())
            .then(response => window.location.assign('../pages/deletar.html'))
            .catch((err) => window.location.assign('../pages/deletar.html'));

    };

};

export default Api;