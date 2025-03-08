# app/controllers/chat.py
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Mensagem(BaseModel):
    texto: str

@router.post("/enviar-mensagem")
async def enviar_mensagem(mensagem: Mensagem):
    # Simula uma resposta do backend
    resposta = "Olá! Como posso ajudar você hoje?"
    return {"resposta": resposta}