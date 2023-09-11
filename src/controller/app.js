import { Produto } from "../model/Produto.js";

export class App {
  static #produtos = Produto.all;

  static mostrarPaginaPrincipal() {
    const descricaoPlataforma = document.createElement("div");
    descricaoPlataforma.textContent =
      "A PetBucket é a melhor plataforma pet online, somos especialistas em ofertar o que há de melhor no mundo animal. Não perca as oportunidades e dê aquela moral pro seu bixinho. A PetBucket é a melhor plataforma pet online, somos especialistas em ofertar o que há de melhor no mundo animal. Não perca as oportunidades e dê aquela moral pro seu bixinho.";
    descricaoPlataforma.setAttribute("id", "discricao-plataforma");

    const labelListaProdutos = document.createElement("h3");
    labelListaProdutos.textContent = "Produtos";
    // const listaProdutos = this.#renderizarProdutos();
    document
      .getElementById("secao-principal")
      .append(descricaoPlataforma, labelListaProdutos);
  }

  static #renderizarProdutos() {
    const ul = document.createElement("ul");

    for (let prod of this.#produtos.keys()) {
      console.log(prod);
      const imgProduto = this.#produtos[prod].img;
      const descricaoProduto = this.#produtos[prod].descricao;
      const precoProduto = this.#produtos[prod].preco;

      const card = this.#criarCard(
        "produtos",
        imgProduto,
        descricaoProduto,
        precoProduto
      );

      const li = document
        .createElement("li")
        .appendChild(card)
        .className("card-li");
      ul.append(li);

      return ul;
    }
  }

  #criarCard(tipo, imgSrc, descricao, preco) {
    const card = document.createElement("div");
    card.classList(tipo);

    const img = document.createElement("img").src(imgSrc);
    const descricaoText = (document.createElement("p").textContent = descricao);
    const precoText = (document.createElement("p").textContent = preco);

    card.append(img, descricaoText, precoText);

    return card;
  }
}
