# controllers/chat.py
from fastapi import APIRouter, HTTPException, Depends
from app.services.gemini_service import GeminiService

router = APIRouter()

@router.post("/chat")
async def chat(
    prompt: str,
    gemini_service: GeminiService = Depends()
):
    try:
        response = gemini_service.generate_response(prompt)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))