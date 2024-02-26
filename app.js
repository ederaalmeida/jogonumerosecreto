let numeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirElementoNaTela(tag,texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

textoMensagemInicio();

function verificarChute(){

    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    let mensagem = `Parabéns você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    if(chute == numeroSecreto){
        exibirElementoNaTela('h1','Acertou');
        exibirElementoNaTela('p', mensagem);
        chute = document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
        exibirElementoNaTela('p', 'O número secreto é menor');
    }else{
        exibirElementoNaTela('p', 'O número secreto é maior');
    }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeLimiteLista = numeroSorteado.length;

    if(quantidadeLimiteLista == numeroLimite){
        numeroSorteado = [];
    }

    if(numeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numeroSorteado.push(numeroEscolhido);
        console.log(numeroSorteado);
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoMensagemInicio();
    chute = document.getElementById('reiniciar').setAttribute('disabled', true);
}

function textoMensagemInicio(){
    exibirElementoNaTela('h1','Jogo do numero Secreto');
    exibirElementoNaTela('p','Inserir um número entre 1 e 10');
}