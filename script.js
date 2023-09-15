document.querySelector('.sabor1').addEventListener('click', function() {
    trocarSabor('assets/img1.png');
    trocarCor('#017143');
});

document.querySelector('.sabor2').addEventListener('click', function() {
    trocarSabor('assets/img2.png');
    trocarCor('#eb7495');
});

document.querySelector('.sabor3').addEventListener('click', function() {
    trocarSabor('assets/img3.png');
    trocarCor('#d752b1');
});

// Troca a source da imagem com a classe "starbucks"

function trocarSabor(novoSabor) {
    document.querySelector('.starbucks').src = novoSabor;
}

// Troca a cor do círculo de classe "circulo"

function trocarCor(cor) {
    const circulo = document.querySelector('.circulo');

    circulo.style.background = cor;
}