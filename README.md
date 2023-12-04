# THE CAT PLACE

## Como rodar

- Instalar dependencias: **npm install**
- Iniciar projeto: ng serve --open

## Descrição do projeto

### Componentes

- Home
- Cat breeds
- Luck cat

### Rotas

- /home
- /luckyy
- /breeds

### Serviços

- BreedsService: Serviço que busca as raças.
- LuckService: Serviço que busca um gato aleatorio.

### Pipes

- uppercase: Transforma o titulo das box de gatos em maiusculo.
- titlecase: Formata o nome do gato para primeira letra maior e o resto minusculo.

### Diretivas

- static-message: Diretiva personalizada para gerar uma mensagem aleatoria para seu gato da sorte.
- NgFor: Diretivas estruturais do angular usada no componente cat-breeds.
- NgIf: Diretivas estruturais do angular usada para garantir que as imagens dos gatos existem.

### Módulos e Dependências

- Uso do módulo HttpClientModule e da biblioteca HttpClient para realizar chamadas HTTP à API, pode ser observado nos serviços.
- Implementação da biblioteca ngx-pagination para paginação na lista de breeds.
- Utilização de estilos com CSS padrão e Bootstrap.
