const url = "http://localhost:3000/pessoas";

// Listar todos
function listarPessoas() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            preencherTabela(data);
        })
        .catch(err => console.error(err));
}

// Buscar pelo RG
function buscarPorRG() {
    const rg = document.getElementById("rgBusca").value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const filtrado = data.filter(p => p.rg === rg);
            if (filtrado.length === 0) {
                alert("Nenhuma pessoa encontrada com esse RG");
            }
            preencherTabela(filtrado);
        })
        .catch(err => console.error(err));
}

// Função para preencher a tabela
function preencherTabela(pessoas) {
    const tabela = document.getElementById("tabela-corpo");
    tabela.innerHTML = "";
    pessoas.forEach(p => {
        const linha = `
            <tr>
                <td>${p.id}</td>
                <td>${p.nome}</td>
                <td>${p.sobrenome}</td>
                <td>${p.email}</td>
                <td>${p.idade}</td>
                <td>${p.telefone}</td>
                <td>${p.rua}</td>
                <td>${p.bairro}</td>
                <td>${p.cidade}</td>
                <td>${p.estado}</td>
                <td>${p.rg}</td>
            </tr>
        `;
        tabela.innerHTML += linha;
    });
}

// Listar todos ao carregar a página
listarPessoas();
