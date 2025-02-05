
let amigos = [];
console.log("Lista inicial de amigos", amigos);

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nome = amigoInput.value.trim();
    if (!nome) {
        alert("Por favor, insira um nome válido!");
        return;
    }
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        console.log("Lista de amigos atual:", amigos); 
        atualizarLista();
        amigoInput.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";
        const li = document.createElement("li");
        li.textContent = "Sorteado: " + sorteado;
        resultadoLista.appendChild(li);
    } else {
        document.getElementById("resultado").textContent = "Adicione nomes antes de sortear!";
    }
}

function reiniciarLista() {
    amigos = [];
    console.log("Lista reiniciada:", amigos); 
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}