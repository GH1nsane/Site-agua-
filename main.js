async function visualizarDados(){
    const res = await fetch(url)
    const dados = await res.json()
    regiao = 0
     resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
    resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])
    console.log(resultado_dados, resultado_regiao)
  }
  visualizarDados()
  