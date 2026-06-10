fetch('timeline.xml')
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "text/xml");
        desenharTimeline(xmlDoc);
    })
    .catch(error => console.error("Erro a carregar o XML:", error));

// Função ajudante para ler as tags mesmo que tenham o Namespace do professor!
function obterTag(elemento, nomeTag) {
    // Tenta procurar normalmente
    let tags = elemento.getElementsByTagName(nomeTag);
    // Se não encontrar, tenta procurar em todos os Namespaces (o tal *)
    if (tags.length === 0) {
        tags = elemento.getElementsByTagNameNS("*", nomeTag);
    }
    return tags[0]; // Devolve a primeira tag que encontrar
}

function desenharTimeline(xmlDoc) {
    let container = document.getElementById("timeline-container");
    container.innerHTML = ""; 
    
    // Procura todos os eventos usando a nossa função ajudante
    let eventos = xmlDoc.getElementsByTagName("evento");
    if (eventos.length === 0) {
        eventos = xmlDoc.getElementsByTagNameNS("*", "evento");
    }

    for (let i = 0; i < eventos.length; i++) {
        // Usamos a função ajudante para extrair tudo sem erros
        let anoTag = obterTag(eventos[i], "ano_fund");
        let ano = anoTag ? anoTag.textContent : "Desconhecido";
        
        let tituloTag = obterTag(eventos[i], "titulo");
        let titulo = tituloTag ? tituloTag.textContent : "Marco Histórico";
        
        let descTag = obterTag(eventos[i], "descricao");
        let descricao = descTag ? descTag.textContent.substring(0, 120) + "..." : "Sem informação.";

        let imgTag = obterTag(eventos[i], "imagem");
        let imagemHTML = ""; 
        
        // Se houver imagem, cria o código para ela
        if (imgTag && imgTag.textContent.trim() !== "") {
            imagemHTML = `<img src="${imgTag.textContent.trim()}" alt="${titulo}" class="timeline-img">`;
        }

        // Constrói o HTML
        let itemHTML = `
            <div class="timeline-item">
                <div class="timeline-content">
                    ${imagemHTML}
                    <h3>${titulo}</h3>
                    <p>${descricao}</p>
                </div>
                <div class="timeline-dot"></div>
                <div class="timeline-year">${ano}</div>
            </div>
        `;
        
        container.innerHTML += itemHTML;
    }
}