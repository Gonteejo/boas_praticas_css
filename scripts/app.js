document.addEventListener('DOMContentLoaded', function () {
    //querySelectorAll retorna uma lista de elementos que atendem ao seletor de classe .produto.
    //forEach percorre a lista de elementos e adiciona os event listeners para cada elemento.
    //addEventListener adiciona um event listener para o evento de mouseover e mouseout.
    //assim ao passar o mouse sobre o elemento, a classe produto--destaque é adicionada e ao retirar o mouse, a classe é removida.
    document.querySelectorAll(".produto").forEach(elemento => {
        elemento.addEventListener("mouseover", () => {
            elemento.classList.add("produto--destaque");
        })
        elemento.addEventListener("mouseout", () => {
            elemento.classList.remove("produto--destaque");
        })
    });
});