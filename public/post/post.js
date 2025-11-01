function adicionarPessoa() {
    const pessoa = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        telefone: document.getElementById('telefone').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        rg: document.getElementById('rg').value
    };

    fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pessoa)
    })
    .then(res => res.json())
    .then(data => {
        alert('Pessoa adicionada com sucesso!');
        // Limpa o formulário
        Object.keys(pessoa).forEach(key => document.getElementById(key).value = '');
    })
    .catch(err => console.error(err));
}
