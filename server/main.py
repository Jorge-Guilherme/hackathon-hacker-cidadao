from fastapi import FastAPI
from app.controllers.chat import router as chat_router 

app = FastAPI()

# Rota para o caminho raiz '/'
@app.get("/")
async def read_root():
    return {"message": "Bem-vindo ao sistema de chat!"}

# Inclui as rotas do chat
app.include_router(chat_router)
