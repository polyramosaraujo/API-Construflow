function concatDisciplinas() {
  let dadosApontamentos = abaApontamentos.getRange(2,4,abaApontamentos.getLastRow()-1,5).getValues()
  let dadosFinais = []

  dadosApontamentos.map(function(disciplinas){
    let concatenacao = ""
    disciplinas.filter(function(disciplina){return disciplina!="-"}).map(function(disciplina){
      if(concatenacao!=""){concatenacao = concatenacao+", "}
      concatenacao = concatenacao+disciplina
    })
    dadosFinais.push([concatenacao])
  })

  Logger.log(dadosFinais)
  abaApontamentos.getRange(2,10,dadosFinais.length,1).setValues(dadosFinais)
}

function concatDisciplinasOutros() {
  let dadosApontamentos = abaApontamentos.getRange(2,4,abaApontamentos.getLastRow()-1,6).getValues()
  let dadosFinais = []

  dadosApontamentos.map(function(disciplinas){
    let concatenacao = ""
    disciplinas.filter(function(disciplina){return disciplina!="-"}).map(function(disciplina){
      if(concatenacao!=""){concatenacao = concatenacao+", "}
      concatenacao = concatenacao+disciplina
    })
    dadosFinais.push([concatenacao])
  })

  Logger.log(dadosFinais)
  abaApontamentos.getRange(2,11,dadosFinais.length,1).setValues(dadosFinais)
}
