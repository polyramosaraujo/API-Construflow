/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getProjects(){
  Logger.log('INÍCIO DA FUNÇÃO GET PROJECTS')

  abaProjetos.getRange(2,1,abaProjetos.getLastRow(),abaProjetos.getLastColumn()).clear()

  let projetos = getData("projects")

  let dadosFinais = []

  for(let i=1; i<projetos.length; i++){
    let projetoDados = projetos[i]
    let projetoId = projetoDados.id
    let nome = projetoDados.name
    let status = projetoDados.status
    let permissaoPublico = projetoDados.allow_public_view
    let projetoImagem = projetoDados.image
    let empresaId = projetoDados.company_id

    let dadosFinaisProjeto = [projetoId,nome,status,permissaoPublico,projetoImagem,empresaId]

    dadosFinais.push(dadosFinaisProjeto)
  }

  abaProjetos.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET PROJECTS')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getCompanies(){
  Logger.log('INÍCIO DA FUNÇÃO GET COMPANIES')

  abaEmpresas.getRange(2,1,abaEmpresas.getLastRow(),abaEmpresas.getLastColumn()).clear()

  let empresas = getData("companies")

  let dadosFinais = []

  for(let i=1; i<empresas.length; i++){
    let empresaDados = empresas[i]
    let empresaId = empresaDados.id
    let nome = empresaDados.name
    let logo = empresaDados.logo

    let dadosFinaisEmpresa = [empresaId,nome,logo]

    dadosFinais.push(dadosFinaisEmpresa)
  }

  abaEmpresas.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET COMPANIES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getUsers(){
  Logger.log('INÍCIO DA FUNÇÃO GET USERS')

  abaUsuarios.getRange(2,1,abaUsuarios.getLastRow(),abaUsuarios.getLastColumn()).clear()

  let usuarios = getData("users")

  let dadosFinais = []

  for(let i=1; i<usuarios.length; i++){
    let usuarioDados = usuarios[i]
    let usuarioId = usuarioDados.id
    let nome = usuarioDados.name
    let sobrenome = usuarioDados.last_name
    let email = usuarioDados.email
    let foto = usuarioDados.photo
    let empresaId = usuarioDados.company_id

    let dadosFinaisUsuario = [usuarioId,nome,sobrenome,email,foto,empresaId]

    dadosFinais.push(dadosFinaisUsuario)
  }

  abaUsuarios.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET USERS')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getLocals(){
  Logger.log('INÍCIO DA FUNÇÃO GET LOCALS')

  abaLocais.getRange(2,1,abaLocais.getLastRow(),abaLocais.getLastColumn()).clear()

  let locais = getData("locals")

  let dadosFinais = []

  for(let i=1; i<locais.length; i++){
    let localDados = locais[i]
    let localId = localDados.id
    let nome = localDados.name
    let abreviacao = localDados.abbreviation
    let abreviacaoTree = localDados.abbreviationTree
    let parentId = localDados.parentId
    let projetoId = localDados.projectId

    let dadosFinaisLocal = [localId,nome,abreviacao,abreviacaoTree,parentId,projetoId]

    dadosFinais.push(dadosFinaisLocal)
  }

  abaLocais.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET LOCALS')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getDisciplines(){
  Logger.log('INÍCIO DA FUNÇÃO GET DISCIPLINES')

  abaDisciplinas.getRange(2,1,abaDisciplinas.getLastRow(),abaDisciplinas.getLastColumn()).clear()

  let disciplinas = getData("disciplines")

  let dadosFinais = []

  for(let i=1; i<disciplinas.length; i++){
    let disciplinaDados = disciplinas[i]
    let disciplinaId = disciplinaDados.id
    let nome = disciplinaDados.name
    let abreviacao = disciplinaDados.abbreviation
    let padraoId = disciplinaDados.standardDisciplineId
    let projetoId = disciplinaDados.projectId

    let dadosFinaisDisciplina = [disciplinaId,nome,abreviacao,padraoId,projetoId]

    dadosFinais.push(dadosFinaisDisciplina)
  }

  abaDisciplinas.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET DISCIPLINES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getPhases(){
  Logger.log('INÍCIO DA FUNÇÃO GET PHASES')

  abaFases.getRange(2,1,abaFases.getLastRow(),abaFases.getLastColumn()).clear()

  let fases = getData("phases")

  let dadosFinais = []

  for(let i=1; i<fases.length; i++){
    let faseDados = fases[i]
    let faseId = faseDados.id
    let nome = faseDados.name
    let abreviacao = faseDados.abbreviation
    let chave = faseDados.key
    let allowDisable = faseDados.allowDisable

    let dadosFinaisFase = [faseId,nome,abreviacao,chave,allowDisable]

    dadosFinais.push(dadosFinaisFase)
  }

  abaFases.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET PHASES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getCategories(){
  Logger.log('INÍCIO DA FUNÇÃO GET CATEGORIES')

  abaCategorias.getRange(2,1,abaCategorias.getLastRow(),abaCategorias.getLastColumn()).clear()

  let categorias = getData("categories")

  let dadosFinais = []

  for(let i=1; i<categorias.length; i++){
    let categoriaDados = categorias[i]
    let categoriaId = categoriaDados.id
    let nome = categoriaDados.name
    let allowDisable = categoriaDados.allowDisable

    let dadosFinaisCategoria = [categoriaId,nome,allowDisable]

    dadosFinais.push(dadosFinaisCategoria)
  }

  abaCategorias.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET CATEGORIES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getLabels(){
  Logger.log('INÍCIO DA FUNÇÃO GET LABELS')

  abaEtiquetas.getRange(2,1,abaEtiquetas.getLastRow(),abaEtiquetas.getLastColumn()).clear()

  let etiquetas = getData("labels")

  let dadosFinais = []

  for(let i=1; i<etiquetas.length; i++){
    let etiquetaDados = etiquetas[i]
    let etiquetaId = etiquetaDados.id
    let nome = etiquetaDados.name
    let abreviacao = etiquetaDados.abbreviation
    let abreviacaoTree = etiquetaDados.abbreviationTree
    let parentId = etiquetaDados.parentId
    let projetoId = etiquetaDados.projectId

    let dadosFinaisEtiqueta = [etiquetaId,nome,abreviacao,abreviacaoTree,parentId,projetoId]

    dadosFinais.push(dadosFinaisEtiqueta)
  }

  abaEtiquetas.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET LABELS')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getIssues(){
  Logger.log('INÍCIO DA FUNÇÃO GET ISSUES')

  abaApontamentos.getRange(2,1,abaApontamentos.getLastRow(),abaApontamentos.getLastColumn()).clear()

  let apontamentos = getData("issues")

  let dadosFinais = []

  for(let i=1; i<apontamentos.length; i++){
    let apontamentoDados = apontamentos[i]
    let apontamentoId = apontamentoDados.id
    let titulo = apontamentoDados.title
    let status = apontamentoDados.status
    let visibilidade = apontamentoDados.visibility
    let codigo = apontamentoDados.code
    let descricao = apontamentoDados.description
    let categoria = apontamentoDados.category
    let prioridade = apontamentoDados.priority
    let dataCriacao = apontamentoDados.createdAt
    let dataDeadline = apontamentoDados.deadline
    let faseCriacao = apontamentoDados.creationPhase
    let faseResolucao = apontamentoDados.resolutionPhase
    let dataAtualizacao = apontamentoDados.updatedAt
    let dataAtualizacaoStatus = apontamentoDados.statusUpdatedAt
    let dataEdicao = apontamentoDados.editedAt
    let userIdCriacao = apontamentoDados.createdByUserId
    let userIdAtualizacaoStatus = apontamentoDados.statusUpdatedByUserId
    let userIdEdicao = apontamentoDados.editedByUserId
    let projetoId = apontamentoDados.projectId
    let url = `https://app.construflow.com.br/workspace/project/${projetoId}/issues?issueId=${apontamentoId}`

    let dadosFinaisApontamento = [apontamentoId,titulo,status,visibilidade,codigo,descricao,categoria,prioridade,url,dataCriacao,dataDeadline,faseCriacao,faseResolucao,dataAtualizacao,dataAtualizacaoStatus,dataEdicao,userIdCriacao,userIdAtualizacaoStatus,userIdEdicao,projetoId]

    dadosFinais.push(dadosFinaisApontamento)
  }

  abaApontamentos.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET ISSUES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getIssuesLocals(){
  Logger.log('INÍCIO DA FUNÇÃO GET ISSUES LOCALS')

  abaApontamentosLocais.getRange(2,1,abaApontamentosLocais.getLastRow(),abaApontamentosLocais.getLastColumn()).clear()

  let apontamentosLocais = getData("issues-locals")

  let dadosFinais = []

  for(let i=1; i<apontamentosLocais.length; i++){
    let apontamentoLocal = apontamentosLocais[i]
    let apontamentoLocalId = apontamentoLocal.id
    let apontamentoId = apontamentoLocal.issueId
    let localId = apontamentoLocal.localId

    let dadosFinaisApontamentosLocais = [apontamentoLocalId,apontamentoId,localId]

    dadosFinais.push(dadosFinaisApontamentosLocais)
  }

  abaApontamentosLocais.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET ISSUES LOCALS')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getIssuesDisciplines(){
  Logger.log('INÍCIO DA FUNÇÃO GET ISSUES DISCIPLINES')

  abaApontamentosDisciplinas.getRange(2,1,abaApontamentosDisciplinas.getLastRow(),abaApontamentosDisciplinas.getLastColumn()).clear()

  let apontamentosDisciplinas = getData("issues-disciplines")

  let dadosFinais = []

  for(let i=1; i<apontamentosDisciplinas.length; i++){
    let apontamentoDisciplina = apontamentosDisciplinas[i]
    let apontamentoDisciplinaId = apontamentoDisciplina.id
    let apontamentoId = apontamentoDisciplina.issueId
    let disciplinaId = apontamentoDisciplina.disciplineId
    let status = apontamentoDisciplina.status
    let dataDeadline = apontamentoDisciplina.deadline
    let dataResolucao = apontamentoDisciplina.done_at

    let dadosFinaisApontamentoDisciplina = [apontamentoDisciplinaId,apontamentoId,disciplinaId,status,dataDeadline,dataResolucao]

    dadosFinais.push(dadosFinaisApontamentoDisciplina)
  }

  abaApontamentosDisciplinas.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET ISSUES DISCIPLINES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getIssuesLabels(){
  Logger.log('INÍCIO DA FUNÇÃO GET ISSUES LABELS')

  abaApontamentosEtiquetas.getRange(2,1,abaApontamentosEtiquetas.getLastRow(),abaApontamentosEtiquetas.getLastColumn()).clear()

  let apontamentosEtiquetas = getData("issues-labels")

  let dadosFinais = []

  for(let i=1; i<apontamentosEtiquetas.length; i++){
    let apontamentoEtiqueta = apontamentosEtiquetas[i]
    let apontamentoEtiquetaId = apontamentoEtiqueta.id
    let apontamentoId = apontamentoEtiqueta.issueId
    let etiquetaId = apontamentoEtiqueta.labelId

    let dadosFinaisApontamentoEtiqueta = [apontamentoEtiquetaId,apontamentoId,etiquetaId]

    dadosFinais.push(dadosFinaisApontamentoEtiqueta)
  }

  abaApontamentosEtiquetas.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET ISSUES DISCIPLINES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getHistories(){
  Logger.log('INÍCIO DA FUNÇÃO GET HISTORIES')

  abaHistorias.getRange(2,1,abaHistorias.getLastRow(),abaHistorias.getLastColumn()).clear()

  let historias = getData("histories")

  let dadosFinais = []

  for(let i=1; i<historias.length; i++){
    let historiaDados = historias[i]
    let historiaId = historiaDados.id
    let data = historiaDados.date
    let contagem = historiaDados.count
    let userId = historiaDados.userId
    let apontamentoId = historiaDados.issueId
    let projetoId = historiaDados.projectId

    let dadosFinaisHistoria = [historiaId,data,contagem,userId,apontamentoId,projetoId]

    dadosFinais.push(dadosFinaisHistoria)
  }

  abaHistorias.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET HISTORIES')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getComments(){
  Logger.log('INÍCIO DA FUNÇÃO GET COMMENTS')

  abaComentarios.getRange(2,1,abaComentarios.getLastRow(),abaComentarios.getLastColumn()).clear()

  let comentarios = getData("comments")

  let dadosFinais = []

  for(let i=1; i<comentarios.length; i++){
    let comentarioDados = comentarios[i]
    let comentarioId = comentarioDados.id
    let data = comentarioDados.date
    let contagem = comentarioDados.count
    let usuarioId = comentarioDados.user_id
    let apontamentoId = comentarioDados.issue_id
    let projetoId = comentarioDados.project_id

    let dadosFinaisComentario = [comentarioId,data,contagem,usuarioId,apontamentoId,projetoId]

    dadosFinais.push(dadosFinaisComentario)
  }

  abaComentarios.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET COMMENTS')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getAccessLogs(){
  Logger.log('INÍCIO DA FUNÇÃO GET ACCESS LOGS')

  abaLoginsAcesso.getRange(2,1,abaLoginsAcesso.getLastRow(),abaLoginsAcesso.getLastColumn()).clear()

  let loginsAcesso = getData("access-logs")

  let dadosFinais = []

  for(let i=1; i<loginsAcesso.length; i++){
    let loginAcessoDados = loginsAcesso[i]
    let loginAcessoId = loginAcessoDados.id
    let data = loginAcessoDados.date
    let contagem = loginAcessoDados.count
    let usuarioId = loginAcessoDados.userId
    let projetoId = loginAcessoDados.projectId

    let dadosFinaisLoginAcesso = [loginAcessoId,data,contagem,usuarioId,projetoId]

    dadosFinais.push(dadosFinaisLoginAcesso)
  }

  abaLoginsAcesso.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET TESTS')
}

/**
 * Preenche a respectiva aba da planilha com as informações coletadas do Construflow por meio da API 
 * | Função acionada manualmente, a princípio 
 * | Última atualização: 28/06/2024 
 */
function getTests(){
  Logger.log('INÍCIO DA FUNÇÃO GET TESTS')

  // abaUsuarios.getRange(2,1,abaUsuarios.getLastRow(),abaUsuarios.getLastColumn()).clear()

  let usuarios = getData("users")
  Logger.log(usuarios)
  Logger.log(usuarios[1])

  let dadosFinais = []

  // for(let i=1; i<usuarios.length; i++){
  //   let usuarioDados = usuarios[i]
  //   let apontamentoId = usuarioDados.id
  //   let titulo = usuarioDados.title
  //   let status = usuarioDados.status
  //   let visibilidade = usuarioDados.visibility
  //   let codigo = usuarioDados.code
  //   let descricao = usuarioDados.description
  //   let categoria = usuarioDados.category
  //   let prioridade = usuarioDados.priority
  //   let projectId = usuarioDados.projectId
  //   let dataCriacao = usuarioDados.createdAt
  //   let dataDeadline = usuarioDados.deadline
  //   let faseCriacao = usuarioDados.creationPhase
  //   let faseResolucao = usuarioDados.resolutionPhase
  //   let dataAtualizacao = usuarioDados.updatedAt
  //   let dataAtualizacaoStatus = usuarioDados.statusUpdatedAt
  //   let dataEdicao = usuarioDados.editedAt
  //   let userIdCriacao = usuarioDados.createdByUserId
  //   let userIdAtualizacaoStatus = usuarioDados.statusUpdatedByUserId
  //   let userIdEdicao = usuarioDados.editedByUserId

  //   let dadosFinaisUsuario = [apontamentoId,titulo,status,visibilidade,codigo,descricao,categoria,prioridade,projectId,dataCriacao,dataDeadline,faseCriacao,faseResolucao,dataAtualizacao,dataAtualizacaoStatus,dataEdicao,userIdCriacao,userIdAtualizacaoStatus,userIdEdicao]

  //   dadosFinais.push(dadosFinaisUsuario)
  // }

  // abaUsuarios.getRange(2,1,dadosFinais.length,dadosFinais[0].length).setValues(dadosFinais)

  Logger.log('FIM DA FUNÇÃO GET TESTS')
}
