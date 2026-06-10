# C3 : Product

Gaming Evolution, um site de gamers para gamers!

## 3.1 Installation


1. **Repositório/Organização:** [Repositório no GitHub](https://github.com/inf25tig03/projeto-final)
2. **Netlify:** [Link do Site](https://app.netlify.com/projects/inf25tig03/configuration/general)

## 3.2 Usage

- **Limitações do Produto:** O formulário de contacto simula o envio mas não armazena em base de dados, e sim manda o gmail diretamente para um criador.

## 3.3 Application/Product help


- **Acessibilidade e Ajuda:** Uso de mudança de cor nos links ao passar o rato (*hover*) para indicar interatividade bem como depois de visitar a pagina.

## 3.4 Forms


- **Exemplo de Validação:**
  - Campo de Email: exemplo@qualquer.com
  - Campo de Mensagem: String com um limite de caracteres.

## 3.5 HTML5 and CSS3 validation


- [HTML Validator for this repository](https://validator.w3.org/) 
- [CSS Validator for this repository](https://jigsaw.w3.org/css-validator/) 
[ExemploHtml](./doc/imagens/verificacaohtml.png)
[ExemploCSS](./doc/imagens/verificacaocss.png)

## 3.6 Implementation details


### Page Requirements

| Requirement | Usage Example |
| :--- | :--- |
| At least 4 pages | [home.html](https://inf25tig03.netlify.app) <br> [timeline.html](https://inf25tig03.netlify.app/timeline) <br> [ConsoleWar.html](https://inf25tig03.netlify.app/consolewar) <br> [galeria.html](https://inf25tig03.netlify.app/galeria) |
| 1 XML document | [timeline.xml](https://github.com/inf25tig03/projeto-final/blob/main/src/timeline.xml) |
| 1 XSD document | [schema.xsd](https://github.com/inf25tig03/projeto-final/blob/main/src/schema.xsd) |
| CSS file (if any) | [Style.css](https://github.com/inf25tig03/projeto-final/blob/main/src/style.css) |



### HTML Minimum requirements (usage of)

| Requirement | Usage Example |
| :--- | :--- |
| XML file download | [ Download do XML](https://github.com/inf25tig03/projeto-final/blob/main/src/timeline.html) |
| Table | [ Table ](https://github.com/inf25tig03/projeto-final/blob/main/src/ConsoleWar.html) |
| List | [Listas](https://github.com/inf25tig03/projeto-final/blob/main/src/home.html) |
| Nested List | [Lista aninhada ](https://github.com/inf25tig03/projeto-final/blob/main/src/home.html) |
| Image | [Imagem](https://github.com/inf25tig03/projeto-final/blob/main/src/ConsoleWar.html) |
| Figure | <pre><code>&lt;!DOCTYPE html&gt;<br>&lt;html lang="pt"&gt;<br>&lt;head&gt;<br>  &lt;meta charset="UTF-8"&gt;<br>  &lt;link href="stylehome.css" rel="stylesheet"&gt;<br>  &lt;title&gt;Home of the Gaming Evolution&lt;/title&gt;<br>&lt;/head&gt;</code></pre> |
| Figure Caption | [FigCaption](https://github.com/inf25tig03/projeto-final/blob/main/src/galeria.html) |
| Internal Link | [Âncora](https://github.com/inf25tig03/projeto-final/blob/main/src/home.html) |
| External Link | [Link externo no GitHub](https://github.com/inf25tig03/projeto-final) |
| Form | [Forms](https://github.com/inf25tig03/projeto-final/blob/main/src/home.html) |

### CSS Minimum requirements (usage of/change of)

| Requirement | Usage Example |
| :--- | :--- |
| Type selector | [CSS selector](https://github.com/inf25tig03/projeto-final/blob/main/src/style.css) |
| Id selector | [iD CSS](https://github.com/inf25tig03/projeto-final/blob/main/src/style.css) |
| Class Selector | [classe no CSS](https://github.com/inf25tig03/projeto-final/blob/main/src/style.css)  |
| Pseudo-class Selector | [pseudo-classe no CSS](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css) |
| Attribute Selector | [seletor de atributo no CSS](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css) |
| Pseudo-element Selector | [pseudo-elemento no CSS](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css) |
| Combinator Selector | [seletor combinador no CSS](url)|
| Change Highlight style | [estilo aplicado ao destaque](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css) |
| Image insertion | [CSS onde insere imagem](https://github.com/inf25tig03/projeto-final/blob/main/src/style.css) |
| Hide an element | [Hide an element](https://github.com/inf25tig03/projeto-final/blob/main/src/style.css) |
| Text style | [ propriedades de texto](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css)  |
| Font style | [propriedades de fonte](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css) |
| Background style | [propriedades de fundo](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css) |
| float/position style | [ propriedades de posicionamento](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css) |
| List style | [propriedades de lista](https://github.com/inf25tig03/projeto-final/blob/main/src/stylehome.css)|
| Box element style | [ propriedades de box model](https://github.com/inf25tig03/projeto-final/blob/main/src/styleconsolewar.css)  |
| table style | [Link para propriedades de tabela](https://github.com/inf25tig03/projeto-final/blob/main/src/styleconsolewar.css) |
| Responsibility style 2 screen sizes | [Media queries aplicadas no CSS](https://github.com/inf25tig03/projeto-final/blob/main/src/styleconsolewar.css) |



### Valorization elements (example)

| Element | Usage Example |
| :--- | :--- |
| With Js, alter element content | [Link para o código JS / Linha do ficheiro](https://github.com/inf25tig03/projeto-final/blob/main/src/timeline.js) |
| `<video>` element | [Link para a tag `<video>` no HTML](https://github.com/inf25tig03/projeto-final/blob/main/src/home.html) |
| `<audio>` element | [Link para a tag `<audio>` no HTML](https://github.com/inf25tig03/projeto-final/blob/main/src/galeria.html) |
| `<canvas>` element | [Link para a tag `<canvas>` no HTML](url) |
| With CSS, Flexbox | [Link para o CSS onde usou `display: flex;`](https://github.com/inf25tig03/projeto-final/blob/main/src/ConsoleWar.html) |
| With CSS, transition | [Link para o CSS onde usou `transition`](https://github.com/inf25tig03/projeto-final/blob/main/src/timeline.html) |

---

| | | |
| :---: | :---: | :---: |
| [< Previous](./capitulo2.md) | [^ Main](../README.md) | [Next >](./capitulo4.md) |