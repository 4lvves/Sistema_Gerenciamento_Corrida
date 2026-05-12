from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from jose import jwt, JWTError

app = FastAPI()

SECRET_KEY = "corridas"

security = HTTPBearer()

# -----------------------------
# Dados em memória
# -----------------------------

races = [
    {
        "id": 1,
        "nome": "Corrida Noturna Curitiba",
        "local": "Curitiba - PR",
        "data": "2026-06-15",
        "categoria": "5km"
    }
]

participants = [
    {
        "id": 1,
        "nome": "Carlos Henrique",
        "idade": 24,
        "categoria": "5km",
        "statusInscricao": "Confirmada"
    }
]

# -----------------------------
# Schemas
# -----------------------------

class Race(BaseModel):
    id: int
    nome: str
    local: str
    data: str
    categoria: str

class Participant(BaseModel):
    id: int
    nome: str
    idade: int
    categoria: str
    statusInscricao: str

class LoginData(BaseModel):
    username: str
    password: str

# -----------------------------
# JWT
# -----------------------------

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials

    try:
        jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return True
    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido")

# -----------------------------
# Login
# -----------------------------

@app.post("/login")
def login(data: LoginData):

    if data.username == "admin" and data.password == "1234":

        token = jwt.encode(
            {"user": data.username},
            SECRET_KEY,
            algorithm="HS256"
        )

        return {"token": token}

    raise HTTPException(status_code=401, detail="Credenciais inválidas")

# -----------------------------
# Endpoints Corridas
# -----------------------------

@app.get("/races")
def get_races():
    return races

@app.post("/races")
def create_race(
    race: Race,
    authorized: bool = Depends(verify_token)
):
    races.append(race.dict())
    return {"message": "Corrida cadastrada com sucesso"}

# -----------------------------
# Endpoints Participantes
# -----------------------------

@app.get("/participants")
def get_participants():
    return participants

@app.post("/participants")
def create_participant(
    participant: Participant,
    authorized: bool = Depends(verify_token)
):
    participants.append(participant.dict())
    return {"message": "Participante cadastrado com sucesso"}