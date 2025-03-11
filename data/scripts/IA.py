"""
Para funcionar a api do GEMINI execute os seguintes comandos:

No linux:
export GOOGLE_API_KEY="AIzaSyBBf4cEr1Wb_XPW5tdzAAZFJpTbUOObV_E"

No windows:
set GOOGLE_API_KEY=AIzaSyBBf4cEr1Wb_XPW5tdzAAZFJpTbUOObVset GOOGLE_API_KEY=AIzaSyBBf4cEr1Wb_XPW5tdzAAZFJpTbUOObV

"""
import os
import sys
import google.generativeai as genai

# adiciona o diretório raiz do projeto ao sys.path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

import data.scripts.algorithm as al

# configuração da API key
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

# parâmetros da ia
generation_config = {
    "temperature": 2,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 1024,
    "response_mime_type": "text/plain",
}

# parâmetros de segurança
safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_NONE",
    },
]

# inicializando o modelo
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    safety_settings=safety_settings,
    generation_config=generation_config,
)


def generate_prompt(msg: str) -> str:
    chat_session = model.start_chat()
    return chat_session.send_message(msg)


def resolve_prompt(prompt):
    # gerar palavras chaves
    msg = (
        f'Gere 30 palavras chaves sem acento para consultar em banco de dados com o prompt: '
        f'"{prompt}" apenas as palavras chaves. Separe ela entre vírgulas'
    )
    key_words = generate_prompt(msg).text.split(',')  # converter a string da resposta em lista

    # chamando as funções do algoritmo de consulta
    datasets = al.check_dataset(key_words)
    information = al.dict_returnal(datasets, key_words)

    # retornando o prompt final
    command_prompt = (
        f'A partir dessas informações {information} responda: {prompt}. '
        f'Responda confiando 100% no dataset e de forma clara e nordestina mas não forçada!. '
        f'Não use "sô"'
    )
    chat_session = model.start_chat()
    response_final = chat_session.send_message(command_prompt)

    return response_final.text
