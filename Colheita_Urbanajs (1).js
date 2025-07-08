class Produto {
  constructor(nome, precoOriginal, precoDesconto, validade, quantidade) {
    this.nome = nome;
    this.precoOriginal = precoOriginal;
    this.precoDesconto = precoDesconto;
    this.validade = validade;
    this.quantidade = quantidade;
  }
}

let produtos = [];

const btnNovo = document.getElementById("btn-novo-produto");
const btnVer = document.getElementById("btn-mostrar-lista");
const form = document.getElementById("form-produto");
const lista = document.getElementById("lista-produtos");
const titulo = document.getElementById("titulo-lista");

btnNovo.addEventListener("click", () => {
  form.style.display = "block";
  lista.style.display = "none";
  titulo.style.display = "none";
});

btnVer.addEventListener("click", () => {
  mostrarProdutos();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const precoOriginal = document.getElementById("preco-original").value;
  const precoDesconto = document.getElementById("preco-desconto").value;
  const validade = document.getElementById("validade").value;
  const quantidade = document.getElementById("quantidade").value;

  if (!nome || !precoOriginal || !precoDesconto || !validade || !quantidade) {
    alert("Preencha todos os campos.");
    return;
  }

  const novoProduto = new Produto(nome, precoOriginal, precoDesconto, validade, quantidade);
  produtos.push(novoProduto);

  alert("Produto adicionado!");
  form.reset();
  form.style.display = "none";
});

function mostrarProdutos() {
  lista.innerHTML = "";
  if (produtos.length === 0) {
    lista.innerHTML = "<p>Nenhum produto adicionado.</p>";
  } else {
    for (let i = 0; i < produtos.length; i++) {
      const p = produtos[i];
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${p.nome}</strong><br>
        Preço original: R$ ${p.precoOriginal}<br>
        Preço com desconto: R$ ${p.precoDesconto}<br>
        Validade: ${p.validade}<br>
        Quantidade: ${p.quantidade}</p><hr>`;
      lista.appendChild(div);
    }
  }

  titulo.style.display = "block";
  lista.style.display = "block";
}
