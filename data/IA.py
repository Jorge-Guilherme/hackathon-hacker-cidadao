"""
INSTRUÇÕES DE USO:

Se for usar no linux, executa esse comando no terminal antes de rodar:
export GOOGLE_API_KEY="AIzaSyBBf4cEr1Wb_XPW5tdzAAZFJpTbUOObV_E"

Se for no windows, executa esse:
set GOOGLE_API_KEY=AIzaSyBBf4cEr1Wb_XPW5tdzAAZFJpTbUOObVset GOOGLE_API_KEY=AIzaSyBBf4cEr1Wb_XPW5tdzAAZFJpTbUOObV
"""
# description: script para gerar respostas de perguntas com base em datasets
import google.generativeai as genai
import os
import algorithm as al

# Configure a API key
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

# Parâmetros de geração
generation_config = {
            "temperature": 2,
            "top_p": 0.95,
            "top_k": 64,
            "max_output_tokens": 1024,
            "response_mime_type": "text/plain",
}

# Parâmetros de moderação da geração
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

# Inicialize o modelo
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    safety_settings=safety_settings,
    generation_config=generation_config,
)

prompt = input('Prompt: ')

# Gere a resposta
chat_session = model.start_chat()
response = chat_session.send_message(f'Gere 30 palavras chaves sem acento para consultar em banco de dados com o prompt: "{prompt}" apenas as palavras chaves. Separe ela entre vírgulas')

key_words = response.text.split(',')

datasets = al.check_dataset(key_words)
# datasets = ['efetivos.csv', 'equipamentos_educacao.csv', 'equipamentos_educacao.csv', 'equipamentos_saude.csv', 'escolas_2009-2015.csv', 'escolas_2017-2020.csv', 'localizacao_academias.csv', 'localizacao_coleta_seletiva.csv', 'localizacao_conecta_wifi.csv', 'operacoes_2023.csv', 'pracas_recife.csv', 'quadro_profissionais_educacao_2024.csv', 'transporte_escolar.csv']
information = al.dict_returnal(datasets, key_words)

# print(key_words)
# print(information)
# print(datasets)



def final_prompt(information, prompt):
    command_prompt = f'A partir dessas informações {information} responda: {prompt}. Responda confiando 100% no dataset e de forma clara e pernambucana mas não forçada!'
    chat_session = model.start_chat()
    response_final = chat_session.send_message(command_prompt)

    return response_final.text
