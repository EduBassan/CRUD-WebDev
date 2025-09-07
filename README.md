# ⚽ Gerenciador de Jogadoras de Futebol Feminino

Uma aplicação web simples em **HTML, CSS e JavaScript** para gerenciar informações de jogadoras de futebol feminino.  
O usuário pode **visualizar, adicionar, editar, excluir e favoritar jogadoras**, com armazenamento local via **LocalStorage**.

---

## 🚀 Funcionalidades

- 📋 **Listagem de jogadoras** em cards com:
  - Foto
  - Nome
  - Posição
  - Clube
  - Estatísticas (gols, assistências e jogos)

- ⭐ **Favoritar jogadoras**  
  - Jogadoras favoritadas ficam sempre **no topo da lista**.

- ➕ **Cadastro de novas jogadoras**  
  - Formulário com campos obrigatórios: nome, posição, clube, foto (URL) e estatísticas.

- ✏️ **Edição de jogadoras**  
  - Permite modificar dados já cadastrados.

- 🗑️ **Remoção de jogadoras**  
  - Exclui permanentemente da lista.

- 💾 **Armazenamento no LocalStorage**  
  - As jogadoras ficam salvas mesmo depois de fechar o navegador.

---

## 🛠️ Tecnologias usadas

- **HTML5** → estrutura do projeto  
- **CSS3** → estilização dos cards e layout  
- **JavaScript** → lógica do CRUD e LocalStorage  

---

## 📂 Estrutura de pastas

meu-projeto/
│
├── index.html          # Página principal
│
├── css/
│   └── style.css       # Estilos da aplicação
│
├── js/
│   └── app.js          # Lógica em JavaScript
│
└── assets/
    └── images/         # Imagens das jogadoras

---

## ▶️ Como executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.  
   *(não precisa de servidor, roda direto no navegador)*

---

## 📸 Exemplo de card

[ Foto da jogadora ]
Nome da Jogadora
Posição - Clube
 Gols |  Assistências |  Jogos
[ Favoritar] [ Editar] [ Excluir]

---

## ✨ Próximas melhorias (ideias)

- Barra de busca para filtrar jogadoras.  
- Filtros por posição (atacante, zagueira, etc.).  
- Opção de subir foto direto do PC (além de URL).  
