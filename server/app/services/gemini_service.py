import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("A chave da API GEMINI_API_KEY não foi encontrada no .env")

genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-1.5-pro-latest')


response = model.generate_content(["Olá, tudo bem?"]) 
print(response.text)  
