from pydantic import BaseModel, EmailStr

class DemoEmailCreate(BaseModel):
    email: EmailStr
