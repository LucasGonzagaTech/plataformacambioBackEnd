Este projeto utiliza Node.js para fazer requisições à Currency Converter API e converter valores entre diferentes moedas.

## Configuração

Antes de começar, certifique-se de ter Node.js instalado no seu ambiente de desenvolvimento.

1. **Instalação de Dependências**

   Para instalar as dependências necessárias (no caso, o axios), execute o seguinte comando no terminal dentro do diretório do projeto:


2. **Obtenção da Chave de API**

Você precisa se registrar na [Currency Converter API](https://www.currencyconverterapi.com/) [Exchange Rates API](https://exchangeratesapi.io/) ou para obter uma chave de API. Substitua `'SuaKey'` no arquivo `index.js` pela sua chave de API.

## Uso

1. **Execução do Projeto**

Para executar o projeto, execute o seguinte comando no terminal:

node index.js

Isso realizará uma conversão de moeda de exemplo e mostrará o resultado no console.


## Estrutura do Projeto

- `index.js`: Contém o código principal para fazer a requisição à API e realizar a conversão de moeda.
- `README.md`: Este arquivo, contendo informações sobre o projeto, configuração, uso e estrutura.
- `package.json`: Arquivo de manifesto do Node.js que define as dependências do projeto (neste caso, apenas o `axios`).

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
