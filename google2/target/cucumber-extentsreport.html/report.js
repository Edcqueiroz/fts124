$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("consultar.feature");
formatter.feature({
  "line": 1,
  "name": "Busca Termo",
  "description": "",
  "id": "busca-termo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7382044100,
  "status": "passed"
});
formatter.before({
  "duration": 5548692900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Busca Termo Unico com Enter",
  "description": "",
  "id": "busca-termo;busca-termo-unico-com-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso o site do Google",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "digito o termo \"feriado\" e pressiono Enter",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tAnd pressiono o Enter"
    }
  ],
  "line": 7,
  "name": "Vejo os resultados e a guia \"feriado - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "consultar.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 1807822600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado",
      "offset": 16
    }
  ],
  "location": "consultar.digito_o_termo_e_pressiono_Enter(String)"
});
formatter.result({
  "duration": 1842280400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "consultar.vejo_os_resultados_e_a_guia(String)"
});
formatter.result({
  "duration": 350719000,
  "status": "passed"
});
formatter.after({
  "duration": 739180300,
  "status": "passed"
});
formatter.after({
  "duration": 876870100,
  "status": "passed"
});
formatter.uri("consultarPT.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Buscar por termo",
  "description": "Se aplica a qualquer usu�rio",
  "id": "buscar-por-termo",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 5622206300,
  "status": "passed"
});
formatter.before({
  "duration": 5582846800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Busca com sucesso por uma unica palavra",
  "description": "",
  "id": "buscar-por-termo;busca-com-sucesso-por-uma-unica-palavra",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 5,
  "name": "que acesso o site do Google",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "digito o termo \"feriado\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "clico no Enter",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "exibe a lista de resultados com o titulo \"feriado - Pesquisa Google\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "consultar.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 1444108500,
  "status": "passed"
});
});