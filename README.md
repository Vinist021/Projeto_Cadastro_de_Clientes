## 📋 Cadastro de Clientes

Este é um projeto web responsivo para cadastro de clientes, desenvolvido com HTML, CSS (com Bootstrap) e JavaScript (com jQuery). O sistema permite preencher automaticamente o endereço do cliente a partir do CEP informado, consultando a API do ViaCEP.

---

### 🔧 Funcionalidades

- ✅ **Cadastro de clientes** com nome, sobrenome, endereço completo e CEP.
- 📦 **Busca automática de endereço** com base no CEP digitado.
- ⚠️ **Validação** de campos obrigatórios.
- 📄 **Exibição de dados em tabela** responsiva.
- 🔒 **Campos de endereço desabilitados** até que o CEP seja válido e reconhecido.

---

### ⚙️ Lógica do Sistema (Resumo)
* CEP:
  * O campo é mascarado no formato 00000-000.
  * Ao perder o foco e estar preenchido, o CEP é validado (deve conter 8 dígitos).
  * Se válido, a aplicação consulta a API ViaCEP.
  * Se o CEP for encontrado, os campos de endereço são preenchidos automaticamente.
* Formulário:
  * Valida todos os campos antes de permitir o salvamento.
  * Ao salvar, os dados são exibidos na tabela logo abaixo.
* Tabela:
  * Mostra o nome completo e endereço completo, com visibilidade adaptada à largura da tela.
  * As colunas se ajustam para diferentes tamanhos de tela

---

### 🛠️ Tecnologias Utilizadas

- **HTML**
- **CSS** (via [Bootstrap 5](https://getbootstrap.com/))
- **JavaScript**
- **[jQuery](https://jquery.com/)**
- **[jQuery Mask Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/)** (para máscara de CEP)
- **[API ViaCEP](https://viacep.com.br/)** (consulta de endereço por CEP)

---

### 📎 Acesso
🚀 Acesse o projeto: [Projeto_Cadastro_de_Clientes](https://vinist021.github.io/Projeto_Cadastro_de_Clientes/) 


