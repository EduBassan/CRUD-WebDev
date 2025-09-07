let jogadoras = [
    {
        "nome": "Andressa Alves",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://cdn.agenciamural.org.br/2023/07/11213707/AndressaAlves-SamRoblesCBF.jpg",
        "gols": 15,
        "assistencias": 10,
        "jogos": 28,
        "favorita": false
    },
    {
        "nome": "Dayana Rodríguez",
        "posicao": "Meio-campo",
        "clube": "Corinthians",
        "foto": "https://cdn.meutimao.com.br/_upload/noticia/2024/11/25/dayana-rodriguez-foi-campea-do-campeonato-gaucho-ci941w.jpg",
        "gols": 5,
        "assistencias": 12,
        "jogos": 30,
        "favorita": false
    },
    {
        "nome": "Mariza",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://centraldotimao.com.br/wp-content/uploads/2023/11/image-21-edited.png",
        "gols": 2,
        "assistencias": 1,
        "jogos": 32,
        "favorita": false
    },
    {
        "nome": "Thaís Regina",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://s2-ge.glbimg.com/vcuf9RWT_1RHvKGR3doIH6ay-e8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/P/E/4lzuxnQ2yvEy5BIoyvpg/whatsapp-image-2023-01-17-at-18.18.13.jpeg",
        "gols": 1,
        "assistencias": 2,
        "jogos": 25,
        "favorita": false
    },
    {
        "nome": "Letícia Teles",
        "posicao": "Zagueira",
        "clube": "Corinthians",
        "foto": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/25/291656217-photo5042136321417652958x.jpg",
        "gols": 0,
        "assistencias": 0,
        "jogos": 18,
        "favorita": false
    }
]

window.onload = function() {
    loadPlayers();
    displayPlayers();

    document.getElementById('playerForm').addEventListener('submit', addPlayer); 
    document.getElementById('playerList').addEventListener('click', handlePlayerClick);
};

function handlePlayerClick(event) {
    const button = event.target.closest("button");
    if (!button) return;
    const action = button.dataset.action;
    const index = button.dataset.index;

    if (action === "edit") editPlayer(index);
    else if (action === "delete") deletePlayer(index);
    else if (action === "favorite") toggleFavorite(index);
}

function savePlayers() {
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

function loadPlayers() {
    const stored = localStorage.getItem("jogadoras");
    if (stored) jogadoras = JSON.parse(stored);
    else savePlayers();
}

// CREATE
function addPlayer(event) {
    event.preventDefault();
    const player = {
        nome: document.getElementById('nome').value,
        posicao: document.getElementById('posicao').value,
        clube: document.getElementById('clube').value,
        gols: document.getElementById('gols').value,
        assistencias: document.getElementById('assistencias').value,
        jogos: document.getElementById('jogos').value,
        foto: document.getElementById('foto').value,
        favorita: false
    };
    jogadoras.unshift(player);
    savePlayers();
    document.getElementById('playerForm').reset();
    displayPlayers();
    alert("Jogadora adicionada com sucesso!");
}

// READ
function displayPlayers() {
    const container = document.getElementById('playerList');
    container.innerHTML = '';

    const ordenadas = [...jogadoras].sort((a, b) => b.favorita - a.favorita);

    ordenadas.forEach((j, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${j.foto}" alt="${j.nome}">
            <h3>${j.nome} ${j.favorita ? "⭐" : ""}</h3>
            <p><strong>Posição:</strong> ${j.posicao}</p>
            <p><strong>Clube:</strong> ${j.clube}</p>
            <p> Gols: ${j.gols} </p>
            <p>Assistências: ${j.assistencias}</p>
            <p>Jogos: ${j.jogos}</p>
            <button data-action="favorite" data-index="${jogadoras.indexOf(j)}">
                ${j.favorita ? "Desfavoritar" : "Favoritar"}
            </button>
            <button data-action="edit" data-index="${jogadoras.indexOf(j)}">Editar</button>
            <button data-action="delete" data-index="${jogadoras.indexOf(j)}">Excluir</button>
            `;
        container.appendChild(card);
    });
}

// UPDATE
function editPlayer(index) {
    const j = jogadoras[index];
    const novoNome = prompt("Editar nome:", j.nome);
    if (novoNome !== null) j.nome = novoNome;

    const novaPosicao = prompt("Editar posição:", j.posicao);
    if (novaPosicao !== null) j.posicao = novaPosicao;

    const novoClube = prompt("Editar clube:", j.clube);
    if (novoClube !== null) j.clube = novoClube;

    savePlayers();
    displayPlayers();
    alert("Jogadora editada com sucesso!");
}

// DELETE
function deletePlayer(index) {
    if (confirm("Tem certeza que deseja excluir esta jogadora?")) {
        jogadoras.splice(index, 1);
        savePlayers();
        displayPlayers();
        alert("Jogadora removida com sucesso!");
    }
}

// FAVORITAR 
function toggleFavorite(index) {
    jogadoras[index].favorita = !jogadoras[index].favorita;
    savePlayers();
    displayPlayers();
}