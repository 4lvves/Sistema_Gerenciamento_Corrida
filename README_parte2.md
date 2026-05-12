\# Parte 2 - Desenvolvimento Back-End



\## 1. Modelagem da API



A API foi desenvolvida utilizando FastAPI e mantém o mesmo domínio da Parte 1: gerenciamento de corridas esportivas e participantes.



Os dados são armazenados em memória utilizando listas Python, sem utilização de banco de dados.



\---



\# 2. Endpoints Implementados



| Método | Endpoint | Descrição | Protegido |

|---|---|---|---|

| GET | /races | Lista todas as corridas | Não |

| POST | /races | Cadastra uma nova corrida | Sim |

| GET | /participants | Lista todos os participantes | Não |

| POST | /participants | Cadastra um novo participante | Sim |

| POST | /login | Realiza autenticação e retorna token JWT | Não |



\---



\# 3. Justificativa dos Endpoints Protegidos



\## POST /races



Esse endpoint foi protegido porque o cadastro de corridas deve ser realizado apenas por usuários autorizados, evitando alterações indevidas nos eventos cadastrados.



\## POST /participants



Esse endpoint foi protegido para impedir inserções não autorizadas de participantes no sistema.



\---



\# 4. Relação entre Front-End e Back-End



Os modelos utilizados na API seguem a mesma estrutura dos objetos JSON mockados utilizados no front-end React.



\## Entidade Corrida



\### Campos compartilhados

\- id

\- nome

\- local

\- data

\- categoria



\### Campos omitidos

Nenhum campo foi omitido.



\### Campos adicionados

Nenhum campo adicional foi necessário.



\---



\## Entidade Participante



\### Campos compartilhados

\- id

\- nome

\- idade

\- categoria

\- statusInscricao



\### Campos omitidos

Nenhum campo foi omitido.



\### Campos adicionados

Nenhum campo adicional foi necessário.



\---



\# 5. Schemas Pydantic



Foram utilizados os seguintes schemas para validação:



\- Race

\- Participant

\- LoginData



Os schemas garantem a validação dos dados recebidos e enviados pela API.



\---



\# 6. Autenticação JWT



A autenticação foi implementada utilizando JSON Web Token (JWT).



O endpoint `/login` recebe usuário e senha e retorna um token JWT válido.



Os endpoints protegidos exigem o envio do token no cabeçalho Authorization utilizando o padrão:



```txt

Authorization: Bearer TOKEN

