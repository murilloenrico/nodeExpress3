const url = "http://localhost:3000/pessoas"; // JSON Server na porta 3000

function deletarPessoa() {
    const rg = document.getElementById("rgExcluir").value.trim();

    if (!rg) {
        alert("Digite um RG válido!");
        return;
    }

    // Buscar pelo RG
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const pessoa = data.find(p => p.rg === rg);

            if (!pessoa) {
                alert("Pessoa não encontrada com esse RG!");
                return;
            }

            // Deletar pelo ID interno do JSON Server
            fetch(`${url}/${pessoa.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.ok) {
                    alert(`Pessoa com RG ${rg} deletada com sucesso!`);
                    document.getElementById("rgExcluir").value = "";
                } else {
                    alert("Erro ao deletar pessoa.");
                }
            })
            .catch(err => {
                console.error(err);
                alert("Erro ao deletar pessoa.");
            });
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao buscar pessoa.");
        });
}
