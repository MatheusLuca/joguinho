const sonic = document.querySelector('.personagem'); // selecionando a classe personagem
const pipe = document.querySelector('.pipe');// selecionando a classe pipe
const placar = document.querySelector('.placar');
// criando uma funcao que primeiro adicionar a classe jump
// jump tem uma animacao de 500 ms 
// o keyframe jump é a animação do sonic saindo do chao, no ar e dps voltando no chao

const jump = () => {
    // com a seleção sonic ele adiciona a classe jump na classe personagem
    sonic.classList.add('jump');
    //settimeout é um cronometro para executar uma açao
    setTimeout(() => {
        
        //remove a classe jump para que possa pular mais de uma vez
        sonic.classList.remove('jump');
        // a cada 500 ms ele remove a classe jump para ser adicionada novamente
    } , 500);
}

// adicionando o evento de pular quando pressionar qualquer tecla
document.addEventListener('keydown', jump);

// loop vai ficar verificando as condições para saber se o jogo continua ou nao.

//executar uma determinada função repetidamente em intervalos de tempo
const loop = setInterval(() => {

    //pega a distancia vertical do pipe 
    const pipePosition = pipe.offsetLeft;

    //personagemPosition verifica a altura
    const personagemPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    console.log(personagemPosition);
    
        if(pipePosition <= 40 && pipePosition > 0  && personagemPosition < 75){

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${personagemPosition}px`;
            
            sonic.src = 'img/sonicMorre.gif';
            sonic.style.width = '100px';
            
            //interrompe o loop
            clearInterval(loop);
        }
    }, 10 )
