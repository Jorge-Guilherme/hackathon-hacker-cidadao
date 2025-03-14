import sys
import os
from fastapi import APIRouter
from pydantic import BaseModel

# Adicionar o diretório raiz do projeto ao sys.path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))))

from data.scripts.IA import resolve_prompt

router = APIRouter()

class Mensagem(BaseModel):
    texto: str

class ChatState:
    def __init__(self):
        self.prompt_receive = ""

    def set_prompt(self, prompt: str):
        self.prompt_receive = prompt

    def get_prompt(self):
        return self.prompt_receive

# Instância da classe para manter o estado
chat_state = ChatState()

@router.post("/enviar-mensagem")
async def enviar_mensagem(mensagem: Mensagem):
    # Armazena o valor da mensagem no estado
    chat_state.set_prompt(mensagem.texto)

    # Passa o valor da mensagem para a função
    resposta = resolve_prompt(chat_state.get_prompt())
    return {"resposta": resposta}