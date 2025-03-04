from fastapi import APIRouter

router = APIRouter()

@router.get("/chat")
async def get_chat_info():
    return {"message": "Bem-vindo ao sistema de chat!"}
