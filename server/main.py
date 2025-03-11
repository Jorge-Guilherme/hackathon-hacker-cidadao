from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.controllers.chat import router as chat_router

# Cria a instância do FastAPI
app = FastAPI()

# Configura o CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://172.22.74.245:8081", "http://localhost:19006"],  # Endereço do Expo (frontend)
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os headers
)

# Inclui as rotas do chat
app.include_router(chat_router)

# Rota raiz
@app.get("/")
async def read_root():
    return {"message": "Bem-vindo ao sistema de chat!"}
