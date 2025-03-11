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


def generate_prompt(msg: str) -> str: # função para gerar respostas
    chat_session = model.start_chat()
    return chat_session.send_message(msg)


# teste
# print(key_words)
# print(information)
# print(datasets)


def resolve_prompt(prompt):
    # gerar palavras chaves
    txt = f"""
    Gere 30 palavras chaves sem acento para consultar em banco de 
    dados com o prompt: '{prompt}' apenas as palavras chaves. Separe 
    ela entre vírgulas!
    """

    key_words = generate_prompt(txt).text.split(',') #  converter a string da resposta em lista

    # chamando as funções do algoritmo de consulta
    datasets = al.check_dataset(key_words) 
    information = al.dict_returnal(datasets, key_words)

    # retornando o prompt final
    command_prompt = f"""
    1. A partir dessas informações {information} responda: {prompt}. 
    Responda confiando 100% no dataset e de forma clara e  nordestina 
    mas não forçada!. Não use 'sô'. 

    2. Mas se as pergunta não tem nada a ver com as bases de dados, 
    diga que não pode responder essas perguntas. 
    
    3.Se a pergunta tiver a ver com as bases de dados, mas não tiver a resposta, 
    diga que não tem informação suficiente.
    """

    chat_session = model.start_chat()
    response_final = chat_session.send_message(command_prompt)

    return response_final.text

# print(resolve_prompt('')) # teste
