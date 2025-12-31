const conteudos = [
  {titulo:"Pensão Alimentícia", link:"modelos/peticao-alimentos.html", keywords:["pensão","alimentos","família"]},
  {titulo:"Divórcio Consensual", link:"modelos/peticao-divorcio.html", keywords:["divórcio","família"]},
  {titulo:"Reclamação Trabalhista", link:"modelos/reclamacao-trabalhista.html", keywords:["trabalho","demissão","rescisão"]},
  {titulo:"Procuração", link:"modelos/procuracao.html", keywords:["procuração","documento"]},
  {titulo:"Código Civil", link:"leis/codigo-civil.html", keywords:["civil","lei"]},
  {titulo:"CLT", link:"leis/clt.html", keywords:["trabalho","clt"]},
  {titulo:"Código Penal", link:"leis/codigo-penal.html", keywords:["penal","crime"]},
  {titulo:"Constituição", link:"leis/constituicao.html", keywords:["constituição","direitos"]}
];

function buscar(){
  let query = document.getElementById("pesquisa").value.toLowerCase();
  let resultados = conteudos.filter(item => item.keywords.some(k => query.includes(k)));
  let html = "";
  if(resultados.length>0){
    html="<ul>";
    resultados.forEach(r=>{
      html+=`<li><a href="${r.link}">${r.titulo}</a></li>`;
    });
    html+="</ul>";
  } else {
    html="<p>Nenhum resultado encontrado. Tente palavras diferentes ou veja o FAQ.</p>";
  }
  document.getElementById("resultados").innerHTML = html;
}
