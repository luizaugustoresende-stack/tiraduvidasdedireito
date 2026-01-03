const dados = [
    { titulo: "Constituição Federal", url: "leis.html" },
    { titulo: "Código de Processo Civil", url: "leis.html" },
    { titulo: "Código Penal", url: "leis.html" },
    { titulo: "CLT", url: "leis.html" },
    { titulo: "Código de Defesa do Consumidor", url: "leis.html" },

    { titulo: "Petição Inicial", url: "peticao_inicial.html" },
    { titulo: "Contestação", url: "contestacao.html" },
    { titulo: "Manifestação", url: "manifestacao.html" },
    { titulo: "Impugnação", url: "impugnacao.html" },
    { titulo: "Procuração", url: "procuracao.html" },

    { titulo: "Apelação", url: "apelacao.html" },
    { titulo: "Agravo de Instrumento", url: "agravo_instrumento.html" },
    { titulo: "Agravo Retido", url: "agravo_retido.html" },
    { titulo: "Agravo de Impedimento", url: "agravo_impedimento.html" },

    { titulo: "Embargos de Declaração", url: "embargos_declaracao.html" },
    { titulo: "Embargos Infringentes", url: "embargos_infringentes.html" },

    { titulo: "Recurso Inominado", url: "recurso_inominado.html" },
    { titulo: "Recurso Especial", url: "recurso_especial.html" },
    { titulo: "Recurso Extraordinário", url: "recurso_extraordinario.html" },

    { titulo: "Habeas Corpus", url: "habeas_corpus.html" },
    { titulo: "Habeas Data", url: "habeas_data.html" }
];

function buscar(){
    const termo = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if(termo.trim() === ""){
        resultsDiv.innerHTML = "<p>Digite algo para buscar.</p>";
        return;
    }

    const resultados = dados.filter(item =>
        item.titulo.toLowerCase().includes(termo)
    );

    if(resultados.length === 0){
        resultsDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }

    resultados.forEach(item => {
        const div = document.createElement("div");
        div.className = "result";
        div.innerHTML = `<a href="${item.url}">${item.titulo}</a>`;
        resultsDiv.appendChild(div);
    });
}
