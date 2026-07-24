from pydantic import BaseModel


class AssistantRequest(BaseModel):
    question: str


class AssistantResponse(BaseModel):
    question: str
    answer: str
