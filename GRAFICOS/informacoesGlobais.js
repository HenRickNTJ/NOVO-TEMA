const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais () {
    const res = await fetch(url);
    const dados = res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo)/ 1e9 
    const paragrafo = document.createElement('p')
    paragrafo.classList.add ('graficos-container_texto')
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round ((dados.tempo_medio - horas * 100))
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões </span> de pessoas e que aproximamente <span>${pessoasConectadas} bilhões </span> estão conectadas em alguma rede social e passam em média <span>$(horas)</span> horas e <span>$ (minutos)</span> minutos conectadas.
    <br> Isso significa que aproximamente ${porcentagemConectada}% de pessoas estão conectadas em alguma rede social.`

    const container = document.getElementById('grafico-container')
    container.appendChild(paragrafo)


visualizarInformacoesGlobais()
}
