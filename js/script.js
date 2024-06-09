function movimentoAleatorio(nao) 
{
    nao.style.position = "absolute";
    nao.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    nao.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const movimento = document.querySelector("#nao");

movimento.addEventListener("mouseenter", function (e) {
    movimentoAleatorio(e.target);
})