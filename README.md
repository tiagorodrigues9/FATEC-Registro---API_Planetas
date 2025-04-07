# FATEC-Registro---DW3-API_Planetas
Repositório referente a atividade utilizando Node.js MongoDB

A **API-Planetas** é uma aplicação RESTful desenvolvida com **Node.js** e **Express**, conectada ao banco de dados MongoDB Atlas para realizar operações CRUD com planetas do sistema solar.

---

## Tecnologias Utilizadas

- **Node.js** + **Express** – Backend e rotas da API  
- **MongoDB Atlas** - Banco de dados em nuvem 
- **Insomnia** – Testes de requisições HTTP  

---

## Estrutura do Projeto

```
AtividadeDW3-API_Planetas/
├── index.js                      # Arquivo principal
├── package.json                  # Dependências e scripts
├── .gitignore
├── Config/
│   └── db-connection.js          # Conexão com o banco 
├── Controllers/
│   └── planetaController.js      # Lógica das rotas
├── Models/
│   └── planetas.js               # Modelo/schema dos planetas
├── Routes/
│   └── planetasRoutes.js         # Rotas da API
├── Services/
│   └── planetasServices.js       # Regras de negócio
```

---

## Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/tiagorodrigues9/FATEC-Registro---DW3-API_Planetas
cd AtividadeDW3-API_Planetas
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure sua conexão direto no código:**

No arquivo `config/db-connection.js`, substitua pela sua URI do MongoDB Atlas:

```js
import mongoose from "mongoose";

const dbUser = "seu Usuario aqui";
const dbPassword = "sua Senha aqui";
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.aj4uf.mongodb.net/api-planetas?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado ao mondoDB com sucesso!");
    });
};
connect();
export default mongoose;
```

4. **Inicie o servidor:**

```bash
node index.js
```

A API ficará disponível em `http://localhost:4000`.

---

## Endpoints da API

| Método | Rota              | Descrição                                 |
|--------|-------------------|-------------------------------------------|
| GET    | `/planetas`       | Lista todos os planetas                   |
| GET    | `/planetas/:id`   | Retorna um planeta específico pelo ID     |
| POST   | `/planetas`       | Cria um novo planeta                      |
| PUT    | `/planetas/:id`   | Atualiza os dados de um planeta           |
| DELETE | `/planetas/:id`   | Remove um planeta pelo ID                 |

---

### Exemplo - POST `/planetas`

```json
{
  "id": 8,
  "nome": "Netuno",
  "tipo": "Gasoso",
  "descricao": "Planeta azul e gelado, o mais distante do Sol",
  "raio": 24622,
  "densidade": 1.64,
  "gravidade": 11.15,
  "temperatura": -201,
  "qntLuas": 14
}
```

---

## Testes com Insomnia 

Você pode usar ferramentas como **Insomnia** para testar os endpoints.  
É necessário configurar as rotas e métodos corretamente usando `http://localhost:4000`.

---

## Integrantes do Grupo

- *Tiago Rodrigues - Documentação*  
- *Yan Gabriel - API*
- *Vitor Mendes - Figma*  
