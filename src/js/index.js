// Passo 1, 2 e 3: Pegar os elementos do HTML
const botao = document.querySelector(".botao");
const idConselho = document.querySelector(".card-number");
const descricaoConselho = document.querySelector(".text");

// Passo 4 e 5: Criar a função e o tratamento de erros
async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = adviceContent.slip.id;
    const adviceText = adviceContent.slip.advice;

    idConselho.textContent = `ADVICE #${adviceId}`;
    descricaoConselho.textContent = `"${adviceText}"`;
  } catch (error) {
    // O bloco catch é executado se houver um erro na busca.
    // Vamos mostrar uma mensagem de erro no console.
    console.error("Não foi possível buscar o conselho:", error);
  }
}

// Passo 8: Atribuir o evento de clique ao botão
botao.addEventListener("click", getAdvice);

// Passo 7: Chamar a função para carregar um conselho inicial
getAdvice();
