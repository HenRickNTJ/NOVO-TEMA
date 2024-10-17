const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais () {
    const res = await fetch(url);
    const dados = res.json()
    console.log(dados);
}
visualizarInformacoesGlobais()
paragrafo.innerHTML = Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximamente <span>$