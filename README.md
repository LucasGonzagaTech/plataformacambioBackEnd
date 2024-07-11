# Currency Converter API em Node.js

Este projeto utiliza Node.js para fazer requisições à Currency Converter API e converter valores entre diferentes moedas.

## Configuração

Antes de começar, certifique-se de ter Node.js instalado no seu ambiente de desenvolvimento.

1. **Instalação de Dependências**

   Para instalar as dependências necessárias (no caso, o axios), execute o seguinte comando no terminal dentro do diretório do projeto:


2. **Obtenção da Chave de API**

Você precisa se registrar na [Currency Converter API](https://www.currencyconverterapi.com/) para obter uma chave de API. Substitua `'YOUR_API_KEY'` no arquivo `index.js` pela sua chave de API.

## Uso

1. **Execução do Projeto**

Para executar o projeto, execute o seguinte comando no terminal:


Isso realizará uma conversão de moeda de exemplo e mostrará o resultado no console.

2. **Exemplo de Conversão**

O projeto está configurado para converter um valor de 10 unidades da moeda EUR para GBP. Você pode modificar as variáveis `from`, `to` e `amount` no arquivo `index.js` para testar outras conversões.

## Estrutura do Projeto

- `index.js`: Contém o código principal para fazer a requisição à API e realizar a conversão de moeda.
- `README.md`: Este arquivo, contendo informações sobre o projeto, configuração, uso e estrutura.
- `package.json`: Arquivo de manifesto do Node.js que define as dependências do projeto (neste caso, apenas o `axios`).

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
