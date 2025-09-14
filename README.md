# Adobe ecommerce with cypress
[Portuguese version below]

[EN]This repository contains automated test scenarios using the Cypress framework. It follows the Page Object Model (POM) pattern to keep tests organized, reusable, and easy to maintain.

[PT]Este repositório contém a implementação de **cenários de testes automatizados** utilizando o framework **Cypress**, aplicando o padrão **Page Object Model (POM)** para garantir organização, reutilização de código e manutenção simplificada.

[EN] The following test flows have been implemented/[PT] Foram implementados os seguintes fluxos de teste:
* User registration/Cadastro de usuário
* User login/Login de usuário
* Adding a product to cart/Adicionar produto ao carrinho
* Checkout proccess/Finalização da compra

---

## 📥 How to download the project /Como baixar o projeto

[EN]Clone this repository to your local machine/[PT]Clone este repositório em sua máquina:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

---

## ⚙️ Instalation/Instalação

[EN]Make sure Node.js is installed. [PT]Certifique-se de ter o **Node.js** instalado.

```bash
npm install
```

[EN]Also, install Cypress. [PT]Instale também o **Cypress**:

```bash
npm install cypress --save-dev
```

---

## ▶️ Running the tests/Execução dos testes

### Interactive mode/Modo interativo (Test Runner)

```bash
npx cypress open
```
[EN]This will open Cypress’s graphical interface, where tests can be run individually.
[PT]Será aberta a interface gráfica do Cypress, onde os testes podem ser executados individualmente.

### Headless mode/Modo headless (linha de comando)

```bash
npx cypress run
```

---

## 📂 Project structure /Estrutura do projeto

* **cypress/e2e/** → Contains the test files/Contém os arquivos de teste.
* **cypress/e2e/pageObject/** → Contains the Page Object Model classes/Contém as classes do Page Object Model.
* **cypress/fixtures/** → Contains static data in JSON format (users, products, etc.)/Contém os dados estáticos em formato JSON (usuários, produtos etc).
* **cypress/support/commands.js** → Contains custom Cypress commands that can be reused across tests/ Contém comandos personalizados que podem ser reutilizados.

---

## 📌 Technologies used/Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Cypress](https://www.cypress.io/)
* Page Object Model (POM)


