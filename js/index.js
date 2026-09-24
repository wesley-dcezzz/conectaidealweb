fetch("data/eventos.json")
  .then((resposta) => resposta.json())
  .then((dados) => {
    //verifica se existe eventos cadastrados
    if (dados.length > 0) {
      //pega o primeiro item do array JSON (mais recente)
      const primeiroEvento = dados[0];

      //seleciona os containers(div) criados no HTML
      const containerImagem = document.querySelector(
        ".container-ultimo-evento .imagem-evento",
      );
      const containerConteudo = document.querySelector(
        ".container-ultimo-evento .conteudo-evento",
      );

      if (containerImagem && containerConteudo) {
        //insere imagem com wrapper de zoom
        containerImagem.innerHTML = `
                    <div class="event-img-wrapper">
                        <img src="${primeiroEvento.imagem}" alt="Imagem do evento mais recente" class="img-evento">
                    </div>
                `;

        //inserindo os textos (data, local, titulo e descrição)
        containerConteudo.innerHTML = `
                <h3 class="titulo-evento">${primeiroEvento.titulo}</h3>
                    <span class="data-evento">${primeiroEvento.data} - ${primeiroEvento.local}</span> 
                    <p class="resumo-evento">${primeiroEvento.resumo}</p>
                `;
      }
    }
  })
  .catch((erro) => console.error("Erro ao carregar evento:", erro));

// Função para animar a seção quando o utilizador rolar a tela até ela
const observarSecaoEvento = () => {
  const secaoEvento = document.querySelector(".container-ultimo-evento");

  if (!secaoEvento) return;

  // Configura o observador de scroll
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Se a seção apareceu na tela
        if (entry.isIntersecting) {
          secaoEvento.classList.add("ativo"); // Adiciona a classe que faz deslizar para a posição original
          observer.unobserve(entry.target); // Para de observar após animar uma vez
        }
      });
    },
    {
      threshold: 0.2, // Dispara quando 20% da seção estiver visível na tela
    },
  );

  observer.observe(secaoEvento);
};

// Chama a função após o conteúdo ser carregado
window.addEventListener("DOMContentLoaded", observarSecaoEvento);
