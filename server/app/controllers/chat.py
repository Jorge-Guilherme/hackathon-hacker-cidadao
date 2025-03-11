import sys
import os
from fastapi import APIRouter
from pydantic import BaseModel

# Adicionar o diretório raiz do projeto ao sys.path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))))

from data.scripts.IA import resolve_prompt

PROMPT_RECIEVE: str

router = APIRouter()

class Mensagem(BaseModel):
    texto: str

@router.post("/enviar-mensagem")
async def enviar_mensagem(mensagem: Mensagem):
    # Simula uma resposta do backend
    resposta = resolve_prompt(mensagem.texto)
    return {"resposta": resposta}
