![img](appRecipes.gif)

[Link deploy](https://georgia-rocha.github.io/recipes-app/)
# Para clonar e testar

1 - Clone o repositório com o comando **git clone**:

```
git clone git@github.com:georgia-rocha/recipes-app.git
```

2 - Entre no diretório que acabou de ser criado:

```
cd recipes-app
```

3 - Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

4 - Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start** você poderá visualizar a aplicação:

```
npm start
```
# Tecnologias Utilizadas

- [**Cypress**](https://docs.cypress.io/guides/overview/why-cypress)
- [**Bootstrap**](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [**Tailwind**](https://v2.tailwindcss.com/docs)
- [**EsLint**](https://eslint.org/docs/latest/)
- [**Jest**](https://jestjs.io/)
- [**JavaScrip**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [**React**](https://legacy.reactjs.org/docs/getting-started.html)
- [**Context-API**](https://legacy.reactjs.org/docs/context.html)

# Objetivo

O presente projeto teve o intuito de colocar em prática os assuntos abordados na última sessão do módulo de Front-End em conjunto com as Softs Skills com isso finalizando o módulo;

## O que foi desenvolvido?

* Esse projeto foi desenvolvido em grupo, onde inicialmente foi formado um grupo de 5 pessoas, porém tivemos alguns imprevistos e tivemos que dar andamento ao projeto com 4 pessoas, e conseguimos entregar um pouco mais de 82% do projeto, dentro do prazo dedicado, ainda temos interesse em finalizá-lo, mas com os outros projetos semanais ficou um pouco inviável no momento.

* Foi criado um aplicativo de Receitas, onde a pessoa usuária pode se cadastrar fazendo o login e encontrar receitas de comidas e drinks, pesquisando por nome, ingredientes ou primeira letra, também é possível entrar na page de detalhes da receita e favorita-lá, também na page de detalhes, existem algumas recomendações de drinks e comidas em um carrossel que mostra 2 receitas por vez(é de acordo com a page que o user está), vídeo mostrando a receita e um  botão de start na receita que some quando a receita é finalizada.

### Pontos a serem melhorados posteriormente:
  
  * Comunicação com a equipe;
  * Organização das branchs;
  * Oraganização do código;
  

# 82% Requisitos Obrigatórios Solicitados

- [ ] 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%

- [x] 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

- [x] 3 - Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha

- [x] 4 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

- [x] 5 - Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user`

- [x] 6 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

- [x] 7 - Implemente o header de acordo com a necessidade de cada tela

- [x] 8 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

- [x] 9 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

- [x] 10 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

- [x] 11 - Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter

- [x] 12 - Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas

- [x] 13 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

- [x] 14 - Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma

- [x] 15 - Exiba um `alert` caso nenhuma receita seja encontrada

- [x] 16 - Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas

- [x] 17 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo

- [x] 18 - Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior

- [x] 19 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

- [x] 20 - Implemente os botões de categoria para serem utilizados como filtro

- [x] 21 - Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria  

- [x] 22 - Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro

- [x] 23 - Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

- [x] 24 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

- [x] 25 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações

- [x] 26 - Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida

- [x] 27 - Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`

- [x] 28 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

- [x] 29 - Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça

- [ ] 30 - Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

- [ ] 31 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

- [x] 32 - Implemente um botão de compartilhar e um de favoritar a receita

- [x] 33 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link de detalhes da receita deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer na tela em uma tag HTML

- [x] 34 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

- [x] 35 - Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e vazio caso contrário

- [x] 36 - Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para vazio e vice-versa

- [x] 37 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções

- [x] 38 - Desenvolva um checkbox para cada item da lista de ingredientes

- [x] 39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

- [x] 40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

- [x] 41 - Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui

- [x] 42 - Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

- [x] 43 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

- [x] 44 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

- [x] 45 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

- [x] 46 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

- [x] 47 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

- [x] 48 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

- [ ] 49 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

- [ ] 50 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo

- [ ] 51 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"

- [ ] 52 - Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita,  nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

- [ ] 53 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

- [ ] 54 - Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

- [ ] 55 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

- [ ] 56 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

- [x] 57 - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

- [x] 58 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível

- [x] 59 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

- [x] 60 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

- [x] 61 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

- [x] 62 - Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login
