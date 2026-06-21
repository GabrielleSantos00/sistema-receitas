# sistema-receitas

# Sistema de Receitas

## Integrantes

* Gabrielle Santos
* Júlia Chrispim
* Isabella Oliveira
* Vitória Marconcin

**Curso:** Análise e desenvolvimento de sistemas - noite

# Resumo

O Sistema de Receitas é uma aplicação web desenvolvida com o objetivo de permitir o gerenciamento de receitas culinárias de forma simples e organizada. O sistema possibilita o cadastro, consulta e manutenção de categorias, ingredientes e receitas, promovendo a integração entre frontend e backend por meio de uma API REST. A solução foi construída utilizando tecnologias modernas, incluindo React com TypeScript no frontend e C# com Minimal API, Entity Framework Core e SQLite no backend. O projeto foi desenvolvido como atividade acadêmica da disciplina de Tópicos Especiais em Sistemas e tem como finalidade aplicar conceitos de desenvolvimento full stack, persistência de dados, programação orientada a objetos e controle de versões.

# Funcionalidades

* Cadastro de categorias de receitas.
* Consulta e listagem de categorias cadastradas.
* Edição e exclusão de categorias.
* Cadastro de ingredientes.
* Consulta e listagem de ingredientes cadastrados.
* Edição e exclusão de ingredientes.
* Cadastro de receitas.
* Associação de receitas a categorias.
* Associação de receitas a ingredientes.
* Consulta e listagem de receitas cadastradas.
* Exclusão de receitas.
* Persistência de dados em banco SQLite.
* Integração entre frontend e backend através de API REST.

# Descrição das Funcionalidades

## Gerenciamento de Categorias

Permite cadastrar categorias para organizar as receitas de acordo com sua classificação, como sobremesas, massas, bebidas ou pratos principais. O usuário também pode consultar, editar e remover categorias previamente registradas.

## Gerenciamento de Ingredientes

Possibilita o cadastro de ingredientes utilizados nas receitas, informando seu nome e unidade de medida. O sistema oferece recursos para listagem, atualização e exclusão desses registros.

## Gerenciamento de Receitas

Permite cadastrar receitas informando nome, modo de preparo, tempo de preparo, categoria e ingrediente principal. As receitas ficam armazenadas no banco de dados e podem ser consultadas posteriormente através da interface do sistema.

## Integração Frontend e Backend

O frontend desenvolvido em React realiza requisições para a API construída em C#, permitindo a comunicação entre a interface do usuário e o banco de dados. Essa integração garante o funcionamento das operações de cadastro, consulta e remoção de informações.

## Persistência de Dados

Todas as informações são armazenadas em um banco de dados SQLite por meio do Entity Framework Core, garantindo a persistência dos dados mesmo após o encerramento da aplicação.

# Tecnologias Utilizadas

## Backend

* C#
* .NET Minimal API
* Entity Framework Core
* SQLite

## Frontend

* React
* TypeScript
* React Router DOM
* Bootstrap

## Controle de Versão

* Git
* GitHub

# Repositório

O projeto está disponível no repositório GitHub da equipe:

https://github.com/GabrielleSantos00/sistema-receitas.git


# Uso de IA

## Ferramenta Utilizada

* ChatGPT (OpenAI)

## Forma de Utilização

A ferramenta foi utilizada como apoio na elaboração da documentação do projeto, geração de textos descritivos para o README, auxílio na organização das funcionalidades, explicações técnicas sobre os componentes do sistema e suporte durante o desenvolvimento da aplicação.

Também foram utilizados prompts relacionados à estruturação da documentação acadêmica, descrição das funcionalidades implementadas e revisão textual do conteúdo produzido.

## Revisões Realizadas Pela Equipe

Todo o conteúdo gerado com auxílio da Inteligência Artificial foi revisado pelos integrantes da equipe. Foram realizados ajustes de redação, adequação às funcionalidades efetivamente implementadas no sistema e conferência das informações técnicas antes da entrega final do projeto.
