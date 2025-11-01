const url = "http://localhost:3000/pessoas"; // URL do JSON Server
let pessoaId = null;

// Buscar pessoa pelo RG
function buscarPessoa() {
    const rgBusca = document.getElementById("idBuscar").value.trim(); // Aqui pegaremos RG em vez do ID

    if (!rgBusca) {
        alert("Digite o RG para buscar!");
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pessoa = data.find(p => p.rg === rgBusca);
            if (!pessoa) {
                alert("Pessoa não encontrada com esse RG!");
                pessoaId = null;
                return;
            }

            pessoaId = pessoa.id; // ID interno do JSON Server
            // Preenche os campos do formulário
            document.getElementById("nome").value = pessoa.nome;
            document.getElementById("sobrenome").value = pessoa.sobrenome;
            document.getElementById("email").value = pessoa.email;
            document.getElementById("idade").value = pessoa.idade;
            document.getElementById("telefone").value = pessoa.telefone;
            document.getElementById("rua").value = pessoa.rua;
            document.getElementById("bairro").value = pessoa.bairro;
            document.getElementById("cidade").value = pessoa.cidade;
            document.getElementById("estado").value = pessoa.estado;
            document.getElementById("rg").value = pessoa.rg;
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao buscar pessoa");
        });
}

// Atualizar pessoa
function atualizarPessoa() {
    if (!pessoaId) {
        alert("Busque uma pessoa pelo RG primeiro!");
        return;
    }

    const dadosAtualizados = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        idade: Number(document.getElementById("idade").value),
        telefone: document.getElementById("telefone").value,
        rua: document.getElementById("rua").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        rg: document.getElementById("rg").value
    };

    fetch(`${url}/${pessoaId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(res => res.json())
    .then(data => {
        alert("Pessoa atualizada com sucesso!");
        pessoaId = null;

        // Limpa o formulário
        document.getElementById("idBuscar").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("sobrenome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("rua").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";
        document.getElementById("rg").value = "";
    })
    .catch(err => {
        console.error(err);
        alert("Erro ao atualizar pessoa");
    });
}
