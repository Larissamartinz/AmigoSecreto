
let amigos = [];
console.log("Lista inicial de amigos:", amigos);

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nome = amigoInput.value.trim();

    if (!nome) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert(`O nome "${nome}" já foi adicionado!`);
        return;
    }

    amigos.push(nome);
    console.log("Lista de amigos atual:", amigos);
    
    atualizarLista();
    amigoInput.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });

    exibirTextoNaTela("#listaAmigos", `Nomes adicionados: ${amigos.join(", ")}`);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        exibirTextoNaTela("#resultado", "Adicione nomes antes de sortear!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirTextoNaTela("#resultado", `O amigo sorteado é: ${sorteado}`);
}

function reiniciarLista() {
    amigos = [];
    console.log("Lista reiniciada:", amigos); 
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
    exibirTextoNaTela("#resultado", "A lista foi reiniciada.");
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
    }

    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}