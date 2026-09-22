let eventos = [];
let itensPorPagina = 10;
let indiceAtual = 0;

//fetch para buscar eventos no json e chamar o método
fetch("/src/data/eventos.json")
  .then((resposta) => resposta.json())
  .then((dados) => {
    eventos = dados;
    exibirEventos();
  });

function exibirEventos() {
  const container = document.getElementById("lista-eventos");

  //define o limite do lote atual
  const proximoIndice = indiceAtual + itensPorPagina;

  const itensParaMostrar = eventos.slice(indiceAtual, proximoIndice);

  itensParaMostrar.forEach((evento) => {
    //cria o elemento visual para cada evento
    const card = document.createElement("div");
    card.classList.add("card-evento");

    card.innerHTML = `
      <div class="event-img-wrapper">
          <img src="${evento.imagem}" alt="Imagem do evento" class="img-evento">
      </div>
      <div class="conteudo-evento">
          <span class="data-evento">${evento.data} — ${evento.local}</span>
          <h2 class="titulo-evento">${evento.titulo}</h2>
          <p class="texto-evento">${evento.texto}</p>
      </div>
    `;

    container.appendChild(card);
  });

  indiceAtual = proximoIndice;

  //se já mostrou os 11 itens (ou mais), esconde o botão "mais eventos"
}

//Evento de clique no botão para carregar o próximo lote

document
  .getElementById("carregar-mais")
  .addEventListener("click", exibirEventos);
